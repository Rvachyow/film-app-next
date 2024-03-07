"use server";
import { filmInstance } from "../../shared/api/axiosServer";
import { ITITLE_DATA } from "./types";

export const getTitle = async (id: number) => {
  try {
    const { data } = await filmInstance.get<ITITLE_DATA>(`movie/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
