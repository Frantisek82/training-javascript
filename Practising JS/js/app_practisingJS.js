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

// let team = ["Dani", "Alice", "Ana", "Armiche", "Benjamin"];
// console.log(team);
// let team2 = [...team];
// console.log(team2);

// team2[0] = "Coral";

// console.log(team[0]);
// console.log(team2[0]);

// team = ["Dani Vallejo", ...team];
// console.log(team);

// let team3 = new Array("David Calero", "David Miró", "Elena");
// console.log(team3);

// let team4 = Array.of("David Calero", "David Miró", "Elena");
// console.log(team4);

// console.log([...team.entries()]);

//---------------------------------------------------------------

// // Creation of arrays

// // It is possible to create arrays of various shapes:

// // Array literal
// console.log("Creation of arrays");
// console.log("It is possible to create arrays of various shapes:");
// console.log("Array literal:");

// let empty = []; // An array with no elements
// console.log(empty);

// let colors = ["red", "blue", "green"]; // Creates an array with three strings
// console.log(colors);

// let numbers = [1, 357, 5.25, -79]; // An array with 4 numeric elements
// console.log(numbers);

// let combinedElements = [1.1, true, "Hello"]; // Mixed array
// console.log(combinedElements);

// // Spread operator
// console.log("Spread operator:");

// let original = [1, 2, 3];
// console.log(original);

// let originalIncreased = [0, ...original, 4]; // original == [0, 1, 2, 3, 4]
// console.log(originalIncreased);

// let copy = [...original]; // Modifying the copy doesn't change the original
// console.log(copy);

// let hexValues = [..."0123456789ABCDEF"]; // (16) ['0', '1', '2', '3', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
// console.log(hexValues);

// // The Array() Constructor
// console.log("The Array() Constructor:");

// let elements = new Array(-53, 3.1415, true, "awesome arrays");
// console.log(elements);

// // Array.of()
// console.log("Array.of:");

// let empty2 = Array.of(); // => []; empty array
// console.log(empty2);

// let single = Array.of(10); // => [10]; array with a single element
// console.log(single);

// let combined = Array.of(1, true, 3); // => [1, true, 3]
// console.log(combined);

// // Array.from()
// // Convert an iterable or array to a new array
// console.log("Array.from():");
// console.log("Convert an iterable or array to a new array:");

// let copy2 = [Array.from(original)]; // Another way to copy an array
// console.log(copy2);

// // Access array elements

// // Managing arrays
// console.log("------------------------------");
// console.log("Access array elements:");
// console.log("Managing arrays:");

// let colors2 = ["red", "blue", "green"]; // define an array of strings
// console.log(colors2);

// // alert(colors2[0]); // display the first item
// console.log(colors2[0]); // display the first item

// colors2[2] = "black"; // change the third item
// console.log(colors2[2]);

// colors2[3] = "brown"; // add a fourth item
// console.log(colors2[3]);
// console.log(colors2);

// // alert(colors2.length); // 4
// console.log(colors2.length);

// colors2[colors2.length] = "black"; // add a color (position 4)
// colors2[colors2.length] = "white"; // add another color (position 5)
// console.log(colors2);
// console.log(colors2.length);

// // There are several methods to check an array
// console.log("There are several methods to check an array:");

// let checking = ["foo", "bar", "baz", "qux"];
// console.log(Array.from(checking.keys())); // [0, 1, 2, 3]
// console.log(Array.from(checking.values())); // ["foo", "bar", "baz", "qux"]
// console.log(Array.from(checking.entries())); // [[0, "foo"], [1, "bar"], [2, "baz"], [3, "qux"]]

// // Stack Methods - last-in-first-out (LIFO)
// console.log("Stack Methods - last-in-first-out (LIFO):");

// let numbers = [1, 2, 3];
// console.log(numbers);

// numbers.push(5); // adds an element at the end [1, 2, 3, 5]
// console.log(numbers);

// numbers.pop(); // deletes last element [1, 2, 2]
// console.log(numbers);

