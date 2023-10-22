const passwordElement = document.getElementById("password");
const rangeBar = document.getElementById("rangeBar");
const rangeInput = document.getElementById("rangeInput");

const form = document.getElementById("generatorForm");

const uppercase = document.querySelector("#uppercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const submit = document.querySelector("#buttton");

const arryFromChartCode = (start, end) => {
  const arry = [];
  for (let i = start; i <= end; i++) {
    arry.push(i);
  }
  return arry;
};

const lowercaseCodes = arryFromChartCode(97, 122);
const uppercaseCodes = arryFromChartCode(65, 90);
const numbersCodes = arryFromChartCode(48, 57);
const symbolsCodes = arryFromChartCode(33, 47).concat(arryFromChartCode(58,64)).concat(uppercaseCodes).concat(arryFromChartCode(91,96)).concat(arryFromChartCode(123, 126))


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const longness = rangeInput.value;
  const uppercaseChecked = uppercase.checked;
  const numbersChecked = numbers.checked;
  const symbolsChecked = symbols.checked;

const password =  generatedPass(symbolsChecked,numbersChecked,uppercaseChecked,longness)
passwordElement.innerHTML = password
})
  function  generatedPass(symbolsChecked,numbersChecked,uppercaseChecked,longness) {
    let passwordCodes=lowercaseCodes
    if (uppercaseChecked) passwordCodes= passwordCodes.concat(uppercaseCodes)
    if (numbersChecked) passwordCodes=passwordCodes.concat(numbersCodes)
    if (symbolsChecked) passwordCodes=passwordCodes.concat(symbolsCodes)

    const passwordChars = []
    for (let i=0; i<longness; i++){
        const character = passwordCodes[Math.floor(Math.random() * passwordCodes.length)]
        passwordChars.push(String.fromCharCode(character))
    }
    return passwordChars.join('')
}

function passLong(e) {
  const value = e.target.value;
  rangeBar.value = value;
  rangeInput.value = value;
}

rangeBar.addEventListener("input", passLong);
rangeInput.addEventListener("input", passLong);
