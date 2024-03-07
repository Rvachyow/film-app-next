import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser, LoginDTO, RegistrationDTO } from "./types";
import { authInstance } from "../../shared/api/axiosClient";

export const login = createAsyncThunk(
  "auth/login",
  async ({ dto }: { dto: LoginDTO }) => {
    try {
      const { data } = await authInstance.post("/auth/login", dto);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const registration = createAsyncThunk(
  "auth/registration",
  async ({ dto }: { dto: RegistrationDTO }) => {
    const { data } = await authInstance.post("/auth/register", dto);
    return data;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const { data } = await authInstance.get("/auth/logout");
    return data;
  } catch (error) {
    throw new Error("some error");
  }
});

export const getMe = createAsyncThunk("auth/getMe", async () => {
  try {
    const { data } = await authInstance.get<IUser>("/users/getMe");
    return data;
  } catch (error) {
    throw new Error("some error");
  }
});
