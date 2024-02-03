"use server";
import axios from "../../shared/api/axios";
import { ITITLE_DATA } from "./types";

export const getTitle = async (id: number) => {
  try {
    const { data } = await axios.get<ITITLE_DATA>(`movie/${id}`);
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
