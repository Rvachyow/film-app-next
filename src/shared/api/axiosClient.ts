"use client";
import axios, { AxiosRequestConfig } from "axios";

export const authInstans = axios.create({
  baseURL: "http://localhost:5000/auth/",
  withCredentials: true,
});

authInstans.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});
