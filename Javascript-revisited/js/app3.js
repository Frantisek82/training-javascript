import { numberGenerator, stringManager } from "./utils.js";
// console.log(numberGenerator(25, 18));

const exercise4 = () => {
  let tempAccum = 0;
  let counter = 0;
  for (
    let i = 18,
      nov18 = numberGenerator(25, 18),
      nov19 = numberGenerator(25, 18),
      nov20 = numberGenerator(25, 18),
      nov21 = numberGenerator(25, 18),
      nov22 = numberGenerator(25, 18),
      nov23 = numberGenerator(25, 18),
      nov24 = numberGenerator(25, 18);
    i < 25;
    i++, counter++
  ) {
    tempAccum += eval(`nov${i}`);
  }
  console.log("7-Day Average Temperature: ", tempAccum / counter);
};

function exercise5() {
  let startTime = 0,
    endTime = 0,
    startTime2 = 0,
    endTime2 = 0,
    words = 0,
    chars = 0;
  let response = "";
  let questions = [
    "Replace chars by signs? Please, answer y/n.",
    "Capitalize? Please, answer y/n.",
    "Replace spaces with commas? Please, answer y/n.",
  ];
  let options = {
    replaceChars: false,
    capitalize: false,
    replaceSpaces: false,
  };
  let string = "";
  do {
    string = prompt("Please, enter you string.").trim();
    // console.log(string);
  } while (!string || string.length == 0);
  words = string.split(" ").length;
  chars = [...string].length;
  for (let index = 0; index < questions.length; index++) {
    do {
      response = prompt(questions[index]).trim();
      //   console.log(response);
      switch (index) {
        case 0:
          options.replaceChars = response == "y" ?? false;
          break;
        case 1:
          options.capitalize = response == "y" ?? false;
          break;
        case 2:
          options.replaceSpaces = response == "y" ?? false;
          break;
      }
    } while (!response || response.length == 0 || !/y|n/i.test(response));
  }
  startTime = performance.now();
  console.time("work done in ");
  startTime2 = new Date().getTime();
  stringManager(string, options);
  console.log(`${words} words, ${chars} chars`);
  endTime = performance.now();
  console.timeEnd("work done in ");
  endTime2 = new Date().getTime();
  console.log(`with performance: ${endTime - startTime} ms`);
  console.log(`with Date(): ${endTime2 - startTime2} ms`);
}
exercise5();
