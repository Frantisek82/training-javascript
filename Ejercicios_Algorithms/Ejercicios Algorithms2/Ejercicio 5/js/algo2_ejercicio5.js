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

function stringManager() {
  let startTime = 0,
    endTime = 0,
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
    console.log(string);
  } while (!string || string.length == 0);
  words = string.split(" ").length;
  chars = [...string].length;
  for (let index = 0; index < questions.length; index++) {
    do {
      response = prompt(questions[index]).trim();
      switch (index) {
        case 0:
          options.replaceChars = response == "y" ?? false;
          startTime = performance.now();
          console.log(
            string
              .replaceAll("a", "@")
              .replaceAll("e", "3")
              .replaceAll("i", "1")
              .replaceAll("o", "0")
              .replaceAll("s", "$")
          );
          endTime = performance.now();
          console.log(`${words} words, ${chars} chars`);
          console.log(`Work done in ${endTime - startTime} miliseconds`);
          break;
        case 1:
          options.capitalize = response == "y" ?? false;
          startTime = performance.now();
          console.log(
            string.replace(/(^\w|\s\w)/g, (letter) => letter.toUpperCase())
          );
          endTime = performance.now();
          console.log(`${words} words, ${chars} chars`);
          console.log(`Work done in ${endTime - startTime} miliseconds`);
          break;
        case 2:
          options.replaceSpaces = response == "y" ?? false;
          startTime = performance.now();
          console.log(string.replace(/\s/g, ","));
          endTime = performance.now();
          console.log(`${words} words, ${chars} chars`);
          console.log(`Work done in ${endTime - startTime} miliseconds`);
          break;
      }
    } while (!response || response.length == 0 || !/y|n/i.test(response));
  }
  //   startTime = performance.now();
  //   endTime = performance.now();
  //   console.log(`${words} words, ${chars} chars`);
}

stringManager();
