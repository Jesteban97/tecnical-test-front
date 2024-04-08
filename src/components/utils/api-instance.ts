import axios, { AxiosInstance } from "axios";

export default function instanceApi(
  baseURL: string,
  token?: string
): AxiosInstance {
  const api = axios.create({
    baseURL: baseURL,
  });

  const tokenToSend = token ?? localStorage.getItem("token")

  api.interceptors.request.use(
    (req:any) => {
      if (tokenToSend) {
        req.headers.Authorization = `Bearer ${tokenToSend}`;
      }
      return req;
    },
    (err:any) => {
      throw err;
    }
  );

  api.interceptors.response.use(
    (response:any) => {
      return response.data;
    },
    (error:any) => {
      throw error;
    }
  );
  return api;
}
