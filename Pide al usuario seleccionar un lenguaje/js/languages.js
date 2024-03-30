let languaje = prompt("Choose a language from ( en | de | pt | po)?");
switch (languaje) {
  case "en":
    choice = "Language is English, execute code for English.";
    break;
  case "de":
    choice = "Language is German, execute code for German.";
    break;
  case "pt":
    choice = "Language is Portuguese, execute code for Portuguese.";
    break;
  case "po":
    choice = "Language is Polish, execute code for Polish.";
    break;
  default:
    alert("Language not shosen, using Spanish.");
    break;
}
alert(choice);
