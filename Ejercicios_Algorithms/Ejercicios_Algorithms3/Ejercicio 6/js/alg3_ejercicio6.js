// Exercise 6:

// Recopila 20 citas aleatorias de una temática a tu elección, y almacénalas en un array.
// A continuación, investiga las funciones setInterval y setTimeout para generar una cita aleatoria, que se mostrará en consola, cada 10 segundos, durante 2 minutos.

function randomQuotesGenerator() {
  let quotes = [
    "If you can't explain it simply, you don't understand it well enough. - Albert Einstein",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "We cannot solve our problems with the same thinking we used when we created them. - Albert Einstein",
    "Coincidence is God's way of remaining anonymous. - Albert Einstein",
    "Look deep into nature, and then you will understand everything better. - Albert Einstein",
    "The hardest thing to understand in the world is the income tax. - Albert Einstein",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Anyone who has never made a mistake has never tried anything new. - Albert Einstein",
    "Weakness of attitude becomes weakness of character. - Albert Einstein",
    "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former. - Albert Einstein",
    "I have no special talent. I am only passionately curious. - Albert Einstein",
    "Logic will get you from A to B. Imagination will take you everywhere. - Albert Einstein",
    "It's not that I'm so smart, it's just that I stay with problems longer. - Albert Einstein",
    "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones. - Albert Einstein",
    "Only a life lived for others is a life worthwhile. - Albert Einstein",
    "Reality is merely an illusion, albeit a very persistent one. - Albert Einstein",
    "The only source of knowledge is experience. - Albert Einstein",
    "Peace cannot be kept by force; it can only be achieved by understanding. - Albert Einstein",
    "Imagination is everything. It is the preview of life's coming attractions. - Albert Einstein",
    "The true sign of intelligence is not knowledge but imagination. - Albert Einstein",
  ];

  console.log(quotes.length);
  let start = new Date();
  let end = null;
  setTimeout(() => {
    clearInterval(intervalId);
    end = new Date();
    console.log(
      "Operation took " + (end.getTime() - start.getTime()) + " msec"
    );
  }, 1000 * 120);
  let intervalId = setInterval(() => {
    console.log(quotes[Math.floor(Math.random() * quotes.length)]);
  }, 10000);
}

randomQuotesGenerator();
