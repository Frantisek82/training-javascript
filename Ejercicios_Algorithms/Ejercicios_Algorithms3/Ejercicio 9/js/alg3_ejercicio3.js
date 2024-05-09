// Exercise 9:

// El cifrado César es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

// Por ejemplo, con un desplazamiento de 3, la A sería sustituida por la D (situada 3 lugares a la derecha de la A), la B sería reemplazada por la E, etc. Este método debe su nombre a Julio César, que lo usaba para comunicarse con sus generales.

// Escribe un programa con una función que recibe 2 parámetros, el primero para indicar si hay que cifrar o descifrar, y el segundo bien texto en claro, o bien el texto codificado mediante el cifrado Cesar. El programa mostrará por consola el string resultante, codificado o no, según corresponda.

function caesarCipher(encode, text) {
  function cipher(encode, text) {
    if (encode) {
      encode;
      text = [...text].map((letter) => {
        switch (letter.charCodeAt(0)) {
          // uppers
          case 65: // x
            return String.fromCharCode(68);
          case 66: // y
            return String.fromCharCode(69);
          case 67: // z
            return String.fromCharCode(70);
          // lowers
          case 97: // x
            return String.fromCharCode(100);
          case 98: // y
            return String.fromCharCode(101);
          case 99: // z
            return String.fromCharCode(102);
          // whitespace
          case 32:
            return String.fromCharCode(32);
          // the rest of letters
          default:
            return String.fromCharCode(letter.charCodeAt(0) + 3);
        }
      });
      alert(`Encoded text:  ${text.join("")}`);
      console.log("Encoded text:", text.join(""));
    } else {
      encode;
      text = [...text].map((letter) => {
        switch (letter.charCodeAt(127)) {
          // uppers
          case 68:
            return String.fromCharCode(65);
          case 69:
            return String.charCodeAt(66);
          case 70:
            return String.charCodeAt(67);
          // lowers
          case 100:
            return String.charCodeAt(97);
          case 101:
            return String.charCodeAt(98);
          case 102:
            return String.charCodeAt(99);
          // whitespace
          case 32:
            return String.charCodeAt(32);
          // the rest of letters
          default:
            return String.fromCharCode(letter.charCodeAt(0) - 3);
        }
      });
      alert(`Decoded text:  ${text.join("")}`);
      console.log("Decoded text:", text.join(""));
    }
  }
  cipher(encode, text);
}

caesarCipher(true, prompt("Write any text you want to encrypt: "));
caesarCipher(false, prompt("Write any text you want to decrypt: "));

// However, after printed decoded text in Console, the spaces between the letters are replaced with "square symbols"
