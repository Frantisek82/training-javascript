// let character = "Black Widow";
// switch (character) {
//   case "Capitain America":
//     power = "Indestructible shield";
//     break;
//   case "Black Widow":
//     power = "Master spy & assassin";
//     break;
//   case "Iron Man":
//     power = "Genius-level intellect";
//     break;
//   case "Thor":
//     power = "The hammer of Thor";
//     break;
//   default:
//     console.log("Choose your hero!");
//     break;
// }
// console.log(power);

//-----------------------------------------------------

// counting by one to one

// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++;
// }
// console.log("aqui sigue el codigo");
// console.log(count);
// console.log("-------------------------")

// counting 2 by 2
// let number = 0;
// while (number < 10) {
//   console.log(number);
//   number += 2;
// }
// console.log("-------------------------")

// counting 5 by 5
// let number = 0;
// while (number <= 100) {
//   console.log(number);
//   number += 5;
// }
// console.log("-------------------------")

// counting multiplicando de dos en dos
// let number = 2;
// while (number <= 256) {
//   console.log(number);
//   number *= 2;
// }
// console.log("-------------------------")

// let counter = 10;
// let timer = setInterval(() => {
//   console.log(counter);
//   counter--;
//   if (counter < 0) {
//     clearInterval(timer);
//   }
// }, 1000);
// console.log("-------------------------")

// let limit = 10;
// for (let counter = 0; counter <= limit; counter++) {
//   console.log(counter);
// }

//-----------------------------------------------------

// let hoy = "viernes";

// if (
//   hoy == "lunes" ||
//   hoy == "martes" ||
//   hoy == "miércoles" ||
//   hoy == "jueves" ||
//   hoy == "viernes"
// ) {
//   console.log("Día de trabajo");
// } else if (hoy == "sábado") {
//   console.log("tareas de casa");
// } else {
//   console.log("Día de descanso");
// }

// if (foo == bar || foo == bar) {
// }

// let number = 10;
// while (number > 0) {
//   number--;
//   console.log(number);
// }

//-----------------------------------------------------------

// let number = 2;
// let multi = 1;
// while (multi <= 10) {
//   console.log(number, " x ", multi, " = ", number * multi);
//   multi++;
// }
// console.log("----------------------------------------");

// or

// let numbe = 2;
// let mult = 1;
// while (mult <= 10) {
//   console.log(`${numbe} x ${mult} = ${numbe * mult}`);
//   mult++;
// }
// console.log("----------------------------------------");

//or

// let numb = 2;
// let mul = 1;
// while (mul++ < 10) {
//   console.log(`${numb} x ${mul} = ${numb * mul}`);
// }
// console.log('------------------------------------');

//or

// let num = 10;
// let mu = 1;
// while (mu++ < 10) {
//   console.log(`${num} x ${mu} = ${num * mu}`);
// }
// console.log('------------------------------------');

//-----------------------------------------------------

//Generating multiplication tables
// for (let number = 1; number <= 10; number++) {
//   console.log("Tabla del: ", number);
//   console.log("-------------------");

//   let multi = 1;
//   while (multi <= 10) {
//     console.log(number, "x", multi, "=", number * multi);
//     multi++;
//   }

//   console.log("------------------------");
// }

//-----------------------------------------------------

// let counter = 1;
// for (;counter <= 10) {
//   console.log(counter++);
// }

//----------------------------------------------------

// for (let counter = 1, limit = 10; counter <= limit; counter++) {
//   console.log(counter);
// }

// or

// for (
//   let counter = 0, limit = 100;
//   counter <= limit;
//   counter++, limit--
// ) {
//   console.log(counter, " - ", limit);
// }

//or

// let i,
//   j,
//   sum = 0;
// for (i = 0, j = 10; i < 10; i++, j--) {
//   sum += i * j;
//   console.log(sum);
// }

//-------------------------------------------------

