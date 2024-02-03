"use client";
import { Image } from "@nextui-org/react";

import { RaitingTitle } from "~/shared/ui/RaitingTitle/RaitingTitle";
import { TitleTable } from "../TitleTable/TitleTable";

import { ITITLE_DATA } from "~/pages/TitlePage/types";
import styles from "./styles.module.scss";

interface IAboutTitle {
  dataTitle: ITITLE_DATA;
}

export const AboutTitle = ({ dataTitle }: IAboutTitle) => {
  const {
    name,
    year,
    alternativeName,
    ageRating,
    poster,
    rating,
    description,
  } = dataTitle;
  return (
    <>
      <section className={styles.container}>
        <div>
          <Image
            isBlurred
            width={240}
            src={poster.url}
            alt="NextUI Album Cover"
          />
        </div>
        <div className={styles.main}>
          <h3>
            {name} ({year})
          </h3>
          <small style={{ color: "#AE7EDE" }} className="text-default-500">
            {alternativeName} {ageRating}+
          </small>
          <div className={styles.main__container}>
            <h4 className="font-bold text-big">О фильме</h4>
            <TitleTable dataTitle={dataTitle} />
          </div>
        </div>
        <RaitingTitle rating={rating} />
      </section>
      <div className={styles.description}>
        <h4>Описание</h4>
        <p>{description}</p>
      </div>
    </>
  );
};
