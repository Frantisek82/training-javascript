// Teniendo en cuenta las siguientes temperaturas:
// Absolute Zero 273.15 C
// Freezing point 0 C
// Body Temperature 37 C
// Boiling point 100 C
// Escribe un programa que convierta estas temperaturas a Fahrenheit (mediante la estructura
// switch).

let temperature = prompt(
  "Please, choose between absolute zero, freezing point, body temperature or boiling point."
);

switch (temperature) {
  case "absolute zero":
    console.log("The temperature of absolute zero is", -273.15 * (9 / 5) + 32);
    break;
  case "freezing point":
    console.log("The temperature of freezing point is", 0 * (9 / 5) + 32);
    break;
  case "body temperature":
    console.log("The body temperature is", 37 * (9 / 5) + 32);
    break;
  case "boiling point":
    console.log("The temperature of boiling point is", 100 * (9 / 5) + 32);
    break;
  default:
    console.log("Please, choose any of the offered temperatures.");
    break;
}
