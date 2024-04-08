let days = console.log(
  "The recent month has",
  new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate(),
  "days."
);
let monthName = prompt("Write any month of the year.");
switch (monthName) {
  case "January":
    console.log("January has 31 days");
    break;
  case "February":
    console.log("February has 29 days");
    break;
  case "March":
    console.log("March has 31 days");
    break;
  case "April":
    console.log("April has 30 days");
    break;
  case "May":
    console.log("May has 31 days");
    break;
  case "June":
    console.log("June has 30 days");
    break;
  case "July":
    console.log("July has 31 days");
    break;
  case "August":
    console.log("August has 3o days");
    break;
  case "October":
    console.log("October has 31 days");
    break;
  case "November":
    console.log("November has 30 days");
    break;
  case "December":
    console.log("December has 31 days");
    break;
  default:
    alert("That's not a real month in english!");
    break;
}