// numbers.push(4); // adds an element at the end [1, 2, 3, 4]
// console.log(numbers);

// // Queue Methods - first-in-first-out (FIFO)
// console.log("Queue Methods - first-in-first-out (FIFO):");

// let colors3 = ["red", "green", "blue"];
// console.log(colors3);

// colors3.shift(); // (2) ["green", "blue"]
// console.log(colors3);

// colors3.unshift("orange"); // (3) ["orange", "green", "blue"]
// console.log(colors3);

// // Finding elements
// console.log("Finding elements:");

// let mixed = [1, true, 3, NaN, 1];
// console.log(mixed);

// mixed.includes(2); // => false
// console.log(mixed.includes(2));

// mixed.includes(true); // => true
// console.log(mixed.includes(true));

// mixed.includes(NaN); // => true
// console.log(mixed.includes(NaN));

// mixed.indexOf(NaN); // => -1; indexOf can't find NaN
// console.log(mixed.indexOf(NaN));

// mixed.indexOf(3); // => 2
// console.log(mixed.indexOf(3));

// mixed.lastIndexOf(1); // => 4
// console.log(mixed.lastIndexOf(1));

// console.log("----------------------");

// const evens = [2, 4, 6];
// console.log(evens.findIndex((x) => x === 6)); // => 2; index of 6 in the array

// console.log(evens.findIndex((x) => x < 0)); // => -1; no negative numbers in the array

// console.log(evens.find((x) => x % 3 === 0)); // => 6: this is a multiple of 3

// console.log(evens.find((x) => x % 7 === 0)); // => undefined: no multiples of 7 in the array

//-----------------------------------------------------------------------

// function compare(value1, value2) {
//   console.log("value1 vale:", value1);
//   console.log("value2 vale:", value2);
// }

// compare(2,3)

//---------------------------------------------------------------------

// function numAleatorio(min, max) {
//   console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// }

// for (let index = 0; index < 20; index++) {
//   numAleatorio(4, 7);
// }
// // numAleatorio(4, 7);
// // numAleatorio(100, 120);

//---------------------------------------------------------------------

// function compare(value1, value2) {
//   console.log("working!");
//   console.log(value1);
//   console.log(value2);

//   if (value1 < value2) {
//     return -1;
//   } else if (value1 > value2) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// let numbers = [0, 1, 5, 10, 15];
// let copyOfNumbers = [...numbers];
// let secondCopyOfNumbers = Array.from(numbers);

// copyOfNumbers.reverse();

// console.log(numbers);
// console.log(copyOfNumbers);

// console.log(secondCopyOfNumbers);
// secondCopyOfNumbers.sort();
// console.log(secondCopyOfNumbers);

// let team = [
//   "Alice",
//   "Sebastian",
//   "Ismael",
//   "Juan",
//   "David Miró",
//   "David Calero",
// ];
// team.sort();
// console.log(team);
// secondCopyOfNumbers.sort(compare);

// console.log(secondCopyOfNumbers);

// let unorderedNumbers = [20, -8, 3, 102, 43, 18];
// unorderedNumbers.sort(compare);
// console.log(unorderedNumbers);

// let result = compare(2, 3);
// console.log(result);

// let result2 = compare(3, 2);
// console.log(result2);

// let result3 = compare(3, 3);
// console.log(result3);

//--------------------------------------------------------

// let unorderedNumbers = [20, -8, 3, 3, 102, 43, 18];
// let counter = 0;
// unorderedNumbers.sort(function (value1, value2) {
//   counter++;
//   //   console.log("value1: ", value1);
//   //   console.log("value2: ", value2);
//   //   console.log("result: ", value1 - value2);
//   return value1 - value2;
// });
// // console.log(counter);
// // console.log(unorderedNumbers);

// unorderedNumbers.sort((value1, value2) => value2 - value1);
// console.log(unorderedNumbers);

//----------------------------------------------------------------

// // Traditional methods for ordering arrays

