"use server";
import { CardApp } from "~/shared/ui/CardApp/CardApp";
import { getDataListsItem } from "~/pages/HomePage/ServerActions";
import styles from "./styles.module.scss";

interface IMainTitleBlock {
  name: string;
  slug: string;
}

export const MainTitleBlock = async ({ name, slug }: IMainTitleBlock) => {
  const contentData = await getDataListsItem(slug);

  if (contentData?.length === 0) return null;

  return (
    <div className={styles.preview}>
      <h3>{name}</h3>
      <div className={styles.cards}>
        {contentData?.map((item) => (
          <CardApp {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
