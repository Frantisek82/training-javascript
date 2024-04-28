// Escribe un programa que pida al usuario email y contraseña. Deberá comparar los datos
// introducidos con los siguientes, que deberán estar guardados en variables:
// email: tolkien@lordofrings.com
// password : aNBR6ZeWPY

let email = prompt("Please, enter your email.");
let password = prompt("Please, enter your password.");

if (email != "tolkien@lordofrings.com" || password != "aNBR6ZeWPY") {
  alert("Wrong password or email!");
} else {
  alert("Welcome Mr. Tolkien");
}
