// Exercise 2:

// Escribe un programa que recoge la hora del sistema, y al cargar la página pregunta al usuario su nombre. A continuación, muestra un saludo personalizado (alerta) en función de la hora, teniendo en cuenta los siguientes rangos:
// • Entre las 5:00 y las 11:59 => “Good Morning, {userName}!"
// • Entre las 12:00 y las 17:59 => “Good Afternoon, {userName}!"
// • Entre las 18:00 y las 04:59 => "Good Evening, {userName}!"

// Los saludos deberán estar predefinidos en un objeto con el identificador "greeting".

function personalizadoGreeting() {
  let date = new Date();
  console.log("Today is: ", date);
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let userName = prompt("What is your name?");

  if (hour >= 6 && minutes >= 0 && hour <= 11 && minutes <= 59) {
    alert(`Good Morning, ${userName}!`);
  } else if (hour >= 12 && minutes >= 0 && hour <= 20 && minutes <= 59) {
    alert(`Good Afternoon, ${userName}!`);
  } else if (hour >= 21 && minutes >= 0 && hour <= 5 && minutes <= 59) {
    alert(`Good Evening, ${userName}!`);
  } else {
    console.log("SYSTEM TIME IS FAILING");
  }
}

personalizadoGreeting();
