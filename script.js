// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmUpperCase;
var confirmLowerCase;
var confirmSymbols;
var confirmNumbers;
var userChoices;

// passwordLength = prompt("How long would you like your password to be?");
// console.log("password variable", passwordLength);

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var Symbols = "!@#$%^&*+=?".split("");
var Numbers = "0123456789".split(""); 


console.log(upperCase);
console.log(lowerCase);
console.log(Symbols);
console.log(Numbers);

var combinedArr = [];
// Write password to the #password input

function generatePassword() {
  passwordLength = prompt("How long would you like your password to be? Choose between 8 and 128");

  console.log("Password length " + passwordLength);
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
    if (confirmLowerCase  == true) {
  combinedArr = combinedArr.concat(lowerCase);
    } 
    if(confirmUpperCase == true) {
      combinedArr = combinedArr.concat(upperCase);
    }
    if(confirmSymbols == true) {
      combinedArr = combinedArr.concat(Symbols);
    }
    if(confirmNumbers == true) {
      combinedArr = combinedArr.concat(Numbers);
    }
    if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSymbols) {
      alert("You must choose a type of Symbol")
    }
  };
  
  // // Empty variable for the password length
  var passwordBlank = [];
  
  //Loop for random selection
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = combinedArr[Math.floor(Math.random() * combinedArr.length)];
    passwordBlank.push(allChoices)
  console.log(allChoices);
  }
   //Join and return the password
  var password = passwordBlank.join(""); 
  console.log("Your password is: " + password);
  return password;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





