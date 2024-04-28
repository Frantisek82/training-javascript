// Escribe un programa que pregunte la temperatura exterior al usuario. Si la temperatura está por
// debajo de 15 grados, lanzar una alerta con el mensaje: Warm up”. En caso de que la temperatura
// sea entre 15 grados y 25, lanzar una alerta con el mensaje: Enjoy the weather !”. En caso de que la
// temperatura sea de más de 25 grados, lanzar la alerta con el mensaje: Cool down.

let outsideTemp = prompt("Please, enter the outside temperature.");

if (outsideTemp < 15) {
  alert("Warm up!");
} else if (outsideTemp >= 15 && outsideTemp <= 25) {
  alert("Enjoy the weather!");
} else if (outsideTemp > 25) {
  alert("Cool down!");
} else {
  alert("Please, enter a valid temperature!");
}

//----------------------------------------------------------------------------

// Another and the best version of the exercise-3

// let outsideTemp;
// do {
//   outsideTemp = prompt("Please enter the outside temperature.").trim();
//   if (outsideTemp == "" || isNaN(outsideTemp)) {
//     alert("Please, write a valid temperature!");
//   }
// } while (outsideTemp == "" || isNaN(parseInt(outsideTemp)));
// // console.log(typeof outsideTemp);
// if (outsideTemp < 15) {
//   alert("Warm up!");
// } else if (outsideTemp >= 15 && outsideTemp <= 25) {
//   alert("Enjoy the weather!");
// } else {
//   alert("Cool down!");
// }
