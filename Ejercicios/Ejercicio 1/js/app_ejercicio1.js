// // Escribe un programa que indique en la consola cuantos días tiene el mes en curso, obteniendo el
// // mes real del sistema.

// let days = console.log(
//   new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()
// );

//------------------------------------------------------

// // Another and the best version of the exercise-1

// const actualDate = new Date();
// let month = actualDate.getMonth() + 1;
// console.log("Today is:", actualDate);
// console.log("The number of the month is:", month);

// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     days = 31;
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     days = 30;
//     break;
//   case 2:
//     days = 28;
//     // days = new Date(
//     //   new Date().getFullYear(),
//     //   new Date().getMonth(),
//     //   0
//     // ).getDate();
//     break;
// }
// console.log("The month has", days, "days.");

//-------------------------------------------------------

// Another version of exercise-1

let date = new Date();
let month = date.getMonth() + 1;
console.log(month);

if (
  month == 1 ||
  month == 3 ||
  month == 5 ||
  month == 7 ||
  month == 8 ||
  month == 10 ||
  month == 12
) {
  console.log(31);
} else if (month == 2) {
  console.log(28);
} else {
  console.log(30);
}
