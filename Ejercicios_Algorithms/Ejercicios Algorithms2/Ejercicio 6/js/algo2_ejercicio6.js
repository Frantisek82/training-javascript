// Ejercicio 6:
// Escribe un programa para generar estadísticas de texto. Recibirá un string proporcionado por el usuario, y a modo de ejemplo, para la entrada: Lorem ipsum dolor sit amet , mostrará la siguiente salida:

// • Length: 26 characters
// • Length witout white space: 22 charactersWords : 5
// • Unique words: 5
// • Unique words(%): 100%
// • Length of shortest word: 3 characters
// • Length of longest word: 5 characters
// • Avg. word length: 4 (con redondeo al número entero más cercano

// import { statsGenerator } from "./utils.js";
const statsGenerator = (cleanString, words, wordCounts, stats) => {
  stats.stringLength = cleanString.length;
  stats.cleanStringLenght = words.join("").length;
  stats.words = words.length;
  stats.uniqueWords = Object.keys(wordCounts).length;
  stats.uniqueWordsPercentage = (stats.uniqueWords * 100) / stats.words;
  let max = 0,
    min = stats.stringLength;
  for (let word of words) {
    if (word.length > max) {
      max = word.length;
    }
    if (word.length < min) {
      min = word.length;
    }
  }
  stats.minWordLength = min;
  stats.maxWordLength = max;

  let sum = 0;
  words.forEach((word) => {
    sum += word.length;
  });

  stats.averageWordLength = Math.round(sum / stats.words);
  return stats;
};

function textStatistics() {
  let string = "";
  let words = 0,
    chars = 0;
  let stats = {
    stringLength: 0,
    cleanStringLength: 0,
    words: 0,
    uniqueWords: 0,
    uniqueWordsPercentage: 0,
    minWordLength: 0,
    maxWordLength: 0,
    averageWordLength: 0,
  };
  do {
    string = prompt("Please, enter your string").trim();
  } while (!string || string.length == 0);
  //   strip all punctuation from string
  let cleanString = string.replace(/[,.!]/g, "");

  //   separete string into array of lowercase words
  words = cleanString.toLocaleLowerCase().split(" ");

  //   form object of word counts
  let wordCounts = {};
  words.forEach((word) => {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });
  let results = statsGenerator(cleanString, words, wordCounts, stats);
  let style =
    "background-color: #0d6efd; font-weight: bold; font-size: 1rem; padding: .5em 1em;";
  let style2 =
    "background-color: #0d6efd; color: white; font-wight: bold; font-size: 1rem; padding: .5em 1em;";
  console.log("%cLength:%c%i characters", style, style2, results.stringLength);
  console.log(
    "%cLength without white-space:%c%i characters",
    style,
    style2,
    results.cleanStringLength
  );
  console.log("%cWords:%c%i", style, style2, results.words);
  console.log("%cUnique Words:%c%i", style, style2, results.uniqueWords);
  console.log(
    "%cUnique Words(%):%c%i%",
    style,
    style2,
    results.uniqueWordsPercentage
  );
  console.log(
    "%cLength of shortest word:%c%i characters",
    style,
    style2,
    results.minWordLength
  );
  console.log(
    "%cLenghth of longest word:%c%i characters",
    style,
    style2,
    results.maxWordLength
  );
  console.log(
    "%cAvg. word length:%c%i",
    style,
    style2,
    results.averageWordLength
  );
}

textStatistics();
