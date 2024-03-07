"use client";
import axios, { AxiosRequestConfig } from "axios";

export const authInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

authInstance.interceptors.request.use((config: any) => {
  // config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});
