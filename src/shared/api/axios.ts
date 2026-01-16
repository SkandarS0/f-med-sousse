import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withXSRFToken: true,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});
export const getCsrfCookie = () => api.get("/sanctum/csrf-cookie");