// let numbers = [3, 9, 8, 1, 4];
// for (let i = 0; i < numbers.length - 2; i++) {
//   console.log(numbers);
//   for (let j = 0, aux = 0; j < numbers.length - 1; j++) {
//     if (numbers[j] > numbers[j + 1]) {
//       aux = numbers[j];
//       numbers[j] = numbers[j + 1];
//       numbers[j + 1] = aux;
//     }
//   }
// }
// console.log(numbers);

//---------------------------------------------------------------

// // Travel Arrays and objects
// // Iterating arrays
// // The for/of loop works with iterable objects (arrays, strings,...)

// let numbers = [3, 9, 8, 1, 4];
// // for (const num of numbers) {
// //   console.log(num);
// // }

// sum = 0;
// for (let num of numbers) {
//   sum += num;
// }
// console.log(sum);

//------------------------------------------------------------------

// Iterating objects keys
// The for/in loop

// let shoppingCart = {
//   product1: {
//     id: 0,
//     name: "trainers",
//     price: 29.95,
//     quantity: 1,
//   },
//   product2: {
//     id: 1,
//     name: "suitcase",
//     price: 109.95,
//     quantity: 1,
//   },
//   product3: {
//     id: 2,
//     name: "gloves",
//     price: 9.95,
//     quantity: 1,
//   },
//   product4: {
//     id: 3,
//     name: "t-shirt",
//     price: 19.95,
//     quantity: 2,
//   },
// };
// for (let key in shoppingCart) {
//   console.log(shoppingCart[key].id);
//   console.log(shoppingCart[key].name);
// }

// console.log(Object.entries(shoppingCart));

// ----------------or------------------------

// let hero = {
//   character: "Iron Man",
//   name: "Tony Stark",
// };
// for (const key in hero) {
//   console.log(`${key} => ${hero[key]}`);
// }

//-------------------------------------------------------------

// ["Aragorn", "Gandalf", "Nazgul"].forEach((element, index, array) => {
//   console.log(`${element} is at index ${index} in ${array}`);
// });

//-----------------------------------------------------------------

// [..."Soberano de Angmar en tiempos pasados"].forEach((letter) => {
//   console.log(letter);
// });

//--------------------------------------------------------------------

// let numbers = [1, 2, 3];
// let mappedNumbers = numbers.map((number) => number * 2);
// console.log(mappedNumbers);

// let filteredNumbers = numbers.filter((number) => number < 3);
// console.log(filteredNumbers);

// console.log(numbers.every((number) => number > 2));

// console.log(numbers.some((number) => number > 2));

// let totalSum = numbers.reduce((accum, number) => accum + number, 0);
// console.log(totalSum);

// totalSum = 0;
// totalSum = numbers.reduceRight((accum, number) => accum + number, 0);
// console.log(totalSum);

//------------------------------------------------------------------------

// let calendar = new Array(5);
// for (let i = 0; i < calendar.length; i++) {
//   calendar[i] = new Array(7);
// }

// for (let row = 0, day = 1; row < calendar.length; row++) {
//   for (let col = 0; col < calendar[row].length; col++) {
//     if (day < 31) {
//       calendar[row][col] = day++;
//     } else if (day == 31) {
//       calendar[row][col] = day;
//       day = 1;
//     }
//   }
// }

// console.log(calendar);

//------------------------------------------------------------------------------

// // Pruebas Arrays Equipos ______________

// let players = [
//   "Ana",
//   "Armiche",
//   "Alice",
//   "Benjamin",
//   "Beni",
//   "Coral",
//   "David Calero",
//   "Dani Villaba",
//   "Dani Vallejo",
//   "Laura",
//   "Fran",
//   "Helen",
//   "Ismael",
//   "Juan",
//   "Nacho",
//   "Naiara",
//   "Oliver",
//   "Pablo",
//   "Sebastián",
//   "Vero",
// ];
// let leads = ["David Miró*", "Alina*", "Rafa*", "Dani Sánchez*"];

// let teamA = [];
// let teamB = [];
// let teamC = [];
// let teamD = [];

