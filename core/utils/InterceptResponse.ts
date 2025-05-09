import axios, { AxiosInstance } from "axios";
import { getSession } from "next-auth/react";
import appendToken from "./appendToken";
import { tokenApiService } from "../token/tokenApiService";

const interceptResponse = async (httpClient: AxiosInstance) => {
  const session = await getSession();
  const rtkn = session?.user.refreshToken;

  httpClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (!error.response) {
        if (error.message === "Network Error") {
          console.error("Network error - server is probably down");
          throw error;
        } else {
          console.error("Unknown error", error);
          throw error;
        }
      } else {
        const userRefreshToken = rtkn;

        switch (error.response.status) {
          case 401: // Unauthorized
            if (userRefreshToken) {
              await getSession().then((session) => {
                if (session) {
                  session?.user?.refreshToken &&
                    appendToken(error.config, session?.user?.refreshToken);
                }
              });

              return tokenApiService
                .refreshToken()
                .then((token) => {
                  return token;
                })
                .then((token: any) => {
                  appendToken(error.config, token.accessToken);

                  return axios.request(error.config);
                })
                .catch(() => {
                  // clearLocalStorage();
                  // window.location.href = ROUTES.LOGIN;
                });
            } else {
              console.log("8 refresh ::::");
              // clearLocalStorage();
              // window.location.href = ROUTES.LOGIN;
            }
            break;
        }
      }
      return error.response;
    }
  );
};
export default interceptResponse;
