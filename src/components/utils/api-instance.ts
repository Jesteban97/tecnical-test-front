import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export default function instanceApi(
  baseURL: string
): AxiosInstance {
  const api = axios.create({
    baseURL: baseURL,
  });

  // const tokenToSend = token ?? localStorage.getItem("token")

  // api.interceptors.request.use(
  //   (req: AxiosRequestConfig) => {
  //     if (tokenToSend) {
  //       req.headers.Authorization = `Bearer ${tokenToSend}`;
  //     }
  //     return req;
  //   },
  //   (err: AxiosError) => {
  //     throw err;
  //   }
  // );

  api.interceptors.response.use(
    (response: AxiosResponse) => {
      return response.data;
    },
    (error: AxiosError) => {
      throw error;
    }
  );
  return api;
}