// let leadsSize = 1;
// let playersSize = players.length / 4;
// if (players.length % 4 != 0) {
//   playersSize = Math.ceil(players.length / 4);
// } else {
//   playersSize = players.length / 4;
// }
// for (let i = 0; i < leadsSize; i++) {
//   let random = Math.floor(Math.random() * leads.length);
//   teamA.push(leads[random]);
//   leads.splice(random, 1);
// }
// for (let i = 0; i < playersSize; i++) {
//   let random = Math.floor(Math.random() * players.length);
//   teamA.push(players[random]);
//   players.splice(random, 1);
// }
// for (let i = 0; i < leadsSize; i++) {
//   let random = Math.floor(Math.random() * leads.length);
//   teamB.push(leads[random]);
//   leads.splice(random, 1);
// }
// for (let i = 0; i < playersSize; i++) {
//   let random = Math.floor(Math.random() * players.length);
//   teamB.push(players[random]);
//   players.splice(random, 1);
// }
// for (let i = 0; i < leadsSize; i++) {
//   let random = Math.floor(Math.random() * leads.length);
//   teamC.push(leads[random]);
//   leads.splice(random, 1);
// }
// for (let i = 0; i < playersSize; i++) {
//   let random = Math.floor(Math.random() * players.length);
//   teamC.push(players[random]);
//   players.splice(random, 1);
// }
// for (let i = 0; i < leadsSize; i++) {
//   let random = Math.floor(Math.random() * leads.length);
//   teamD.push(leads[random]);
//   leads.splice(random, 1);
// }
// for (let i = 0; i < playersSize; i++) {
//   let random = Math.floor(Math.random() * players.length);
//   teamD.push(players[random]);
//   players.splice(random, 1);
// }

// if (teamA.includes("David Miró*")) {
//   teamA.push("Nelson");
// } else if (teamB.includes("David Miró*")) {
//   teamB.push("Nelson");
// } else if (teamC.includes("David Miró*")) {
//   teamC.push("Nelson");
// } else if (teamD.includes("David Miró*")) {
//   teamD.push("Nelson");
// }
// if (teamA.includes("Alina*")) {
//   teamA.push("Elías");
// } else if (teamB.includes("Alina*")) {
//   teamB.push("Elías");
// } else if (teamC.includes("Alina*")) {
//   teamC.push("Elías");
// } else if (teamD.includes("Alina*")) {
//   teamD.push("Elías");
// }

// console.log("%cTeam A", "color: #EA047E", teamA.sort());
// console.log("%cTeam B", "color: #FCE700", teamB.sort());
// console.log("%cTeam C", "color: #38E54D", teamC.sort());
// console.log("%cTeam D", "color: #FF6D28", teamD.sort());

//----------------------------------------------------------------------

// Function declaration:

// function sayHello() {
//   console.log("Hi, good afternoon!");
//   //   console.log("Hi, good night!");
// }

// sayHello();

// console.log("----------------------");

// function sayHello(name) {
//   console.log(`Good night, ${name}!`);
// }

// sayHello("Antonio");
// sayHello("Pablo");

// console.log("------------------------");

// function sayHello(moment, name) {
//   console.log(`Good ${moment}, ${name}!`);
// }

// sayHello("morning", "Antonio");
// sayHello("evening", "Pablo");

// console.log("--------------------------");

// function sayHello(moment, name) {
//   console.log(`Good ${moment}, ${name}!`);
//   return name.length;
// }
// let letters = 0;
// letters = sayHello("morning", "Antonio");
// console.log(`Your name has ${letters} letters`);
// letters = sayHello("evening", "Pablo");
// console.log(`Your name has ${letters} letters`);
// letters = sayHello("afternoon", "Alina");

//-----------------------------------------------------------

// const sum = function (num1, num2) {
//   return num1 + num2;
// };
// const sum2 = (num1, num2) => num1 + num2;

// console.log(sum(2, 2));
// console.log(sum(1, 3));
// console.log(sum(0, 4));
// console.log(sum);

// console.log(sum2(11, 11));
// console.log(sum2);

//-----------------------------------------------------------------
