// // Escribe un programa que indique en la consola cuantos días tiene el mes en curso, obteniendo el
// // mes real del sistema.

// let days = console.log(
//   new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()
// );

//------------------------------------------------------

// Another and the best version of the exercise-1

const d = new Date();
let month = d.getMonth() + 1;
console.log("Today is:", d);
console.log("The number of the month is:", month);

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = 28;
    break;
}
console.log("The month has", days, "days.");
