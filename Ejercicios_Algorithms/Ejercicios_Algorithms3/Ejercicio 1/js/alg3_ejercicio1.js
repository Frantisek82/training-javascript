// Ejercicio 1:

// import { numberGenerator } from "../../Ejercicios _algorithms_solutions/js/utils";

// Escribe un programa que pregunte al usuario los límites máximo y mínimo, y genere un array de 20 números aleatorios entre esos valores, ambos incluidos. Luego mostrará el valor más alto y el más bajo dentro del array, con el siguiente formato (por consola):
// • min value : nnn
// • max value : mmm

function limitGenerator() {
  let minLimit = parseInt(prompt("Insert min number: "));
  let maxLimit = parseInt(prompt("Insert max number: "));

  let requiredNumbers = 20;
  let randomNumbersList = new Array(requiredNumbers);

  const numberGenerator = (maxLimit, minLimit) =>
    Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit;

  let minFound = maxLimit;
  let maxFound = minLimit;
  for (let i = 0, temp = 0; i < requiredNumbers; i++) {
    temp = numberGenerator(maxLimit, minLimit);
    randomNumbersList[i] = temp;
    if (temp < minFound) {
      minFound = temp;
    }
    if (temp > maxFound) {
      maxFound = temp;
    }
  }
  console.log(randomNumbersList);

  console.log("Min value: ", minFound);
  console.log("Max value: ", maxFound);
}

limitGenerator();
