import axios, { AxiosRequestConfig } from "axios";

export const filmInstans = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_NAME,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": process.env.NEXT_PUBLIC_YOUR_TOKEN,
    accept: "application/json",
  },
});

export const authInstans = axios.create({
  baseURL: "http://localhost:5000/auth/",
  withCredentials: true,
});

authInstans.interceptors.request.use((config: any) => {
  // config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});
