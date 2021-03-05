// Assignment Code

//creating DOM elements to pull results
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');
// const sliderEl = document.getElementById('slider'); - this will be a # box





var generateBtn = document.querySelector("#generate");

//creating object of functions
const randomFunc = {
  lower: getRandomLower
  upper: getRandomUpper
  number: getRandomNumber
  symbol: getRandomSymbol

};

//generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbol ='@#()<>*$%&^!'
  return symbol[Math.floor(Math.random() * symbol.length)];
}

//console logging function
console.log(getRandomSymbol());



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




