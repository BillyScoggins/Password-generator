// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmUpperCase;
var confirmLowerCase;
var confirmSymbols;
var confirmNumbers;
var userChoices;

passwordLength = prompt("How long would you like your password to be?")
console.log("password variable", passwordLength)

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var Symbols = "!@#$%^&*+=?".split("")
var Numbers = "0123456789".split("")


console.log(upperCase)
console.log(lowerCase)
console.log(Symbols)
console.log(Numbers)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
