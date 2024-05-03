export const numberGenerator = (maxLimit, minLimit) =>
    Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit;

export const stringManager = (string, object) => {
    console.log(string);
    let newString = ""
    let splittedString = [...string]
    const signsReplacement = {
        a: "@",
        e: "3",
        i: "1",
        o: "0",
        s: "$",
    }
    // console.log(object);
    for (const key in object) {
        if (object[key]) {
            switch (key) {
                case "replaceChars":
                    for (let index = 0; index < splittedString.length; index++) {

                        if (Object.keys(signsReplacement).includes(splittedString[index])) {
                            newString += signsReplacement[splittedString[index]];
                        } else {
                            newString += splittedString[index];
                        }
                    }
                    console.log(newString);
                    break;
                case "capitalize":
                    for (let index = 0; index < splittedString.length; index++) {

                        if (index > 0 && splittedString[index - 1].charCodeAt(0) == 32) {
                            newString += splittedString[index].toUpperCase();
                        } else {
                            newString += splittedString[index];
                        }
                    }
                    console.log(newString);
                    break;
                case "replaceSpaces":
                    for (let index = 0; index < splittedString.length; index++) {

                        if (splittedString[index] != "," && splittedString[index] != " ") {

                            newString += splittedString[index];
                        } else if (splittedString[index] == " ") {
                            newString += ",";
                        }
                    }
                    console.log(newString);
                    break;


            }

        }
        newString = ""
        splittedString = [...string]
    }
}

export const statsGenerator = (cleanString, words, wordCounts, stats) => {
    stats.stringLength = cleanString.length;
    stats.cleanStringLenght = words.join("").length;
    stats.words = words.length;
    stats.uniqueWords = Object.keys(wordCounts).length;
    stats.uniqueWordsPercentage = (stats.uniqueWords * 100) / stats.words
    let max = 0, min = stats.stringLength
    for (let word of words) {
        if (word.length > max) {
            max = word.length
        }
        if (word.length < min) {
            min = word.length
        }
    }
    stats.minWordLenght = min
    stats.maxWordLenght = max

    let sum = 0
    words.forEach(word => {
        sum += word.length;
    });

    stats.averageWordLenght = Math.round(sum / stats.words)
    return stats;
}