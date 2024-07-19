import { numberGenerator } from "./utils.js";
console.log(numberGenerator(25, 18));

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
exercise4();
