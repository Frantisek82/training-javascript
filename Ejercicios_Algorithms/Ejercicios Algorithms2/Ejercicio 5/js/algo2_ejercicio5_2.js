// Exdercise 5:

// Escribe una función con el nombre “ stringManager ”, que recibirá 2 parámetros: un string introducido por el usuario a través del prompt (), y un segundo parámetro, que será un objeto con las funciones a realizar. Genera un Lorem50 desde VS Code para probar el ejercicio.

// El ejercicio comenzará pidiendo un string al usuario, a través de la función prompt(). A continuación, mediante un menú de consola, preguntará al usuario las siguientes opciones:
// • Replace chars by signs?
// • Capitalize?
// • Replace spaces with commas?

// La primera opción reemplazará de la siguiente forma:
// • a => @
// • e => 3
// • i => 1
// • o => 0
// • s => $

// La segunda opción pondrá la primera letra de cada palabra en mayúscula , y la tercera cambiará los espacios por comas. No puede haber 2 comas seguidas.

// El menú aceptará únicamente "y" para sí o "n" para no. Almacenará las respuestas en un objeto con las propiedades : replaceChars , capitalize y replaceSpaces , cuyos valores asociados serán booleanos.

// La salida del programa deberá mostrar el string original, y a continuación el string con cada una de las modificaciones requeridas Un ejemplo con todas las opciones marcadas como true:
// • Lorem ipsum dolor sit amet
// • L0r3m 1p$um d0l0r $1t @m3t
// • Lorem Ipsum Dolor Sit Amet
// • Lorem,ipsum,dolor,sit,amet

// ** El programa deberá registrar el tiempo de realización, es decir, desde que comienza el proceso de transformación del string hasta que termina. Después de los string requeridos, el programa mostrará las siguientes líneas: **
// • 5 words , 25 chars
// • work done in 750 miliseconds

const exercise5 = () => {
  let words;
  let chars;
  let input;
  let questions = {
    replace: null,
    capitalize: null,
    commas: null,
  };
  let sentence = prompt("Enter a sentence");

  do {
    input = prompt("Replace chars by signs?\nY/N");
    if (input == "Y") {
      questions.replace = true;
    } else {
      questions.replace = false;
    }
  } while (input != "Y" && input != "N");
  do {
    input = prompt("Capitalize?\nY/N");
    if (input == "Y") {
      questions.capitalize = true;
    } else {
      questions.capitalize = false;
    }
  } while (input != "Y" && input != "N");
  do {
    input = prompt("Replace spaces with commas?\nY/N");
    if (input == "Y") {
      questions.commas = true;
    } else {
      questions.commas = false;
    }
  } while (input != "Y" && input != "N");

  let timerStart = performance.now();
  stringManager(sentence, questions);
  let timerEnd = performance.now() - timerStart;
  console.log(
    "%cWork done in:",
    "color: black; background-color: Yellow; font-wight: bold",
    timerEnd,
    "ms"
  );

  // Main function
  function stringManager(sentence, questions) {
    console.log(
      "%cEntered sentence:",
      "color: black; background-color: Yellow; font-wight: bold"
    );
    console.log(sentence);
    if (questions.replace == true) {
      console.log(
        "%cChars replaced by signs:",
        "color: black; background-color: Yellow; font-wight: bold"
      );
      replace(sentence);
    }
    if (questions.capitalize == true) {
      console.log(
        "%cFirst letter of the word capitalized:",
        "color: black; background-color: Yellow; font-wight: bold"
      );
      capitalize(sentence);
    }
    if (questions.commas == true) {
      console.log(
        "%cSpaces replaced by commas:",
        "color: black; background-color: Yellow; font-wight: bold"
      );
      commas(sentence);
    }
    count(sentence);
    console.log(
      "%cWords:",
      "color: black; background-color: Yellow; font-wight: bold",
      words
    );
    console.log(
      "%cChars:",
      "color: black; background-color: Yellow; font-wight: bold",
      chars
    );
  }

  // Replace function
  function replace(sentence) {
    let replaceRule = { a: `@`, e: `3`, i: `1`, o: `0`, s: `$` };
    let replaceResult = sentence.replace(/a|e|i|o|s/g, function (matched) {
      return replaceRule[matched];
    });
    console.log(replaceResult);
  }

  // Capitalize function
  function capitalize(sentence) {
    let capitalizeResult = sentence.split(" ");
    for (let i = 0; i < capitalizeResult.length; i++) {
      capitalizeResult[i] =
        capitalizeResult[i][0].toUpperCase() + capitalizeResult[i].substr(1);
    }
    capitalizeResult = capitalizeResult.join(" ");
    console.log(capitalizeResult);
  }

  // Commas function
  function commas(sentence) {
    let commasResult = sentence.replace(/,/g, "");
    commasResult = commasResult.replace(/ /g, ",");
    console.log(commasResult);
  }

  // Count function
  function count(sentence) {
    words = sentence.split(" ").length;
    chars = sentence.split("").length;
  }
};
exercise5();
