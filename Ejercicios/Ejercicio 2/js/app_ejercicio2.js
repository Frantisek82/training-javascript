// Escribe un programa que le pregunte al usuario un mes, y le indique cuantos días tiene ese mes. En
// caso de error, indicarle el mensaje: That’s not a real month!

let days = console.log(
  "The recent month has",
  new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate(),
  "days."
);
let monthName = prompt("Write any month of the year.");
switch (monthName) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "October":
  case "December":
    alert("This month has 31 days");
    break;
  case "February":
    alert("This month has 28 days");
    break;
  case "April":
  case "June":
  case "August":
  case "November":
    alert("This month has 30 days");
    break;
  default:
    alert("That's not a real month in english!");
    break;
}
