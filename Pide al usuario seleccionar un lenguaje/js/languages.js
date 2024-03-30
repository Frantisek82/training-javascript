let languaje = prompt("What language do you want from ( en | de | pt | po)?");
switch (languaje) {
  case "en":
    choice = "You chose English language.";
    break;
  case "de":
    choice = "You chose German language.";
    break;
  case "pt":
    choice = "You chose Portuguese language.";
    break;
  case "po":
    choice = "You chose Polish language.";
    break;
  default:
    alert("Choose your language");
    break;
}
alert(choice);
