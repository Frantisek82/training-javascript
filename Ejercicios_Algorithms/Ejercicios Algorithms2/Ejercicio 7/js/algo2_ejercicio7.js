// Exercise 7:
// Mediante el objeto Math , genera un número aleatorio entero entre 0 y 10, y guárdalo en una variable.
// A continuación pide al usuario que adivine el número. Tendrá como máximo 3 intentos. El programa debe mostrar el número de intentos disponibles. Si acierta, mostramos el mensaje: You win !”. Si falla, pero le quedan intentos, mostramos el mensaje “Try it again ”. Si agota los intentos y no ha conseguido acertar, mostramos el mensaje: "Sorry , Good luck in love".

// import { numberGenerator } from "../../Algorithms2 Solutions/js/utils";
function numberGenerator(maxLimit, minLimit) {
  Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit;
}

function randomNumberGenerator() {
  let toGuess = numberGenerator(10, 0);
  console.log(toGuess);
  let attemps = 3;
  let userWon = false;
  console.log("Let's play!");
  let userNumber = prompt("Try to guess a number between 0 and 10");
  while (--attemps >= 0 && !userWon) {
    if (toGuess == +userNumber) {
      alert("You win!");
      userWon = true;
    } else if (attemps > 0) {
      userNumber = prompt(`Try again, you have ${attemps} more attemps`);
    }
  }
  if (!userWon) {
    alert("Sorry, Good luck in love...");
  }
}

randomNumberGenerator();
