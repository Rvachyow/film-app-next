import { Person } from "~/full-page/TitlePage/types";

export const professionFinder = (arr: Person[], profession: string) => {
  const findProf = arr.filter((persons) => persons.enProfession === profession);
  return findProf;
};
