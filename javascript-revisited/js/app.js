//Standard declaration
function userName(params) {
  return params;
}
let name = userName("Jane");

userName("John");
console.log(userName("John"));
console.log(userName(new Date().toLocaleString()));

// Función anónima
const random = function (max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
