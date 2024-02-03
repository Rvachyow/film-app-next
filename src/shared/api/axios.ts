import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_NAME,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": process.env.NEXT_PUBLIC_YOUR_TOKEN,
    accept: "application/json",
  },
});

export default instance;
