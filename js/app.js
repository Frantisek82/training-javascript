// Destructuring arrays

// let [num1, num2] = [1, 2];
// [num1, num2] = [11];
// [num1, num2] = [7, 9, 8];
// [, num1, , , , num2] = [4, 6, 7, 9, 15, -8, 20];
// let num3;
// [num1, , , num2, , ...num3] = [1, 2, 3, 4, 5, 6, 7, 8];
// [num1, [num2, num3]] = [3, [2.5, 9], 6, 7, 8];
// let num4;
// // [num1, [, num2], num3, ...num4] = [3, [2.5, 9], 6, 7, 8];
// [num1, [, num2], num3] = [3, [2.5, 9], 6, 7, 8];

// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);

// let [start, , , middle, ...rest] = "Hello";
// console.log(start);
// console.log(middle);
// console.log(rest);

// Desestructuracion objetos

// let hero = {
//   character: "Doctor Strange",
//   name: "Benedict Cumberbatch",
//   powers: {
//     artifacts: ["Eye of Agamotto", "Book of Vishanti", "Orb of Agamotto"],
//     skills: ["Judo", "Magically conjured weapons"],
//   },
// };

// let { name } = hero;
// let { artifacts, ...otherPowers } = hero;
// console.log(artifacts);
// console.log(otherPowers);

// Destructurar obteniendo el caracter, los poderes en dos variables independientes y el resto del objeto

// let {
//   character,
//   powers: { artifacts, skills },
//   ...restObject
// } = hero;

// console.log(character);
// console.log(artifacts);
// console.log(skills);
// console.log(restObject);

// let {
//   powers: {
//     skills: [Judo],
//   },
// } = hero;
// console.log(Judo);

// let person = {
//   id: 1,
//   firstName: "John",
//   lastName: "Connor",
//   email: "john@google.com",
// };

// let jsonText = JSON.stringify(person);
// console.log(typeof jsonText);
// console.log(jsonText);
// let anotherPerson = JSON.parse(jsonText);
// console.log(anotherPerson.lastName);

let userName = prompt("What is your name?");
let phone = prompt("What is your phone number?");

localStorage.name = userName;
localStorage.phone = phone;

console.log(localStorage.name);
console.log(localStorage.phone);

localStorage.clear();
