"use client";
import { useEffect, useState } from "react";
import { AboutTitle } from "~/widgets/AboutTitle/AboutTitle";
import { ActorsTable } from "~/widgets/ActorsTable/ActorsTable";
import { getTitle } from "./ServerActions";
import { useParams } from "next/navigation";
import { ITITLE_DATA } from "./types";
import { TitleCarousel } from "~/widgets/TitleCarousel/TitleCarousel";

import styles from "./styles.module.scss";

export const TitlePage = () => {
  const [dataTitle, setDataTitle] = useState<ITITLE_DATA>();
  const dataActors = dataTitle?.persons.filter(
    (persons) => persons.enProfession === "actor"
  );
  const { id } = useParams();

  const getDataTitle = async (id: number) => {
    const data = await getTitle(id);
    if (data) {
      return setDataTitle(data);
    }
  };

  useEffect(() => {
    getDataTitle(+id);
  }, [id]);

  if (!dataTitle) return null;

  return (
    <main className={styles.titlePage}>
      <AboutTitle dataTitle={dataTitle} />
      <TitleCarousel dataSimilarMovies={dataTitle.similarMovies} />
      <ActorsTable dataActors={dataActors} />
    </main>
  );
};
