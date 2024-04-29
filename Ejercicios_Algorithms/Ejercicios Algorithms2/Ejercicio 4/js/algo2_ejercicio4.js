// Exercise 4:
// Escribe un programa con 7 variables con la temperatura de los 7 últimos días (Google). A
// continuación, muestra cuál ha sido la temperatura media.

function averageTemp() {
  let mediaTemp = 0;
  let counter = 0;
  for (
    let i = 22,
      apr22 = 21,
      apr23 = 20,
      apr24 = 21,
      apr25 = 24,
      apr26 = 24,
      apr27 = 18,
      apr28 = 22;
    i < 29;
    i++, counter++
  ) {
    mediaTemp += eval(`apr${i}`);
  }
  console.log("7-Day Average Temperature: ", mediaTemp / counter);
}

averageTemp();
