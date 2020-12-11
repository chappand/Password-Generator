// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c"];
var uppercase = ["A", "B", "C"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"]

function generatePassword() {
//Array to store random characters//
  var possibleRandomChar = [];
//Prompt for password length//
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

  if(containLower){
    possibleRandomChar = possibleRandomChar.concat(lowercase);
    //take the array and pass it through a random geneator function and then push value to array
    console.log(possibleRandomChar);
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
