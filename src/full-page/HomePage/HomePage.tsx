"use server";
import { MainTitleBlock } from "~/widgets/MainTitleBlock/MainTitleBlock";
import { MainTable } from "~/widgets/MainTable/MainTable";
import { getLists } from "./ServerActions";

export const HomePage = async () => {
  const listData = await getLists();
  return (
    <main className="flex flex-col">
      <MainTable />
      {listData?.map((item) => (
        <MainTitleBlock key={item.id} {...item} />
      ))}
    </main>
  );
};
