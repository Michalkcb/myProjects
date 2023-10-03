// Wersja zoptymalizowana: jedno pobieranie (nodeList), jedno ustawienie nasłuchiwania i uniwersalna funkcja.

const divs = document.querySelectorAll('div');

divs.forEach(function (div) {
 div.addEventListener('click', changeColor)
})

function changeColor() {
 document.body.className = this.className;
}

//Wersja z jedną uniwersalną funkcją

// const orangeBtn = document.querySelector('.orange');
// const greenBtn = document.querySelector('.green');
// const blueBtn = document.querySelector('.blue');
// const yellowBtn = document.querySelector('.yellow');
// const redBtn = document.querySelector('.red');

// orangeBtn.addEventListener('click', changeColor);
// greenBtn.addEventListener('click', changeColor);
// blueBtn.addEventListener('click', changeColor);
// yellowBtn.addEventListener('click', changeColor);
// redBtn.addEventListener('click', changeColor);

//Wersja pierwotna z funkcją anonimową, osobną dla każdego elementu
// orangeBtn.addEventListener('click', function () {
//  document.body.className = "orange";
// })
// greenBtn.addEventListener('click', function () {
//  document.body.className = "green";
// })

//itd.