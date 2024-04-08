let outsideTemp = prompt("Please enter the outside temperature.");

if (outsideTemp > 25) {
  alert("Cool down!");
} else if (outsideTemp >= 15 || outsideTemp >= 25) {
  alert("Enjoy the weather!");
} else if (outsideTemp < 15) {
  alert("Warm up!");
} else {
  alert("You did not enter correct outside temperature!");
}
