"use server";
import axios from "../../shared/api/axios";
import { IDataListsItem, IGetLists } from "./types";

export async function getDataListsItem(slug: string) {
  try {
    const { data } = await axios.get<IDataListsItem>(
      `movie?page=1&limit=4&lists=${slug}`
    );

    return data.docs;
  } catch (error) {
    console.log(error);
  }
}

export async function getLists() {
  try {
    const { data } = await axios.get<IGetLists>(
      "list?page=1&limit=10&slug=%21top250"
    );
    return data.docs;
  } catch (error) {
    console.log(error);
  }
}
