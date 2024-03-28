// //Determinar tipo de dato y valor de las variables
// // Caso a
// let variable = 838 < 542;
// console.log("a) tipo:", typeof variable, " valor: ", variable);
// // Caso b
// variable = 17 / 5;
// console.log("b) tipo:", typeof variable, " valor: ", variable);
// // Caso c
// variable = 12 * 6;
// console.log("c) tipo:", typeof variable, " valor: ", variable);
// // Caso d
// variable = 35 % 8;
// console.log("d) tipo:", typeof variable, " valor: ", variable);
// // Caso e
// variable = 1 == 3 || 5 > 7 || 10 * 5 > 40;
// console.log("e) tipo:", typeof variable, " valor: ", variable);
// // Caso f
// variable = 13 % 2 == 0;
// console.log("f) tipo:", typeof variable, " valor: ", variable);
// // Caso g
// variable = "CODE" + " " + "SPACE";
// console.log("g) tipo:", typeof variable, " valor: ", variable);
// // Caso h
// variable = (21 / 2) % 3;
// console.log("h) tipo:", typeof variable, " valor: ", variable);
// // Caso i
// variable = 5 == "5";
// console.log("i) tipo:", typeof variable, " valor: ", variable);
// // Caso j
// variable = !(1 == 1);
// console.log("j) tipo:", typeof variable, " valor: ", variable);

// let isLogged = true;
// let isAdmin = true;
// let isOlderThan17 = false;

// console.log("Con el operador or:", isLogged || isAdmin || isOlderThan17);
// console.log("Con el operador and:", isLogged && isAdmin && isOlderThan17);

// console.log("-----------------------");
// console.log(isLogged == isAdmin);
// console.log(isLogged == isOlderThan17);

let totalBet = prompt("Please enter your bet");
// console.log(totalBet);
if (totalBet == 5000) {
  alert("All-in!");
} else if (totalBet < 5000) {
  alert("Passing this round");
} else {
  alert("Wrong bet, try again!");
  while (totalBet > 5000) {
    totalBet = prompt("Please enter your bet");
    if (totalBet > 5000) {
      alert("Wrong bet, try again!");
      totalBet = prompt("Please enter your bet");
    } else if (totalBet == 5000) {
      alert("All-in!");
    } else if (totalBet < 5000) {
      alert("Passing this round");
    }
  }
}
