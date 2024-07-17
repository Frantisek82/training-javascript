console.log("Hello World!");

let divs = document.querySelectorAll("div");

// let div1 = document.querySelector("#d1");
// let div2 = document.querySelector("#d2");
// let div3 = document.querySelector("#d3");

let themesCollection = [
  {
    bodyBgColor: "#283618",
    divBgColor: "#606c38",
    divColor: "#fefae0",
  },
  {
    bodyBgColor: "#cdb4db",
    divBgColor: "#ffafcc",
    divColor: "#ffc8dd",
  },
  {
    bodyBgColor: "#023047",
    divBgColor: "#219ebc",
    divColor: "#8ecae6",
  },
];

// function sayHello() {
//   console.log("hello");
// }
// sayHello();

// const changeTheme = () => {};

// divs[0].addEventListener("click", (e) => {
//   document.body.style.backgroundColor = theme1.bodyBgColor;
//   divs[0].style.backgroundColor = theme1.divBgColor;
//   divs[0].style.color = theme1.divColor;
// });

// ---- OR ----

// divs.forEach((div) => {
//   div.addEventListener("click", (e) => {
//     document.body.style.backgroundColor = theme1.bodyBgColor;
//     div.style.backgroundColor = theme1.divBgColor;
//     div.style.color = theme1.divColor;
//   });
// });

divs[0].addEventListener("click", () => {
  document.body.style.backgroundColor = themesCollection[0].bodyBgColor;
  divs[0].style.backgroundColor = themesCollection[0].divBgColor;
  divs[0].style.color = themesCollection[0].divColor;
});
// divs[1].addEventListener("click", () => {
//   document.body.style.backgroundColor = theme2.bodyBgColor;
//   divs[1].style.backgroundColor = theme2.divBgColor;
//   divs[1].style.color = theme2.divColor;
// });
// divs[2].addEventListener("click", () => {
//   document.body.style.backgroundColor = theme3.bodyBgColor;
//   divs[2].style.backgroundColor = theme3.divBgColor;
//   divs[2].style.color = theme3.divColor;
// });

divs.forEach((div, index) => {
  div.addEventListener("click", () => {
    document.body.style.backgroundColor = themesCollection[index].bodyBgColor;
    div.style.backgroundColor = themesCollection[index].divBgColor;
    div.style.color = themesCollection[index].divColor;
  });
});
