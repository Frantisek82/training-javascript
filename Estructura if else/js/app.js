//Estructura if / else

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
