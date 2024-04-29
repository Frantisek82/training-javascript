// Imports
import { stringManager, statsGenerator, numberGenerator } from "./utils.js";
// Exercises part 2
// Exercise 1
const exercise1 = () => {
    let text = "palindrome";
    for (let number = 0; number <= text.length - 1; number++) {
        console.log(`${number + 1}. ${text[number]}`);
    }
    console.log("Letters quantity: ", text.length);
}
// Exercise 2
const exercise2 = () => {
    let palindrome = "no lemon, no melon";
    let invertedPalindrome = "";

    for (let i = palindrome.length - 1; i >= 0; i--) {
        invertedPalindrome += palindrome[i];
    }
    console.log(invertedPalindrome);
}


// Exercise 3
const exercise3 = () => {

    let asterisks = "";
    for (let i = 0; i < 4; i++) {
        asterisks += "****\n";
    }
    console.log(asterisks);

    // Jorge and Giovanna solution
    // let msg = "";
    // let side = 10;
    // for (let i = 0; i < side; i++) {
    //   for (let j = 0; j < side; j++) {
    //     msg = msg + "* ";
    //   }
    //   msg = msg + "\n";
    // }
    // console.log(msg);

    // Fran solution
    // let cont = 1;
    // let word = "";
    // while (cont++ <= 4) {
    //   word += "* * * *\n";
    // }
    // console.log(word);
}

// Exercise 4
const exercise4 = () => {
    let mediaTemp = 0;
    let counter = 0;
    for (
        let i = 18,
        mar18 = 17,
        mar19 = 17,
        mar20 = 16,
        mar21 = 14,
        mar22 = 17,
        mar23 = 15,
        mar24 = 14;
        i < 25;
        i++, counter++
    ) {
        mediaTemp += eval(`mar${i}`);
    }
    console.log("7-Day Average Temperature: ", mediaTemp / counter);
}
// exercise4();
const exercise5 = () => {
    let startTime = 0, endTime = 0, startTime2 = 0, endTime2 = 0, words = 0, chars = 0
    let response = "";
    let questions = [
        "Replace chars by signs?",
        "Capitalize?",
        "Replace spaces with commas?"
    ];
    let options = {
        replaceChars: false,
        capitalize: false,
        replaceSpaces: false,
    };
    let string = "";
    do {
        string = prompt('Please, enter your string').trim();
    } while (!string || string.length == 0);
    words = string.split(" ").length
    chars = [...string].length
    for (let index = 0; index < questions.length; index++) {
        do {
            response = prompt(questions[index]).trim()
            console.log(response);
            switch (index) {
                case 0:
                    options.replaceChars = response == 'y' ?? false;
                    break;
                case 1:
                    options.capitalize = response == 'y' ?? false;
                    break;
                case 2:
                    options.replaceSpaces = response == 'y' ?? false;
                    break;
            }
        } while (!response || response.length == 0 || !(/y|n/i.test(response)));

    }
    startTime = performance.now()
    console.time("work done in ")
    startTime2 = new Date().getTime();
    stringManager(string, options)
    endTime = performance.now()
    console.log(`${words} words, ${chars} chars`);
    console.timeEnd("work done in ")
    endTime2 = new Date().getTime();
    console.log(`with performance: ${endTime - startTime} ms`);
    console.log(`with Date(): ${endTime2 - startTime2} ms`);
}
const exercise6 = () => {
    let string = "";
    let words = 0, chars = 0;
    let stats = {
        stringLength: 0,
        cleanStringLenght: 0,
        words: 0,
        uniqueWords: 0,
        uniqueWordsPercentage: 0,
        minWordLenght: 0,
        maxWordLenght: 0,
        averageWordLenght: 0,
    }
    do {
        string = prompt('Please, enter your string').trim();
    } while (!string || string.length == 0);
    // strip all punctuation from string
    let cleanString = string.replace(/[,.!]/g, '');

    // separate string into array of lowercase words
    words = cleanString.toLowerCase().split(' ');

    // form object of word counts
    let wordCounts = {};
    words.forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
    let results = statsGenerator(cleanString, words, wordCounts, stats);
    let style = "background-color: #0d6efd; font-weight: bold; font-size: 1rem; padding: .5em 1.2em;"
    let style2 = "background-color: #0d6efd; color: white; font-weight: bold; font-size: 1rem; padding: .5em 1em;"
    console.log("%cLenght:%c%i characters", style, style2, results.stringLength);
    console.log("%cLength witout white-spaces:%c%i characters", style, style2, results.cleanStringLenght);
    console.log("%cWords:%c%i", style, style2, results.words);
    console.log("%cUnique Words:%c%i", style, style2, results.uniqueWords);
    console.log("%cUnique Words(%):%c%i%", style, style2, results.uniqueWordsPercentage);
    console.log("%cLength of shortest word:%c%i characters", style, style2, results.minWordLenght);
    console.log("%cLength of longest word:%c%i characters", style, style2, results.maxWordLenght);
    console.log("%cAvg. word length:%c%i", style, style2, results.averageWordLenght);
}
// exercise6();