// let counter = 1;
// while (counter <= 10) {
//   console.log(counter++);
//   if (counter == 6) {
//     break;
//   }
// }

//--------------------------------------------------

// let counter = 1;
// while (counter++ <= 100) {
//   if (counter % 2 !== 0) {
//     continue;
//     console.log("Hello World!");
//   }
//   console.log(counter);
// }

//----------------------------------------------

// let isPrime = true;
// let num = 101;

// // m = sqrt(n) entonces m x m = n.
// // Si n no es un número primo, se pude escribir
// // como n = a x b, por lo que m x m = a x b.
// // m es un número real mientras que n, a y b son
// // números naturales.
// for (let i = 2; i <= num / i; i++) {
//   if (num % i == 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) console.log("${num} is prime");
// else console.log("${num} is not prime");

//--------------------------------------------------

// // showing pairs
// for (let index = 0; index < 20; index++) {
//   if (index % 2 != 0) {
//     continue;
//   }
//   console.log(index);
// }

//----------------------------------------------

// let totalBet = 0;
// do {
//   totalBet = prompt("Please enter you bet");
//   if (totalBet == 5000) {
//     alert("All in!");
//   } else if (totalBet < 5000) {
//     alert("Passing this round.");
//   }
//   if (totalBet > 5000) {
//     alert("Bet limit is 5000, change your bet, please.");
//   }
//   if (isNaN(totalBet)) {
//     alert("Enter a numeric value, please.");
//   }
// } while (totalBet > 5000 || isNaN(totalBet));

//--------------------------------------------------------------

// interactive menu for hex colors

// let option = null;
// let colors = ["red", "green", "blue"];

// do {
//   console.log("Please, choose a color.");
//   for (let index = 0; index < colors.length; index++) {
//     console.log(index + 1 + "." + colors[index]);
//   }
//   console.log("Press 0 to leave!");
//   option = prompt("Make your choice.");
//   switch (option) {
//     case "1":
//       console.log("%cHex code for red: #FF0000", "color: rgb(255, 0, 0)");
//       break;
//     case "2":
//       console.log("%cHex code for green: #008000", "color: rgb(0, 128, 0)");
//       break;
//     case "3":
//       console.log("%cHex code for blue: #0000FF", "color: rgb(0, 0, 255)");
//       break;

//     default:
//       if (option != 0) {
//         console.warn("Not a valid option, please try again.");
//       } else {
//         console.log("Exiting, see you soon!");
//       }
//       break;
//   }
// } while (option != 0 && option != null);

//---------------------------------------------------------------------------

// let star = {
//   name: "Polaris",
//   costellation: "Ursa Minor",
//   type: "Double/Cepheid",
//   spectralClass: "F7",
//   mag: 2.0,
//   "": "acceptable",
//   mag: 2.5,
// };
// console.log(star.name);
// star.costellation = "Ursa Major";
// console.log(star.costellation);

// let num1 = 4;
// let num2 = num1;
// console.log(num2);
// num2 = 7;
// console.log(num1);
// console.log(num2);

// let star2 = star;
// star2.name = "Mizar";
// // star2.mag = 5.7;

// console.log(star.name);
// console.log(star2.name);
// console.log(star.mag);
// console.log(star[""]);

//-------------------------------------------------------------------------------

// let hero = {
//   character: "Iron Man",
//   name: "Tony Stark",
//   powers: [
//     "Genius-level intellect",
//     "Multiple powered armor suits",
//     "Ability to fly",
//   ],
//   info: {
//     yearCreated: 1963,
//     powerOrigin: "From his suit",
//     weapons: ["repulsor rays", "uni-beam projector", "lasers"],
//     didYouKnow:
//       "Tony Stark created and built one of the Spider-Man's upgraded suits known as the Iron Spider Suit. We got a small glimpse of it in Spider-Man: Homecoming!",
//   },
// };

