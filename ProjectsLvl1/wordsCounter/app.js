// Pobierz element textarea o klasie "words" (gdzie użytkownik wpisuje tekst).
const wordsTextarea = document.querySelector(".words");

// Pobierz przycisk o klasie "count-btn" (przycisk do zliczania słów).
const countBtn = document.querySelector(".count-btn");

// Pobierz element "span" (gdzie zostanie wyświetlona liczba słów).
const wordCount = document.querySelector("span");

// Deklaracja funkcji countWords, która zostanie wywołana po naciśnięciu przycisku "count-btn".
const countWords = () => {
  // Pobierz zawartość textarea, usuń nadmiarowe białe znaki, a następnie usuń nadmiarowe spacje.
  let wordsTrimmed = wordsTextarea.value.replace(/\s+/g, " ").trim();

  // Podziel oczyszcony tekst na słowa, używając spacji jako separatora.
  let splitWords = wordsTrimmed.split(" ");

  // Oblicz liczbę słów w podzielonym tekście.
  let numberOfWords = splitWords.length;

  // Jeśli pierwszy element w tablicy splitWords jest pusty (brak wprowadzonego tekstu),
  // ustaw liczbę słów na 0.
  if (splitWords[0] == "") {
    numberOfWords = 0;
  }

  // Aktualizuj zawartość elementu "span" na stronie, wyświetlając liczbę słów.
  wordCount.innerHTML = numberOfWords;
};

// Dodaj nasłuchiwanie zdarzenia "click" na przycisku "count-btn" i wykonaj funkcję countWords.
countBtn.addEventListener("click", countWords);

