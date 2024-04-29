// Exercise 3:
// Escribe un programa para mostrar un cuadrado de asteriscos de 4x4.

function squareOfAsterisks() {
  let asterisks = "";

  for (let i = 0; i < 4; i++) {
    asterisks += "* * * *\n";
  }
  console.log(asterisks);
}

squareOfAsterisks();
