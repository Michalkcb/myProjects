const targetNumber = Math.floor(Math.random() * 100);
console.log(targetNumber);

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");

let attempts = 0;

guessButton.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value);
  if (isNaN(userGuess) || userGuess < 0 || userGuess>99) {
    message.textContent = "Podaj liczbę od 0 do 99.";
  } else {
    attempts++;
    if (userGuess == targetNumber) {
      message.textContent = `Brawo! Zgadłeś liczbę ${targetNumber} w ${attempts} próbach.`;
    } else if (userGuess < targetNumber) {
      message.textContent = "Szukana liczba jest większa.";
    } else {
      message.textContent = "Szukana liczba jest mniejsza.";
    }
  }
  guessInput.value = "";
});
