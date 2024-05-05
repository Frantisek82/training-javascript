// Exercise 5:

// Escribe un programa que genera matrículas aleatorias, sabiendo que:
// • Una matrícula válida debe estar compuesta por 4 números y 3 letras.
// • Los números pueden ir desde 0000 hasta 9999
// • Las letras pueden ir desde BBB hasta ZZZ
// • No se permiten vocales
// • No se permiten las consonantes Ñ ni Q
// El número de matrículas aleatorias será a petición del usuario.

function randomLicensePlates() {
  let plateNumber = prompt(
    "Please, how many license plates to generate: "
  );
  let plate = "";

  function numbersGenerator() {
    let number = Math.floor(Math.random() * 10000);

    if (number < 10) {
      plate = "000" + number;
    } else if (number < 100) {
      plate = "00" + number;
    } else if (number < 1000) {
      plate = "0" + number;
    } else {
      plate = number.toString();
    }
  }

  function letterGenerator() {
    const validChars = [
      "B",
      "C",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "M",
      "N",
      "P",
      "R",
      "S",
      "T",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    //letters
    for (let index = 0; index < 3; index++) {
      plate += validChars[Math.floor(Math.random() * validChars.length)];
    }
  }

  for (let index = 0; index < plateNumber; index++) {
    numbersGenerator();
    plate += " ";
    letterGenerator();
    console.log(`${index + 1}:`, plate);
    //plate = "";
  }
}

randomLicensePlates();
