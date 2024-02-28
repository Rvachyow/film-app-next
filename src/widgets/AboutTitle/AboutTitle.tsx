"use client";
import { Image } from "@nextui-org/react";
import { RaitingTitle } from "~/shared/ui/RaitingTitle/RaitingTitle";
import { TitleTable } from "../TitleTable/TitleTable";
import { ITITLE_DATA } from "~/full-page/TitlePage/types";

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
    videos,
    top250,
  } = dataTitle;
  return (
    <>
      <section className="flex justify-between gap-6">
        <div className="flex flex-col gap-7 ">
          <div>
            <Image
              isBlurred
              width={240}
              src={poster.url}
              alt="NextUI Album Cover"
            />
          </div>
          {videos.trailers.slice(0, 1).map((video) => (
            <iframe
              className="max-w-64"
              key={video.name}
              src={video.url}
            ></iframe>
          ))}
        </div>
        <div className="flex flex-auto flex-col">
          <h3 className="text-start text-lg">
            {name} ({year})
          </h3>
          <small className="text-purple-400 text-sm">
            {alternativeName} {ageRating}+
          </small>
          <div className="mt-12 flex flex-col gap-4">
            <h4 className="h4__title">О фильме</h4>
            <TitleTable dataTitle={dataTitle} />
          </div>
        </div>
        <RaitingTitle top250={top250} rating={rating} />
      </section>
      <div className="w-full flex flex-col items-start mt-32 gap-4">
        <h4 className="h4__title">Описание</h4>
        <p>{description}</p>
      </div>
    </>
  );
};
