"use server";
import { CardApp } from "~/shared/ui/CardApp/CardApp";
import { getDataListsItem } from "~/full-page/HomePage/ServerActions";

interface IMainTitleBlock {
  name: string;
  slug: string;
}

export const MainTitleBlock = async ({ name, slug }: IMainTitleBlock) => {
  const contentData = await getDataListsItem(slug);

  if (contentData?.length === 0) return null;

  return (
    <div className="mt-32 flex flex-col gap-5">
      <h3>{name}</h3>
      <div className="flex justify-between flex-nowrap">
        {contentData?.map((item) => (
          <CardApp {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
