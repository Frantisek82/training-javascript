export const numberGenerator = (maxLimit, minLimit) => {
  return Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit;
};

export const stringManager = (string, object) => {
  console.log(string);
  let newString = "";
  let splittedString = [...string];
  const signsReplacement = { a: "@", e: "3", i: "1", o: "0", s: "$" };
  //   console.log(object);
  for (const key in object) {
    if (object[key]) {
      switch (key) {
        case "replaceChars":
          for (let index = 0; index < splittedString.length; index++) {
            if (Object.keys(signsReplacement).includes(splittedString[index])) {
              newString += signsReplacement[splittedString[index]];
            } else {
              newString += splittedString[index];
            }
          }
          console.log(newString);
          break;
        case "capitalize":
          for (let index = 0; index < splittedString.length; index++) {
            if (index > 0 && splittedString[index - 1].charCodeAt(0) == 32) {
              newString += splittedString[index].toUpperCase();
            } else {
              newString += splittedString[index];
            }
          }
          console.log(newString);
          break;
        case "replaceSpaces":
          for (let index = 0; index < splittedString.length; index++) {
            if (splittedString[index] != "," && splittedString[index] != " ") {
              newString += splittedString[index];
            } else if (splittedString[index] == " ") {
              newString += ",";
            }
          }
          console.log(newString);
          break;
      }
    }
    newString = "";
    splittedString = [...string];
  }
};
