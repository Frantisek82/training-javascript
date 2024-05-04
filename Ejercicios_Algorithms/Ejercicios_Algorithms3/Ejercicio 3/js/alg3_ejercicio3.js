// Exercise 3:

// Escribe un programa que genere 10 códigos hexadecimales aleatorios (no repetidos), y escriba en la consola “ Hello World !” del color aleatorio generado.

function colorGenerator() {
  function hexCodeGenerator() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  for (let i = 0; i <= 10; i++) {
    console.log(
      "%cHello World!",
      `color: ${hexCodeGenerator()}`,
      `in color: ${hexCodeGenerator()}`
    );
  }
}

colorGenerator();
