"use server";
import { MainTitleBlock } from "~/widgets/MainTitleBlock/MainTitleBlock";
import { MainTable } from "~/widgets/MainTable/MainTable";

import styles from "./styles.module.scss";
import { getLists } from "./ServerActions";

export const HomePage = async () => {
  // const listData = await getLists();
  return (
    <main className={styles.home}>
      <MainTable />
      {/* {listData?.map((item) => (
        <MainTitleBlock key={item.id} {...item} />
      ))} */}
    </main>
  );
};
