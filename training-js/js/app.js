// let character = "Black Widow";
// switch (character) {
//   case "Capitain America":
//     power = "Indestructible shield";
//     break;
//   case "Black Widow":
//     power = "Master spy & assassin";
//     break;
//   case "Iron Man":
//     power = "Genius-level intellect";
//     break;
//   case "Thor":
//     power = "The hammer of Thor";
//     break;
//   default:
//     console.log("Choose your hero!");
//     break;
// }
// console.log(power);

// counting by one to one

// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++;
// }
// console.log("aqui sigue el codigo");
// console.log(count);
// console.log("-------------------------")

// counting 2 by 2
// let number = 0;
// while (number < 10) {
//   console.log(number);
//   number += 2;
// }
// console.log("-------------------------")

// counting 5 by 5
// let number = 0;
// while (number <= 100) {
//   console.log(number);
//   number += 5;
// }
// console.log("-------------------------")

// counting multiplicando de dos en dos
// let number = 2;
// while (number <= 256) {
//   console.log(number);
//   number *= 2;
// }
// console.log("-------------------------")

// let counter = 10;
// let timer = setInterval(() => {
//   console.log(counter);
//   counter--;
//   if (counter < 0) {
//     clearInterval(timer);
//   }
// }, 1000);
// console.log("-------------------------")

// let limit = 10;
// for (let counter = 0; counter <= limit; counter++) {
//   console.log(counter);
// }

// let hoy = "viernes";

// if (
//   hoy == "lunes" ||
//   hoy == "martes" ||
//   hoy == "miércoles" ||
//   hoy == "jueves" ||
//   hoy == "viernes"
// ) {
//   console.log("Día de trabajo");
// } else if (hoy == "sábado") {
//   console.log("tareas de casa");
// } else {
//   console.log("Día de descanso");
// }

// if (foo == bar || foo == bar) {
// }

// let number = 10;
// while (number > 0) {
//   number--;
//   console.log(number);
// }

//-----------------------------------------------------------

// let number = 2;
// let multi = 1;
// while (multi <= 10) {
//   console.log(number, " x ", multi, " = ", number * multi);
//   multi++;
// }
// console.log("----------------------------------------");

// or

// let numbe = 2;
// let mult = 1;
// while (mult <= 10) {
//   console.log(`${numbe} x ${mult} = ${numbe * mult}`);
//   mult++;
// }
// console.log("----------------------------------------");

//or

// let numb = 2;
// let mul = 1;
// while (mul++ < 10) {
//   console.log(`${numb} x ${mul} = ${numb * mul}`);
// }
// console.log('------------------------------------');

//or

// let num = 10;
// let mu = 1;
// while (mu++ < 10) {
//   console.log(`${num} x ${mu} = ${num * mu}`);
// }
// console.log('------------------------------------');

//Generating multiplication tables
// for (let number = 1; number <= 10; number++) {
//   console.log("Tabla del: ", number);
//   console.log("-------------------");

//   let multi = 1;
//   while (multi <= 10) {
//     console.log(number, "x", multi, "=", number * multi);
//     multi++;
//   }

//   console.log("------------------------");
// }

// let counter = 1;
// for (;counter <= 10) {
//   console.log(counter++);
// }