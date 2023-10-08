// Pobierz element HTML o id "character" i przypisz go do zmiennej "character"
const character = document.getElementById("character");

// Pobierz element HTML o id "game" i przypisz go do zmiennej "game"
const game = document.getElementById("game");

// Inicjalizacja zmiennej "interval" do używania później w funkcjach setInterval i clearInterval
let interval;

// Zmienna "both" kontroluje, czy jednocześnie jest naciśnięty przycisk w lewo i prawo (0 - nie, 1 - tak)
let both = 0;

// Zmienna "counter" służy do śledzenia liczby elementów "block" i "hole" tworzonych w grze
let counter = 0;

// Zmienna "currentBlocks" przechowuje aktualnie wyświetlane bloki i dziury w grze
let currentBlocks = [];

// Funkcja "moveLeft" przesuwa postać w lewo o 2 piksele, jeśli jest to możliwe
moveLeft = () => {
  let left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  if (left > 0) {
    character.style.left = left - 2 + "px";
  }
};

// Funkcja "moveRight" przesuwa postać w prawo o 2 piksele, jeśli jest to możliwe
moveRight = () => {
  let left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  if (left < 380) {
    character.style.left = left + 2 + "px";
  }
};

// Nasłuchiwanie na zdarzenie "keydown" (naciśnięcie klawisza)
document.addEventListener("keydown", (event) => {
  if (both == 0) {
    both++;
    if (event.key === "ArrowLeft") {
      interval = setInterval(moveLeft, 1);
    }
    if (event.key === "ArrowRight") {
      interval = setInterval(moveRight, 1);
    }
  }
});

// Nasłuchiwanie na zdarzenie "keyup" (zwolnienie klawisza)
document.addEventListener("keyup", (event) => {
  clearInterval(interval);
  both = 0;
});

// Funkcja setInterval, która tworzy bloki i dziury w grze oraz kontroluje ruch postaci
let blocks = setInterval( () =>{
  // Pobierz ostatni utworzony blok i dziurę (jeśli istnieją)
  let blockLast = document.getElementById("block" + (counter - 1));
  let holeLast = document.getElementById("hole" + (counter - 1));

  // Deklaracje zmiennych do przechowywania pozycji ostatniego bloku i dziury
  let blockLastTop;
  let holeLastTop;

  // Sprawdź, czy istnieje już co najmniej jeden blok na planszy
  if (counter > 0) {
    // Pobierz pozycję ostatniego bloku i dziury
    blockLastTop = parseInt(
      window.getComputedStyle(blockLast).getPropertyValue("top")
    );
    holeLastTop = parseInt(
      window.getComputedStyle(holeLast).getPropertyValue("top")
    );
  }

  // Warunek sprawdzający, czy nowy blok i dziura powinny zostać utworzone
  if (blockLastTop < 400 || counter == 0) {
    // Tworzenie nowego bloku i dziury
    const block = document.createElement("div");
    const hole = document.createElement("div");
    block.setAttribute("class", "block");
    hole.setAttribute("class", "hole");
    block.setAttribute("id", "block" + counter);
    hole.setAttribute("id", "hole" + counter);
    block.style.top = blockLastTop + 100 + "px";
    hole.style.top = holeLastTop + 100 + "px";
    let random = Math.floor(Math.random() * 360);
    hole.style.left = random + "px";

    // Dodaj nowy blok i dziurę do gry oraz zaktualizuj tablicę aktualnych bloków
    game.appendChild(block);
    game.appendChild(hole);
    currentBlocks.push(counter);

    // Zwiększ licznik bloków
    counter++;
  }

  // Pobierz aktualną pozycję postaci
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let characterLeft = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );

  // Zmienna "drop" śledzi, czy postać jest w trakcie spadania
  let drop = 0;

  // Sprawdź, czy postać dotarła do góry planszy
  if (characterTop <= 0) {
    // Wyświetl alert z wynikiem i zatrzymaj działanie gry
    alert("Game over. Score: " + (counter - 9));
    clearInterval(blocks);
    location.reload();
  }

  // Pętla sprawdzająca kolizje z blokami i dziurami
  for (let i = 0; i < currentBlocks.length; i++) {
    let current = currentBlocks[i];
    let iblock = document.getElementById("block" + current);
    let ihole = document.getElementById("hole" + current);
    let iblockTop = parseFloat(
      window.getComputedStyle(iblock).getPropertyValue("top")
    );
    let iholeLeft = parseFloat(
      window.getComputedStyle(ihole).getPropertyValue("left")
    );

    // Aktualizacja pozycji bloku i dziury
    iblock.style.top = iblockTop - 0.5 + "px";
    ihole.style.top = iblockTop - 0.5 + "px";

    // Usuń blok i dziurę, jeśli przekroczyły górną krawędź planszy
    if (iblockTop < -20) {
      currentBlocks.shift();
      iblock.remove();
      ihole.remove();
    }

    // Sprawdź, czy postać zderzyła się z blokiem i dziurą
    if (iblockTop - 20 < characterTop && iblockTop > characterTop) {
      drop++;

      // Zresetuj licznik "drop", jeśli postać minęła dziurę
      if (iholeLeft <= characterLeft && iholeLeft + 20 >= characterLeft) {
        drop = 0;
      }
    }
  }

  // Aktualizacja pozycji postaci w zależności od wartości "drop"
  if (drop == 0) {
    if (characterTop < 480) {
      character.style.top = characterTop + 2 + "px";
    }
  } else {
    character.style.top = characterTop - 0.5 + "px";
  }
}, 1);
