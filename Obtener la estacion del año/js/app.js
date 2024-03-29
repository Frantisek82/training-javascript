// EXERCISE: Obtener la estacion del año a partir del mes en curso devuelto por el sistema.

// The first version of exercise:

let month = prompt(
  "Please type in english the name of the month to find out what season it is in."
);

if (month == "March" || month == "April" || month == "May") {
  alert("spring season");
} else if (month == "June" || month == "July" || month == "August") {
  alert("summer season");
} else if (month == "September" || month == "October" || month == "November") {
  alert("autumn season");
} else if (month == "December" || month == "January" || month == "February") {
  alert("winter season");
} else {
  alert("There is only 12 months, try it again.");
  month = prompt(
    "Please type in english the name of the month to find out what season it is in."
  );
}

//-------------------------------------------------------------------------------------

//The second version of exercise:

// let month = prompt(
//   "Please write in number the month to find out what season it is in."
// );
// if (month == 3 || month == 4 || month == 5) {
//   alert("Spring season.");
// } else if (month == 6 || month == 7 || month == 8) {
//   alert("Summer season.");
// } else if (month == 9 || month == 10 || month == 11) {
//   alert("Autumn season.");
// } else if (month == 12 || month == 1 || month == 2) {
//   alert("Winter season.");
// } else {
//   alert("There is only 12 months, try it again.");
//   month = prompt(
//     "Please write in number the month to find out what season it is in."
//   );
// }

//--------------------------------------------------------------------------------------

//The third version of exercise
// let month = prompt("Please write number of the month.")
// if (month == 12 || month < 3) {
//   console.log("Winter");
// } else if (month >= 3 && month < 6) {
//   console.log("Spring");
// } else if (month >= 6 && month < 9) {
//   console.log("Summer");
// } else {
//   console.log("Autumn");
// }