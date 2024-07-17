//Standard declaration
function userName(params) {
  return params;
}
let name = userName("Jane");

userName("John");
console.log(userName(name));
console.log(userName("John"));
console.log(userName(new Date().toLocaleString()));

// Función anónima
const random = function (max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(random(10, 0));

// Funciones flecha
const number = (param) => param;
// Función equivalente
function number2(param) {
  return param;
}

const sayHello = (param) => param;
// llaves, por que hace varias cosas,
// además de devolver un valor con return

const sayHello2 = (param) => {
  console.log(param);
  return param;
};

console.log(sayHello2("Hello"));

console.log(number(11));

// DOM
window.addEventListener("load", function () {
  console.log("función anónima");
});
document.body.addEventListener("click", function () {
  console.log("click!");
});
let param = "Smith";
document.body.addEventListener("click", (param) => console.log(param));
const userLog = (param) => console.log(param);
