// Escribe un programa que simula un semáforo. El semáforo estará controlado por una variable
// “centinela” llamada isGreen ”. Si el semáforo está verde, mostrar por consola: “Cross the road ”, en
// caso contrario mostrar: Please await.

// let isGreen = true;

// if (isGreen) {
//   console.log("Cross the road!");
// } else {
//   console.log("Please await!");
// }

//--------------------------------------------------------------------------

// Another more interesting version of exercise-4

let isGreen = true;
let counter = 0;
let timer = setInterval(() => {
  if (isGreen) {
    console.log("Cross the road!");
  } else {
    console.log("Please await!");
  }

  isGreen = !isGreen;
  if (counter++ == 3) {
    clearInterval(timer);
  }
}, 3000);
