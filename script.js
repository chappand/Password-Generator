// Assignment Code
var generateBtn = document.querySelector("#generate");
// All of the character arrays with possible characters to choose from
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"]

function generatePassword() {

//Array to store random characters
  var possibleRandomChar = [];

//Prompt for password length
  var passwordLength = prompt("How long do you want your password?");
  console.log(passwordLength);

  if(passwordLength < 8){
    alert("Your password must be more than 8 characters");
    return;
  }

  if(passwordLength > 128){
    alert("Your password must be less than 128 characters");
    return;
  }
  

//Confirm for lowercase characters
  var containLower = confirm("Would you like to include lowercase characters?");
  console.log(containLower);

//take the array and pass it through a random geneator function and then push value to array
if(containLower){
    possibleRandomChar = possibleRandomChar.concat(lowercase);
    console.log(possibleRandomChar);
  }
  
// Confirm for uppercase characters
  var containUpper = confirm("Would you like to include uppercase characters?");
  console.log(containUpper);

//take the array and pass it through a random geneator function and then push value to array
if(containUpper){
    possibleRandomChar = possibleRandomChar.concat(uppercase);
    console.log(possibleRandomChar);
}

// Confirm for number characters
var containNumber = confirm("Would you like to include number characters?");
console.log(containNumber);

//take the array and pass it through a random geneator function and then push value to array
if(containNumber){
  possibleRandomChar = possibleRandomChar.concat(number);
  console.log(possibleRandomChar);
}

// Confirm for special characters
var containSpecial = confirm("Would you like to include special characters?");
console.log(containSpecial);

//take the array and pass it through a random geneator function and then push value to array
if(containSpecial){
  possibleRandomChar = possibleRandomChar.concat(special);
  console.log(possibleRandomChar);
}

while(containLower === false && containNumber === false && containSpecial === false && containUpper === false){
  alert("You must choose at least one type of character to proceed")
  var containLower = confirm("Would you like to include lowercase characters?");console.log(containLower);
  if(containLower){
    possibleRandomChar = possibleRandomChar.concat(lowercase);
    console.log(possibleRandomChar);
  }
  var containUpper = confirm("Would you like to include uppercase characters?");
  console.log(containUpper);
  if(containUpper){
    possibleRandomChar = possibleRandomChar.concat(uppercase);
    console.log(possibleRandomChar);
}
  var containNumber = confirm("Would you like to include number characters?");
  console.log(containNumber);
  if(containNumber){
    possibleRandomChar = possibleRandomChar.concat(number);
    console.log(possibleRandomChar);
  }
  var containSpecial = confirm("Would you like to include special characters?");
  console.log(containSpecial);
  if(containSpecial){
    possibleRandomChar = possibleRandomChar.concat(special);
    console.log(possibleRandomChar);
  }
}

var newPassword = ""

for (var i = 0; i < passwordLength; i++) {
  newPassword = newPassword + possibleRandomChar[Math.floor(Math.random() * possibleRandomChar.length)];
  console.log(newPassword);
}
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
