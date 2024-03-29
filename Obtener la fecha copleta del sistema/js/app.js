/* Obtener la fecha copleta del sistema para el dia en curso */
const fechaDeHoy = new Date();
// El año con 4 digitos
let year = fechaDeHoy.getFullYear();
// El mes de 0 a 11 (0 - Enero y 11 - Diciembre)
let month = fechaDeHoy.getMonth();
// El dia del mes en curso (entre 1 y 31)
let today = fechaDeHoy.getDate();
// El dia de la semana (0 para el domingo, 6 para el sabado)
let dayOfWeek = fechaDeHoy.getDate();
// La hora, entre 0 y 23
let hour = fechaDeHoy.getHours();
// Los minutos, entre 0 y 59
let minutes = fechaDeHoy.getMinutes();
// Mostrar por consola la hora y los minutos
console.log(hour, ":", minutes);

let day = today;

// Si el dia tiene menos de 2 digitos le pongo un 0 delante
if (day < 10) {
  day = "0" + day;
}
console.log(day);
// Le sumamos 1 al mes para que coincida con nuestro sistema de meses (1-12)
month = month + 1;

// Si el mes tiene menos de 2 digitos le pongo un 0 delante
if (month < 10) {
  month = "0" + month;
}
console.log(month);
console.log(year);
// Concatenamos cadenas de caracteres con las variables, para forma la fecha completa
let fullDate = hour + ":" + minutes + " " + day + "/" + month + "/" + year;

console.log("Today's date and time:");
console.log(fullDate);
