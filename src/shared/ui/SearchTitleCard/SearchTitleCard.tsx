import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { ISearchTitleItem } from "~/widgets/SearchTitleHeader/types";

import styles from "./styles.module.scss";
import { sliceLongString } from "~/shared/lib/sliceLongString";
import Link from "next/link";

interface ISearchTitleCard {
  dataTitle: ISearchTitleItem;
  handleClearData: () => void,
}

export const SearchTitleCard = ({ dataTitle, handleClearData }: ISearchTitleCard) => {
  const { name, poster, id, year } = dataTitle;
  console.log(name);

  return (
    <Link onClick={() => handleClearData()} href={`/title/${id}`}>
      <Card isFooterBlurred radius="lg" className="border-none">
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src={poster.url}
          width={200}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            <p className={styles.text}>{sliceLongString(name)}</p>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
