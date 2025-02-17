import { AxiosRequestConfig } from "axios";

const appendToken = (
  config: AxiosRequestConfig,
  token: string | null
): void => {
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
};

export default appendToken;
