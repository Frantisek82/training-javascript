//construcción de una Array
let students = [
  "Dani",
  "Pablo",
  "Nacho",
  "Laura",
  "Sebastian",
  "Elías",
  "Ana",
  "Nelson",
  "Vero",
];
let students2 = {
  Villalba: "Dani",
  Muñoz: "Pablo",
  Martín: "Nacho",
  Carqué: "Laura",
  González: "Sebastian",
  Rodrígez: "Elías",
  Lorenzo: "Ana",
  González: "Nelson",
  Sánchez: "Vero",
};

//declaración de una función
function sayHello(name) {
  console.log(`Hello ${name}`);
}

//while loop
// let i = 0;
// while (i <= students.length - 1) {
//   sayHello(students[i++]);
// }

//for loop
// for (let i = 0; i <= students.length - 1; i++) {
//   sayHello(students[i]);
// }

//do-while loop
// let i = 0;
// do {
//   sayHello(students[i++]);
// } while (i <= students.length - 1);

//forEach loop
// students.forEach((name) => {
//   sayHello(name);
// });

//for...of
// for (const name of students) {
//   sayHello(name);
// }

//for...in
for (const key in students2) {
  sayHello(students2[key]);
}
