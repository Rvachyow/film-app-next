export const prettyDate = (str: string) => {
  if (str === undefined) return "-";
  const date = new Date(str);
  let newString = "";
  newString =
    date.getDay() +
    " " +
    date.toLocaleString("default", { month: "long" }) +
    " " +
    date.getFullYear();

  return newString;
};
