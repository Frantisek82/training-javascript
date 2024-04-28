// Exercise 1:

function counterOfLetters() {
  let text = "palindrome";
  for (let number = 0; number <= text.length - 1; number++) {
    console.log(`${text[number]}`);
  }
  console.log(`There is ${text.length} letters in the word "${text}".`);
}

counterOfLetters();
