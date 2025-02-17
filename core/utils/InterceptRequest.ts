// import { AxiosInstance } from "axios";
// import { getSession } from "next-auth/react";
// import appendToken from "./appendToken";

// const interceptRequest = async (httpClient: AxiosInstance): Promise<void> => {
//   httpClient.interceptors.request.use(
//     async (config) => {
//       await getSession().then((session) => {
//         console.log("session", session);
//         if (session) {
//           const userToken = session.user.accessToken;

//           if (userToken) {
//             appendToken(config, userToken);
//           }
//         }
//       });

//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );
// };

// export default interceptRequest;

import { getSession } from "next-auth/react";

let tokenCache: { token: string | null; expiry: number } = {
  token: null,
  expiry: 0,
};

const getToken = async (): Promise<string | null> => {
  const now = Date.now();
  if (tokenCache.token && tokenCache.expiry > now) {
    return tokenCache.token;
  }

  const session = await getSession();
  if (session && session.user.accessToken) {
    tokenCache.token = session.user.accessToken;
    // Set cache expiry to 5 minutes from now
    tokenCache.expiry = now + 5 * 60 * 1000;
    return tokenCache.token;
  }

  return null;
};

import { AxiosInstance } from "axios";
import appendToken from "./appendToken"; // Assuming the above code is in tokenCache.ts

const interceptRequest = (httpClient: AxiosInstance): void => {
  httpClient.interceptors.request.use(
    async (config) => {
      try {
        const token = await getToken();
        if (token) {
          appendToken(config, token);
        }
      } catch (error) {
        console.error("Error fetching token", error);
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export default interceptRequest;
