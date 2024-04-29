// Exercise 2:
// Escribe un programa que muestre las letras del palíndromo
// "no lemon, no melon” en orden inverso.

function reverseOrder() {
  let text = "no lemon, no melon";
  let invertedText = "";

  for (let i = text.length - 1; i >= 0; i--) {
    invertedText += text[i];
  }
  console.log(invertedText);
}

reverseOrder();