// Exercise 7
const exercise7 = () => {
    let toGuess = numberGenerator(10, 0);
    console.log(toGuess);
    let attemps = 3;
    let userWon = false;
    console.log("Let's play!");
    let userNumber = prompt("Try to guess a number between 0 and 10");
    while (--attemps >= 0 && !userWon) {
        if (toGuess == +userNumber) {
            alert("You win!");
            userWon = true;
        } else if (attemps > 0) {
            userNumber = prompt(`Try it again, you have ${attemps} more attemps`);
        }
    }
    if (!userWon) {
        alert("Sorry, Good luck in love");
    }

    // Kay solution
    //Adivine el numero
    // let x, y, number;

    // for (x = Math.floor(Math.random() * 10), number = 0; x != y; number++) {
    //   console.log(x);
    //   switch (number) {
    //     case 0:
    //       y = prompt(
    //         "Las tornas han cambiado, Akinator ha elegido un número y ahora serás tu quien tenga que adivinar en cuál ha pensado en unicamente tres intentos. ¿Tienes alguna ligera idea?"
    //       );
    //       break;
    //     case 1:
    //       y = prompt(
    //         "Uy, estuvo cerca, bueno, para que mentirte, en realidad no. Pero miralo por el lado bueno, tienes una segunda oportunidad ¿Cuál sera tu elección ahora?"
    //       );
    //       break;
    //     case 2:
    //       y = prompt(
    //         "A Akinator le estas empezando a dar penita, por eso te da una ultima oportunidad, pero ninguna más ¿Entendido? Pues dale ¿Cuál es tu ultima elección?"
    //       );
    //       break;
    //     case 3:
    //       y = x;
    //       break;
    //     default:
    //       alert("No sé que has hecho pero la has liao, reinicia la página");
    //   }
    // }
    // if (number == 1) {
    //   alert(
    //     `Sii, Akinator había pensado en el número ${x}, ¡lo sacaste a la primera! ¡Eres más adivine que el propio Akinator!`
    //   );
    // } else if (number == 2) {
    //   alert(
    //     `Efectivamente, Akinator había pensado en el número ${x}, ¡lo sacaste a la segunda! ¡Akinator te envidia un poquito, pero no mucho!`
    //   );
    // } else if (number == 3) {
    //   alert(
    //     `Sii, Akinator había pensado en el número ${x}, ¡lo sacaste en el último intento! ¡Te falta un poquito de entrenamiento más para ser igual de fantastibuloso que el gran Akinator!`
    //   );
    // } else if (number == 4) {
    //   alert(
    //     `Lo siento pequeño aprendiz, pero has perdido la oportunidad de asemejarte al gran Akinator. El número que este había pensado era el ${x}`
    //   );
    // }

}
// exercise7();

// Exercise 8
const exercise8 = () => {

    let length = parseInt(prompt("Please enter the password length (8 - 16)"));
    length = length >= 8 && length <= 16 ? length : 8;
    console.log(length);

    let includeLower = prompt(
        "Would you like to include lowers (y for yes, n for no)"
    ).toLowerCase();
    let withLowers = includeLower == "n" ? false : true;

    let includeUpper = prompt(
        "Would you like to include uppers (y for yes, n for no)"
    ).toLowerCase();
    let withUppers = includeUpper == "n" ? false : true;

    let includeNumber = prompt(
        "Would you like to include numbers (y for yes, n for no)"
    ).toLowerCase();
    let withNumbers = includeNumber == "n" ? false : true;

    let includeSymbol = prompt(
        "Would you like to include symbols (y for yes, n for no)"
    ).toLowerCase();

    let withSymbols = (includeSymbol == "n") ? false : true;

    !withLowers &&
        !withUppers &&
        !withNumbers &&
        !withSymbols &&
        (withLowers = !withLowers);
    let password = "";
    let repeatedChar = false;
    let countingGenPass = 0;
    while (
        (withLowers && !/[a-z]/.test(password)) ||
        (withUppers && !/[A-Z]/.test(password)) ||
        (withNumbers && !/[0-9]/.test(password)) ||
        (withSymbols &&
            !/(!|"|#|[$]|%|&|'|[(]|[)]|[*]|[+]|'|-|.|[/])+/.test(password)) ||
        repeatedChar
    ) {
        countingGenPass++;
        password = "";
        repeatedChar = false;
        for (let i = 0, newChar = false; i < length; i++) {
            while (!newChar) {
                switch (Math.floor(Math.random() * 4) + 1) {
                    case 1:
                        if (withLowers) {
                            password += String.fromCharCode(
                                Math.floor(Math.random() * (122 - 97 + 1)) + 97
                            );
                            newChar = !newChar;
                        }
                        break;
                    case 2:
                        if (withUppers) {
                            password += String.fromCharCode(
                                Math.floor(Math.random() * (90 - 65 + 1)) + 65
                            );
                            newChar = !newChar;
                        }
                        break;
                    case 3:
                        if (withNumbers) {
                            password += String.fromCharCode(
                                Math.floor(Math.random() * (57 - 48 + 1)) + 48
                            );
                            newChar = !newChar;
                        }
                        break;
                    case 4:
                        if (withSymbols) {
                            password += String.fromCharCode(
                                Math.floor(Math.random() * (47 - 33 + 1)) + 33
                            );
                            newChar = !newChar;
                        }
                        break;
                }
            }
            newChar = !newChar;
        }
        for (let i = 0; i < password.length - 1; i++) {
            if (password[i] == password[i + 1]) {
                repeatedChar = true;
                break;
            }
        }
    }
    alert(`Your password: ${password} in ${countingGenPass} attemps.`);

    let newString = ""
    for (let i = 33, max = 47; i <= max; i++) {
        newString += String.fromCharCode(i);
    }
    console.log(newString);

    let symbols = "(";
    for (let i = 33; i <= 47; i++) {
        if (i < 47) {
            symbols += String.fromCharCode(i) + "|";
        } else {
            symbols += String.fromCharCode(i);
        }
    }
    symbols += ")";
    console.log(symbols);
}

exercise6();