// Exercise 1:
// Escribe un programa para contar las letras en la palabra:
// palindrome, mostrándolas una a una.

function counterOfLetters() {
  let text = "palindrome";
  for (let number = 0; number <= text.length - 1; number++) {
    console.log(`${text[number]}`);
  }
  console.log(`There is ${text.length} letters in the word "${text}".`);
}

counterOfLetters();
