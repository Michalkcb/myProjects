let password = document.querySelector('.password');

const rangeBar = document.getElementById('rangeBar');
const rangeInput = document.getElementById('rangeInput');

const uppercase  = document.querySelector('#uppercase');
const numbers  = document.querySelector('#numbers');
const symbols  = document.querySelector('#symbols');
const submit  = document.querySelector('#buttton');
console.log(password, uppercase, symbols, submit);


rangeBar.addEventListener('input', passLong)
