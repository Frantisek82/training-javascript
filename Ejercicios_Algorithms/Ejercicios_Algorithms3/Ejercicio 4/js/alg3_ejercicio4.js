// Exercise 4:

// Escribe un programa que almacena un DNI dado por el usuario, y verifica si es un DNI válido, lanzando una alerta "Valid DNI" o "The data entered is wrong".

// Para verificar el DNI, se divide el número entre 23 y el resto se sustituye por una letra que se determina por la siguiente tabla:

// | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
// | T | R | W | A | G | M | Y | F | P | D | X  | B  |

// | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 |
// | N  | J  | Z  | S  | Q  | V  | H  | L  | C  | K  | E  |

function verifiedValidity() {
  let validLetters = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];

  console.log(validLetters[22]);
  let dni = prompt("Please, enter you DNI: ");
  let number = dni.substring(0, dni.length - 1);
  let letter = dni.substring(dni.length - 1);
  console.log(letter);

  if (validLetters[parseInt(number) % 23] == letter) {
    alert("Valid DNI");
  } else {
    alert("The data entered is wrong!");
  }

  function dniGenerator() {
    let randomNumber = Math.floor(
      Math.random() * (100000000 - 10000000) + 10000000
    );
    randomNumber += validLetters[randomNumber % 23];
    return randomNumber;
  }
  for (let i = 0; i < 100; i++) {
    console.log(dniGenerator());
  }
}

verifiedValidity();
