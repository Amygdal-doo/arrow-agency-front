import axios from "axios";
import { jwtDecode } from "jwt-decode";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type Profile = {
  createdAt: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  role: string;
  updatedAt: string;
};

// Extend the types
declare module "next-auth" {
  interface User {
    id?: string;
    accessToken?: string;
    refreshToken?: string;
    profile?: Profile;
  }

  interface Session {
    user: {
      accessToken?: string;
      refreshToken?: string;
      profile?: Profile;
    };
  }

  interface JWT {
    accessToken?: string | undefined;
    refreshToken?: string | undefined;
    accessTokenExpires?: number;
    profile?: Profile;
  }
}

type DecodedToken = {
  exp: number; // Expiry time in seconds since the Unix epoch
  iat: number; // Issued at time in seconds since the Unix epoch
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Other properties
};

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const { email, password } = credentials as {
            email: string;
            password: string;
          };

          // Make a request to backend API
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}auth/login`,
            {
              email,
              password,
            }
          );

          console.log("response", response);

          if (response.status === 200) {
            const user = response.data;
            console.log("111111", response);
            // Fetch the profile data using the accessToken
            const profileResponse = await axios.get(
              `${process.env.NEXT_PUBLIC_BACKEND_API_URL}users/me`,
              {
                headers: {
                  Authorization: `Bearer ${user.accessToken}`,
                },
              }
            );
            console.log("user auth", user);
            console.log("profile response auth", profileResponse.data);
            // Return a user object with required fields
            return {
              accessToken: user.accessToken,
              refreshToken: user.refreshToken,
              profile: profileResponse.data,
            };
          } else {
            throw new Error("Invalid credentials");
          }
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new Error("Invalid credentials");
        }
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID!,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    // }),
    // Instagram({
    //   clientId: process.env.INSTAGRAM_CLIENT_ID!,
    //   clientSecret: process.env.INSTAGRAM_CLIENT_SECRET!,
    // }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      console.log(`In jwt callback - Token is ${JSON.stringify(token)}`);

      if (account?.provider === "facebook") {
        console.log("Profile facebook account...", account);
        console.log("Profile facebook user...", user);
        console.log("Profile facebook token...", token);
      }

      if (account?.provider === "google") {
        token.accessToken = account.access_token;
        console.log("Profile google account...", account);
        const profileResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}auth/google/token?token=${account.id_token}`
        );

        // token.profile = profileResponse.data;
        token.accessToken = profileResponse.data.accessToken;
        token.refreshToken = profileResponse.data.refreshToken;
        console.log("Profile google...", profileResponse.data);

        const profileResponseReal = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}user/me`,
          {
            headers: {
              Authorization: `Bearer ${profileResponse.data.accessToken}`,
            },
          }
        );

        token.profile = profileResponseReal.data;

        return token;
      } else {
        if (token?.accessToken === "string") {
          const decodedToken = jwtDecode<DecodedToken>(token.accessToken);
          console.log(decodedToken);

          token.accessTokenExpires = decodedToken?.exp * 1000;
        }

        if (user) {
          // Add additional user properties to the token
          token.accessToken = user.accessToken as string;
          token.refreshToken = user.refreshToken;
          token.profile = user.profile; // Add profile to token if needed
        }

        if (
          typeof token.accessTokenExpires === "number" &&
          Date.now() < token.accessTokenExpires
        ) {
          return token;
        }

        // Access token has expired, try to update it
        console.log("**** Update Refresh token ******");
        return token;
      }
      // return refreshAccessToken(token);
    },
    async session({ session, token }) {
      // Ensure session.user is defined before adding properties
      console.log("session", session);
      console.log("session token", token);
      if (session.user) {
        session.user.accessToken = token.accessToken as string;
        session.user.refreshToken = token.refreshToken as string;
        session.user.profile = token.profile as Profile; // Add profile to session if needed
      }
      return session;
    },
  },
};

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
