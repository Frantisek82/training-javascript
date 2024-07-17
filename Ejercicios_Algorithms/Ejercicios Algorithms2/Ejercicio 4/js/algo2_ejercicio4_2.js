// Exercise 4:
// Escribe un programa con 7 variables con la temperatura de los 7 últimos días (Google). A
// continuación, muestra cuál ha sido la temperatura media.

let temperature = [22, 22.8, 23.7, 22.7, 21.6, 21.6, 22.3];
let suma = 0;
let numTemperaturas = temperature.length;

for (let x = 0; x < numTemperaturas; x++) {
  suma += temperature[x];
}
let promedio = suma / numTemperaturas;

console.log(promedio);

//con una funcion

let temperaturas = [22, 22.8, 23.7, 22.7, 21.6, 21.6, 22.3];
function temperaturaMedia(temperaturas) {
  let i = 0,
    sum = 0,
    ArrayLen = temperaturas.length;
  while (i < ArrayLen) {
    sum = sum + temperaturas[i++];
  }
  return sum / ArrayLen;
}

console.log(temperaturaMedia(temperaturas));

// otra forma

const algorithms2_4 = (temperatures) => {
  let temperaturas = [22, 22.8, 23.7, 22.7, 21.6, 21.6, 22.3];
  let i = 0;
  summation = 0;
  ArrayLen = temperaturas.length;
  while (i < ArrayLen) {
    summation = summation + temperaturas[i++];
  }
  console.log(summation / ArrayLen);
};

algorithms2_4();
