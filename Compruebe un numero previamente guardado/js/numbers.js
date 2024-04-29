let number = prompt("Type any number.");
switch (true) {
  case number < 0:
    console.log("The number is less than 0.");
    break;
  case number >= 0 && number <= 10:
    console.log("The number is between 0 and 10.");
    break;
  case number > 10 && number <= 20:
    console.log("The number is between 11 and 20.");
    break;
  case number > 20:
    console.log("The number is more than 20.");
    break;
  default:
    console.log("This is not a number, type any number, please.");
    break;
}