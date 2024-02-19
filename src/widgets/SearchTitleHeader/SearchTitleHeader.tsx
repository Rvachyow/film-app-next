import { useState, useCallback } from "react";
import debounce from "lodash/debounce";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "~/shared/ui/icons/SearchIcon/SearchIcon";
import { SearchTitleCard } from "~/shared/ui/SearchTitleCard/SearchTitleCard";
import { getSearchTitle } from "./ServerActions";
import { ISearchTitleItem } from "./types";

import styles from "./styles.module.scss";

export const SearchTitleHeader = () => {
  const [input, setInput] = useState("");
  const [dataTitle, setDataTitle] = useState<ISearchTitleItem[]>();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    handleSearchDebounce(e.target.value);
  };

  const handleSearchData = async (titleName: string) => {
    const trimString = titleName.trim();
    if (!trimString) {
      setDataTitle([]);
      return;
    }
    const data = await getSearchTitle(trimString);
    if (data) {
      let filterData = data.filter((title) => title.poster.url);
      setDataTitle(filterData);
      return;
    }
  };

  const handleClearData = () => {
    setDataTitle([]);
    setInput("");
  };

  const handleSearchDebounce = useCallback(
    debounce((titleName: string) => {
      handleSearchData(titleName);
    }, 800),
    []
  );

  return (
    <div className={styles.searchtitleheader}>
      <Input
        classNames={{
          base: "max-w-full sm:max-w-[10rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        color="primary"
        value={input}
        onChange={handleChangeInput}
        placeholder="Type to search..."
        size="sm"
        startContent={<SearchIcon size={18} />}
        type="search"
        onClear={handleClearData}
      />
      <div className={styles.searchtitleheader__card}>
        {dataTitle?.map((title) => (
          <SearchTitleCard
            key={title.id}
            handleClearData={handleClearData}
            dataTitle={title}
          />
        ))}
      </div>
    </div>
  );
};
