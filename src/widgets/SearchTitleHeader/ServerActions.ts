"use server";
import { filmInstance } from "../../shared/api/axiosServer";
import { ISearchTitle } from "./types";

export const getSearchTitle = async (filmName: string) => {
  try {
    const { data } = await filmInstance.get<ISearchTitle>(
      `/movie/search?page=1&limit=3&query=${filmName}`
    );
    console.log(data.docs);

    return data.docs;
  } catch (error) {
    console.log(error);
  }
};
