// Exercise 8:

// Escribe un programa para jugar a la carta más alta. Para el juego se utilizará la baraja de poker , por lo que:
// • Habrá 2 arrays , uno con los palos (clubs, hearts, spades, diamonds) y otro con las cartas.
// • El array de cartas incluirá las siguientes, cuyo valor está ordenado de mayor a menor:
// ACE, KING, QUEEN JACK, 10, 9, 8, 7, 6, 5, 4, 3, 2.

// Se juega contra la banca, con un saldo inicial de 500 €. En cada mano se preguntará al usuario cuanto quiere apostar.

// Si la apuesta del usuario supera su saldo, se le notificará y se le pedirá que apueste de nuevo. Si la apuesta es válida, se generarán 2 cartas aleatorias, se mostrarán por consola, y se indicará una alerta "You win !!", "You lose" o "Draw", según corresponda.

// Se sumará o restará el saldo en función del resultado.

// Al final de cada mano se le preguntará si quiere seguir jugando, siendo "y" la opción para seguir, y "n" la opción para retirarse.

// En caso de perder todo el saldo, la partida finaliza. En caso de retirarse, se calcula si ha habido beneficios o pérdidas, y se indica mediante una alerta: "Betting benefits : XXX €", mostrando las pérdidas con un número negativo, y las ganacias con un número positivo. A continuación, otra alerta con el saldo total: "Total balance: YYY €"

function playTheHighestCard() {
  let suits = ["clubs", "hearts", "spades", "diamonds"];
  let clubs = [
    "ACE",
    "KING",
    "QUEEN",
    "JACK",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ];
  let hearts = [...clubs];
  let spades = Array.of(...clubs);
  let diamonds = Array.from(clubs);

  // diamonds[0] = "test";
  console.log(diamonds);
  console.log(clubs);
  let balance = 500;
  let bet = 0;
  let minimumBet = 5;
  let continuePlaying = false;

  do {
    do {
      bet = parseInt(prompt("How much do you want to bet?"));
      if (bet > balance) {
        alert("Sorry, your bet is higher than your available balance.");
        alert(`Maximum available: ${balance}`);
      }
      if (bet < minimumBet) {
        alert("Sorry, your bet is higher than your available balance.");
        alert(`Minimum required: ${minimumBet}`);
      }
    } while (bet > balance || bet < minimumBet);
    let card1 = Math.floor(Math.random() * clubs.length);
    let card2 = Math.floor(Math.random() * clubs.length);
    let suit1 = suits[Math.floor(Math.random() * suits.length)];
    let suit2 = "";
    do {
      suit2 = suits[Math.floor(Math.random() * suits.length)];
    } while (card1 == card2 && suit1 == suit2);
    console.log(
      `${eval(suit1)[card1]} ${suit1} vs. ${eval(suit2)[card2]} ${suit2}`
    );

    if (card1 < card2) {
      balance += bet;
      alert("You win!");
    } else if (card1 > card2) {
      balance -= bet;
      alert("You lose!");
    } else {
      alert("Draw!");
    }
    if (balance >= minimumBet) {
      continuePlaying =
        prompt("Would like to continue playing").toLowerCase() == "y";
    }
  } while (continuePlaying && balance >= minimumBet);
  alert(`Betting benefits: ${balance - 500} €`);
  alert(`Total balance: ${balance} €`);
}

playTheHighestCard();
