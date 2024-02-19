"use server";
import axios from "../../shared/api/axios";
import { IListData } from "./types";

export const getList = async (id: string) => {
  try {
    const { data } = await axios.get<IListData>(
      `/movie?page=1&limit=250&lists=${id}`
    );
    const filterData = data.docs.filter((item) => item.top250);
    const sortData = filterData.sort((a, b) => a.top250 - b.top250);
    return sortData;
  } catch (error) {
    console.log(error);
  }
};
