// Exercise 7:

// Escribe un programa que genera 100 números aleatorios, entre 0 y 500, y los almacena en un array.
// A continuación filtra todos los números impares, ordenando los pares de mayor a menor.

function evenNumbersGenerator() {
  let numbers = new Array(100);

  for (let index = 0; index < numbers.length; index++) {
    numbers[index] = Math.floor(Math.random() * 501);
  }
  numbers = numbers.filter((number) => number % 2 === 0);
  numbers = numbers.sort((a, b) => b - a);
  console.log(numbers);
}

evenNumbersGenerator();
