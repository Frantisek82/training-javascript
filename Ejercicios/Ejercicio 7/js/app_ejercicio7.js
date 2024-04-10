// Mediante una estructura switch, escribe un programa para convertir euros a:
// Dólar americano
// Yen Japonés
// Libra esterlina
// Franco suizo
// Y muestre por consola el siguiente
// resultado: XXX euros equivalen a YYY dólares americanos, ZZZ
// yen japoneses, NNN libras esterlinas y MMM francos suizos. Aplicar template literal para mostrar el
// resultado.

// let currency = prompt(
//   "Por favor, elige de: euros, yen japoneses, libras esterlinas o francos suizos."
// );
// switch (currency) {
//   case "euros":
//     console.log(10, "euros equivalen a", 10 * 1.09, "dólares americanos");
//     break;
//   case "yen japoneses":
//     console.log(
//       10,
//       "yen japoneses equivalen a",
//       10 * 0.0066,
//       "dólares americanos"
//     );
//     break;
//   case "libras esterlinas":
//     console.log(
//       10,
//       "libras esterlinas equivalen a",
//       10 * 1.27,
//       "dólares americanos"
//     );
//     break;
//   case "francos suizos":
//     console.log(
//       10,
//       "francos suizos equivalen a",
//       10 * 1.11,
//       "dólares americanos"
//     );
//     break;
//   default:
//     break;
// }

//---------------------------------------------------------------------------

// Another version of the exercise 7

let amount = 100;
let currency = prompt(
  "Choose currency from: dollar, yen, libra or swiss franc."
);
switch (currency) {
  case "dollar":
    console.log((amount * 1.09).toFixed(2));
    break;
  case "yen":
    console.log((amount * 164.94).toFixed(2));
    break;
  case "libra":
    console.log((amount * 0.86).toFixed(2));
    break;
  case "swiss franc":
    console.log((amount * 0.98).toFixed(2));
    break;
  default:
    console.log("Choose another currency!");
    break;
}
