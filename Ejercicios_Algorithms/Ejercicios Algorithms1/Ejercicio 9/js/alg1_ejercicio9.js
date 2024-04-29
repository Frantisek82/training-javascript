// Preguntar al usuario su DNI o NIE. Comprobar, mediante las funciones para
// strings , si los datos
// introducidos son válidos, teniendo en cuenta lo siguiente.

// El NIE debe escribirse con la X, Y o Z inicial, todos los números y la letra final, sin espacios ni
// guiones. Ejemplo: X0523821F.

// El DNI está formado por ocho dígitos y un carácter alfabético de control. Ejemplo: 12345678ª.

// let doc = prompt("Please, enter you DNI or NIE").toLowerCase();
// // let doc = "12345678A".toLowerCase();
// // console.log(doc.charCodeAt(7));
// let isDNI = true;
// let validDocument = true;
// //usando ASCII Table
// if (
//   doc.charCodeAt(0) == 120 ||
//   doc.charCodeAt(0) == 121 ||
//   doc.charCodeAt(0) == 122
// ) {
//   isDNI = false;
// }
// if (isDNI) {
//   for (let index = 0; index < doc.length; index++) {
//     if (index <= 7) {
//       //usando ASCII Table
//       if (doc.charCodeAt(index) < 48 || doc.charCodeAt(index) > 57) {
//         validDocument = false;
//       }
//     } else {
//       //usando ASCII Table
//       if (doc.charCodeAt(index) < 97 || doc.charCodeAt(index) > 122) {
//         validDocument = false;
//       }
//     }
//   }
// } else {
//   for (let index = 1; index < doc.length; index++) {
//     if (index <= 7) {
//       //usando ASCII Table
//       if (doc.charCodeAt(index) < 48 || doc.charCodeAt(index) > 57) {
//         validDocument = false;
//       }
//     } else {
//       //usando ASCII Table
//       if (doc.charCodeAt(index) < 97 || doc.charCodeAt(index) > 122) {
//         validDocument = false;
//       }
//     }
//   }
// }

// if (validDocument && isDNI) {
//   console.log("It is a valid DNI!");
// } else if (validDocument) {
//   console.log("It is a valid NIE!");
// } else {
//   console.log("Not a valid document!");
// }

//----------------------------------------------------------------------

// Another version of the exercise 9

let userNieDni = prompt("Please, write your DNI or NIE");
if (userNieDni.length == 9) {
  let firstCharacter = userNieDni.charCodeAt(0);
  let lastCharacter = userNieDni.charCodeAt(userNieDni.length - 1);
  //if NIE
  if (
    (firstCharacter == 88 || firstCharacter == 89 || firstCharacter == 90) &&
    !isNaN(userNieDni.substring(1, userNieDni.length - 1)) &&
    lastCharacter >= 65 &&
    lastCharacter <= 90
  ) {
    console.log("Your NIE is valid");
  }
  //if DNI
  else if (
    !isNaN(userNieDni.substring(0, userNieDni.length - 1)) &&
    lastCharacter >= 65 &&
    lastCharacter <= 90
  ) {
    console.log("Your DNI is valid");
  } else {
    console.log("Your DNI or NIE is not valid!");
  }
} else {
  console.log("Your DNI or NIE is not valid!");
}
