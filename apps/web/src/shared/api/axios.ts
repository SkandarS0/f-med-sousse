import axios, { type AxiosError } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withXSRFToken: true,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

export type ApiErrorResponse = {
  message: string;
  errors?: Record<string, string[]>;
};

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    // Transform error to throw response data instead of full error object
    if (error.response?.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({
      message: error.message,
    });
  },
);
export const getCsrfCookie = () => api.get("/sanctum/csrf-cookie");
