// Exercise 8:
// Investigando como obtener caracteres a partir de valores ASCII, vamos a crear un generador de contraseñas.
// En primer lugar, pregunta al usuario cuantos caracteres tendrá la contraseña deseada, (mínimo 8 y máximo 16).
// A continuación, pregunta si quiere incluir, paso a paso, cada uno de los siguientes caracteres:
// minúsculas, mayúsculas, números y símbolos.

function passwordGenerator() {
  let length = parseInt(print("Please enter the password length (8 - 16"));
  length = length >= 8 && length <= 16 ? length : 8;
  console.log(length);

  let includeLower = prompt(
    "Would you like to include lowers (y for yes, n for no)"
  ).toLowerCase();
  let withLowers = includeLower == "n" ? false : true;

  let includeUpper = prompt(
    "Would you like to include uppers (y for yes, n for no)"
  ).toLowerCase();
  let withUppers = includeUpper == "n" ? false : true;

  let includeNumber = prompt(
    "Would you like to include numbers (y for yes, n for no"
  ).toLowerCase();
  let withNumbers = includeNumber == "n" ? false : true;

  let includeSymbol = prompt(
    "Would you like to include symbols (y for yes, n for no)"
  ).toLowerCase();
  let withSymbols = includeSymbol == "n" ? false : true;

  !withLowers &&
    !withUppers &&
    !withNumbers &&
    !withSymbols &&
    (withLowers = !withLowers);
  let password = "";
  let repeatedChar = false;
  let countingGenPass = 0;
  while (
    (withLowers && !/[a-z]/.test(password)) ||
    (withUppers && !/[A-Z]/.test(password)) ||
    (withNumbers && !/[0-9]/.test(password)) ||
    (withSymbols &&
      !/(!|"|#|[$]|%|&|'|[()]|[)]|[*]|'|-|.|[/])+/.test(password)) ||
    repeatedChar
  ) {
    countingGenPass++;
    password = "";
    repeatedChar = false;
    for (let i = 0, newChar = false; i < length; i++) {
      while (!newChar) {
        switch (Math.floor(Math.random() * 4) + 1) {
          case 1:
            if (withLowers) {
              password += String.fromCharCode(
                Math.floor(Math.random() * (122 - 97 + 1)) + 97
              );
              newChar = !newChar;
            }
            break;
          case 2:
            if (withUppers) {
              password += String.fromCharCode(
                Math.floor(Math.random() * (57 - 48 + 1)) + 48
              );
              newChar = !newChar;
            }

          default:
            break;
        }
      }
    }
  }
}
