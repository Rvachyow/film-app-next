export const prettyLongNumber = (num: number) => {
  let numToStr = String(num);
  let newString = "";
  let stag = 0;
  if (num === undefined) return "-";
  for (let i = numToStr.length - 1; i >= 0; i--) {
    newString = numToStr[i] + newString;
    stag++;
    if (i === 0) return newString;
    if (stag === 3) {
      newString = " " + newString;
      stag = 0;
    }
  }
  return newString;
};
