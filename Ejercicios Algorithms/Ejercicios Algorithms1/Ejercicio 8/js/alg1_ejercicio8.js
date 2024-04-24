// Escribe un programa que pregunte al usuario 2 números y la operación a realizar (suma, resta, multi,
// divide). A continuación, mostrar el resultado de la operación requerida por consola.

// let firstNum = parseFloat(prompt("Please, write the first number."));
// let secondNum = parseFloat(prompt("Please, write the second number."));
// let operation = prompt(
//   "Please, choose the operation to perform for your two numbers from: addition, subtraction, multi or divide."
// );

// switch (operation) {
//   case "addition":
//     console.log("Results for addition:", firstNum + secondNum);
//     break;
//   case "subtraction":
//     console.log("Results for addition:", firstNum - secondNum);
//     break;
//   case "multi":
//     console.log("Results for addition:", firstNum * secondNum);
//     break;
//   case "divide":
//     console.log("Results for addition:", firstNum / secondNum);
//     break;
//   default:
//     alert("Please, choose correctly.");
//     break;
// }

//-------------------------------------------------------------------------------

// Another version of the exercise 8

let num1 = parseFloat(prompt("introduzca primer numero"));
let num2 = parseFloat(prompt("introduzca segundo numero"));
let operador = prompt(
  "introduzca operación a realizar (sumar, restar, multi, divide)"
);

if (operador == "sumar") {
  console.log(num1 + num2);
} else if (operador == "restar") {
  console.log(num1 - num2);
} else if (operador == "multi") {
  console.log(num1 * num2);
} else if (operador == "divide") {
  console.log(num1 / num2);
} else {
  alert("introduzca numeros o operación");
}
