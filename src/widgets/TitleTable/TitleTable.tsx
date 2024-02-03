import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import styles from "./styles.module.scss";
import { ITITLE_DATA } from "~/pages/TitlePage/types";
import { prettyLongNumber } from "~/shared/lib/prettyLongNumber";
import { prettyDate } from "~/shared/lib/prettyDate";

interface ITileTable {
  dataTitle: ITITLE_DATA;
}

export const TitleTable = ({ dataTitle }: ITileTable) => {
  const {
    year,
    countries,
    genres,
    slogan,
    persons,
    budget,
    fees,
    audience,
    ageRating,
    ratingMpaa,
    movieLength,
    premiere,
    distributors,
  } = dataTitle;

  const director = persons.find(
    (persons) => persons.enProfession === "director"
  );
  const writer = persons.filter((persons) => persons.enProfession === "writer");

  const composer = persons.filter(
    (persons) => persons.enProfession === "composer"
  );

  const producer = persons.filter(
    (persons) => persons.enProfession === "producer"
  );

  const designer = persons.filter(
    (persons) => persons.enProfession === "designer"
  );

  const editor = persons.filter((persons) => persons.enProfession === "editor");

  return (
    <div className={styles.table}>
      <Table
        hideHeader
        removeWrapper
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn style={{ backgroundColor: "#9353D3", color: "white" }}>
            NAME
          </TableColumn>
          <TableColumn style={{ backgroundColor: "#9353D3", color: "white" }}>
            COUNTRY
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="2">
            <TableCell>Год производства</TableCell>
            <TableCell>{year}</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Страна</TableCell>
            <TableCell>
              <div className={styles.table__list}>
                {countries.map((countries) => (
                  <p>{countries.name}</p>
                ))}
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>Жанр</TableCell>
            <TableCell>
              <div className={styles.table__list}>
                {genres.map((genres) => (
                  <p>{genres.name}</p>
                ))}
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell>Слоган</TableCell>
            <TableCell><p style={{ color: "#AE7EDE" }}>{slogan}</p></TableCell>
          </TableRow>
          <TableRow key="6">
            <TableCell>Режиссер</TableCell>
            <TableCell>{director?.name}</TableCell>
          </TableRow>
          <TableRow key="7">
            <TableCell>Сценарий</TableCell>
            <TableCell>
              <div className={styles.table__list}>
                {writer.map((writer) => (
                  <p>{writer.name}</p>
                ))}
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="8">
            <TableCell>Продюсер</TableCell>
            <TableCell>
              <div className={styles.table__list}>
                {producer.map((producer) => (
                  <p>{producer.name}</p>
                ))}
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="9">
            <TableCell>Композитор</TableCell>
            <TableCell>
              <div className={styles.table__list}>
                {composer.map((composer) => (
                  <p>{composer.name}</p>
                ))}
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="10">
            <TableCell>Художник</TableCell>
            <TableCell>
              <div className={styles.table__list}>
                {designer.slice(0, 3).map((designer) => (
                  <p>{designer.name}</p>
                ))}
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="11">
            <TableCell>Монтаж</TableCell>
            <TableCell>
              <div className={styles.table__list}>
                {editor.map((editor) => (
                  <p>{editor.name}</p>
                ))}
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="12">
            <TableCell>Бюджет</TableCell>
            <TableCell>
              {budget?.currency}
              {prettyLongNumber(budget?.value)}
            </TableCell>
          </TableRow>
          <TableRow key="13">
            <TableCell>Сборы в США</TableCell>
            <TableCell>
              {fees.usa.currency}
              {prettyLongNumber(fees.usa.value)}
            </TableCell>
          </TableRow>
          <TableRow key="14">
            <TableCell>Сборы в мире</TableCell>
            <TableCell>
              +{fees.usa.currency}
              {prettyLongNumber(+fees.world.value - +fees.usa.value)} ={" "}
              {fees.world.currency}
              {prettyLongNumber(fees.world.value)}
            </TableCell>
          </TableRow>
          <TableRow key="15">
            <TableCell>Зрители</TableCell>
            <TableCell>
              <div className={styles.table__list}>
                {audience?.map((audience) => (
                  <p>
                    {audience.country} {prettyLongNumber(audience.count)}
                  </p>
                ))}
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="16">
            <TableCell>Сборы в России</TableCell>
            <TableCell>
              {fees.russia?.currency}
              {prettyLongNumber(fees.russia?.value)}
            </TableCell>
          </TableRow>
          <TableRow key="17">
            <TableCell>Премьера в России</TableCell>
            <TableCell>
              {prettyDate(premiere.russia)}
              {}
            </TableCell>
          </TableRow>
          <TableRow key="18">
            <TableCell>Премьера в мире</TableCell>
            <TableCell>{prettyDate(premiere.world)}</TableCell>
          </TableRow>
          {/* <TableRow key="19">
            <TableCell>Ре-релиз (РФ)</TableCell>
            <TableCell>
              {prettyDate(premiere.russia)}, «Каравелла DDC»
            </TableCell>
          </TableRow> */}
          <TableRow key="20">
            <TableCell>Релиз на DVD</TableCell>
            <TableCell>
              {prettyDate(premiere.dvd)} {distributors?.distributorRelease}
            </TableCell>
          </TableRow>
          <TableRow key="21">
            <TableCell>Релиз на Blu-ray</TableCell>
            <TableCell>
              {prettyDate(premiere.bluray)} {distributors?.distributor}
            </TableCell>
          </TableRow>
          <TableRow key="22">
            <TableCell>Возраст</TableCell>
            <TableCell>{ageRating}+</TableCell>
          </TableRow>
          <TableRow key="23">
            <TableCell>Рейтинг MPAA</TableCell>
            <TableCell>{ratingMpaa}</TableCell>
          </TableRow>
          <TableRow key="24">
            <TableCell>Время</TableCell>
            <TableCell>
              {movieLength} мин {}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
