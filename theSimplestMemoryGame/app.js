const cardsColor = [
  "red",
  "red",
  "green",
  "green",
  "blue",
  "blue",
  "brown",
  "brown",
  "yellow",
  "yellow",
  "gray",
  "gray",
  "cadetblue",
  "cadetblue",
  "violet",
  "violet",
  "lightgreen",
  "lightgreen",
];

let cards = document.querySelectorAll("div");
// console.log(cards); //na tym etapie cards to nodeList
cards = [...cards]; // zamiana nodeList na Array
// console.log(cards);
const startTime = new Date().getTime();

let activeCard = "";
const activeCards = [];

const gamePairs = cards.length / 2;
let gameResult = 0;

const clickCard = function () {
  // console.log('klik');
  activeCard = this;
  if (activeCard === activeCards[0]) return;
  activeCard.classList.remove("hidden");

  if (activeCards.length === 0) {
    activeCards[0] = activeCard;
    console.log("1");
    return;
  } else {
    console.log("2");
    cards.forEach((card) => {
      card.removeEventListener("click", clickCard);
    });
    activeCards[1] = activeCard;
    setTimeout(function () {
      console.log(activeCards);
      if (activeCards[0].className === activeCards[1].className) {
        console.log("wygrana");
        activeCards.forEach((card) => card.classList.add("off"));
        gameResult++;

        cards = cards.filter((card) => !card.classList.contains("off"));

        if (gameResult == gamePairs) {
          console.log("wygrana gra");
          const endTime = new Date().getTime();
          const gameTime = (endTime - startTime) / 1000;
          alert(`wdało się twój wynik to: ${gameTime} sekund)`);
          location.reload();
        }
      } else {
        console.log("nie wygrana");
        activeCards.forEach((card) => card.classList.add("hidden"));
      }
      activeCard = "";
      activeCards.length = 0;
      cards.forEach((card) => {
        card.addEventListener("click", clickCard);
      });
    }, 500);
  }
};
const init = function () {
  cards.forEach((card) => {
    const position = Math.floor(Math.random() * cardsColor.length);
    card.classList.add(cardsColor[position]);
    cardsColor.splice(position, 1);
  });

  setTimeout(function () {
    cards.forEach((card) => {
      card.classList.add("hidden");
      card.addEventListener("click", clickCard);
    });
  }, 2000);
};

init();