// let hero2 = new Object();
// hero2.character = "Hulk";
// hero2.name = "Bruce Banner";
// hero2.powers = [
//   "strength",
//   "speed",
//   "stamina",
//   "durability",
//   "regeneration",
//   "night invulnerability",
//   "breathing underwater",
// ];
// console.log(Object.keys(hero2));
// console.log(Object.keys(hero));

//-----------------------------------------------------------------------

// A continuación, mostrar por consola el id y el
// nombre de cada producto del siguiente modo:
// > id: 0, name : Nike Air Zoom Pegasus 38
// > id: 1, name : Nike ZoomX Vaporfly Next% 2

// let shoppingCart = {
//   milk: {
//     product_id: 0,
//     name: "Asturiana",
//     price: 1.5,
//     quantity: 6,
//   },
//   bread: {
//     product_id: 1,
//     name: "Pan Artesano",
//     price: 2.5,
//     quantity: 1,
//   },
//   ham: {
//     product_id: 2,
//     name: "Mortadela",
//     price: 4.05,
//     quantity: 1,
//   },
//   chocolate: {
//     product_id: 3,
//     name: "Valor",
//     price: 3.5,
//     quantity: 2,
//   },
// };

// console.log(
//   `
//   > id: ${shoppingCart.milk.product_id}, name: ${shoppingCart.milk.name}
//   > id: ${shoppingCart.bread.product_id}, name: ${shoppingCart.bread.name}
//   > id: ${shoppingCart.ham.product_id}, name: ${shoppingCart.ham.name}
//   > id: ${shoppingCart.chocolate.product_id}, name: ${shoppingCart.chocolate.name}
//   `
// );

// ------------- Or ------------------

// // let keys = Object.values(shoppingCart);

// // for (let i = 0; i < Object.keys(shoppingCart).length; i++) {
// //   console.log("ID: " + keys[i].product_id + " , Name: " + keys[i].name);
// // }

//-----------------------------------------------------------------------------

// Another versions of the exercise

// let shoppingCart = {
//   product1: {
//     product_id: 0,
//     name: "milk",
//     price: 1.5,
//     quantity: 6,
//   },
//   product2: {
//     product_id: 1,
//     name: "bread",
//     price: 2.5,
//     quantity: 1,
//   },
//   product3: {
//     product_id: 2,
//     name: "ham",
//     price: 4.05,
//     quantity: 1,
//   },
//   product4: {
//     product_id: 3,
//     name: "chocolate",
//     price: 3.5,
//     quantity: 2,
//   },
// };

// console.log(shoppingCart[Object.keys(shoppingCart)[0]]);

// console.log(Object.values(shoppingCart)[1].name);

// console.log(Object.values(shoppingCart));

// let keys = Object.values(shoppingCart);
// // console.log(keys);
// for (let i = 0; i < Object.keys(shoppingCart).length; i++) {
//   console.log("ID: " + keys[i].product_id + " , Name: " + keys[i].name);
// }

// for (let i = 0; i < Object.keys(shoppingCart).length; i++) {
//   console.log(
//     "ID: " +
//       shoppingCart[Object.keys(shoppingCart)[i]].product_id +
//       " , Name: " +
//       shoppingCart[Object.keys(shoppingCart)[i]].name
//   );
// }

// for (let index = 0; index < Object.values(shoppingCart).length; index++) {
//   console.log(
//     "id:",
//     Object.values(shoppingCart)[index].product_id,
//     "   name:",
//     Object.values(shoppingCart)[index].name
//   );
// }

//------------------------------------------------------

// let team = ["Dani", "Alice", "Ana", "Armiche"];

// console.log("The last element is:", team[team.length - 1]);

// console.log("The element in position zero is:", team[0]);

// console.log("The element in position 1 is:", team[1]);

// console.log("The element in position 2 is:", team[2]);

// console.log("The element in position 3 is:", team[3]);

//----------------------------------------------------------
