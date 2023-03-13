// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmUpperCase;
var confirmLowerCase;
var confirmSymbols;
var confirmNumbers;
var userChoices;

passwordLength = prompt("How long would you like your password to be?");
console.log("password variable", passwordLength);

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var Symbols = "!@#$%^&*+=?".split("");
var Numbers = "0123456789".split(""); {


console.log(upperCase)
console.log(lowerCase)
console.log(Symbols)
console.log(Numbers)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Ask for user input

function generatePassword() {
  passwordLength = prompt("How long would you like your password to be? Choose between 8 and 128");

  console.log("Password length " + passwordLength);

}

if(!passwordLength) {
  alert("Required value");
}
else if (passwordLength <8 || passwordLength > 128)
{
  passwordLength = prompt("You must choose between 8 and 128");
  console.log("Password length " + passwordLength);

}
else {
  confirmLowerCase = confirm("Will this contain lower case letters?");
  console.log("Lower case " + confirmLowerCase);

  confirmUpperCase = confirm("Will this contain upper case letters?");
  console.log("Upper case " + confirmUpperCase);

  confirmNumbers = confirm("Will this contain numbers?");
  console.log("Number" + confirmNumbers);
  confirmSymbols = confirm("Will this contain symbols?");
  console.log("Symbols" + confirmSymbols);
};
// No answer then
if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSymbols); {
  userChoices = alert("You must choose a criteria");
}
 if (confirmLowerCase && confirmUpperCase && confirmNumbers && confirmSymbols)
{
  userChoices = alert("You must choose s criteria"); 
   
}
// Four true options
else if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSymbols) {
  userChoices = lowerCase.concat(upperCase, Numbers, Symbols);
  console.log(userChoices);
}

// Three true options
else if (confirmLowerCase && confirmUpperCase && confirmNumbers) {
  userChoices = lowerCase.concat(upperCase, numbers);
  console.log(userChoices);
}
else if (confirmLowerCase && confirmUpperCase && confirmSymbols) {
  userChoices = lowerCase.concat(upperCase, Symbols);
  console.log(userChoices);
}
else if (confirmLowerCase && confirmNumbers && confirmSymbols) {
  userChoices = lowerCase.concat(Numbers, Symbols);
  console.log(userChoices);
}
else if(confirmUpperCase && confirmNumbers && confirmSymbols) {
  userChoices = upperCase.concat(Numbers, Symbols);
  console.log(userChoices);
}
// Two true options
else if(confirmUpperCase && confirmLowerCase) {
  userChoices = lowerCase.concat((upperCase));
  console.log(userChoices);
}
else if (confirmLowerCase && confirmNumbers) {
  userChoices = lowerCase.concat (Numbers);
  console.log(userChoices);
}
else if (confirmUpperCase && confirmSymbols) {
  userChoices = lowerCase.concat(Symbols);
  console.log(userChoices);
}
else if (confirmUpperCase && confirmNumbers) {
  userChoices = upperCase.concat(Numbers);
  console.log(userChoices);
}
else if (confirmUpperCase && confirmSymbols) {
  userChoices = upperCase.concat(Symbols);
  console.log(userChoices);
}
else if (confirmNumbers && confirmSymbols) {
  userChoices = Numbers.concat.apply(Symbols);
  console.log(userChoices);
}
// One true option
else if (confirmLowerCase) {
  userChoices = lowerCase;
  console.log(userChoices);
}
else if (confirmUpperCase) {
  userChoices = blankUpper.concat(upperCase);
  console.log(userChoices);
}
else if (confirmNumbers) {
  userChoices = Numbers;
  console.log(userChoices);
}
else if (confirmSymbols) {
  userChoices = Symbols;
  console.log(userChoices);
}