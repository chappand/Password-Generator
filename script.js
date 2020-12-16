// Assignment Code
var generateBtn = document.querySelector("#generate");
// All of the character arrays with possible characters to choose from
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];


function generateRandom(array){
  var char = array[Math.floor(Math.random() * array.length)];
  //console.log(char);
  return char
}

function generatePassword() {

  //Array to store random characters
  var possibleRandomChar = [];

  var guaranteeChar = [];



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
      guaranteeChar.push(generateRandom(lowercase));
      console.log(guaranteeChar);
    }
    
  // Confirm for uppercase characters
    var containUpper = confirm("Would you like to include uppercase characters?");
    console.log(containUpper);

  //take the array and pass it through a random geneator function and then push value to array
  if(containUpper){
      possibleRandomChar = possibleRandomChar.concat(uppercase);
      console.log(possibleRandomChar);
      guaranteeChar.push(generateRandom(uppercase));
      console.log(guaranteeChar);
  }

  // Confirm for number characters
  var containNumber = confirm("Would you like to include number characters?");
  console.log(containNumber);

  //take the array and pass it through a random geneator function and then push value to array
  if(containNumber){
    possibleRandomChar = possibleRandomChar.concat(number);
    console.log(possibleRandomChar);
    guaranteeChar.push(generateRandom(number));
    console.log(guaranteeChar);
  }

  // Confirm for special characters
  var containSpecial = confirm("Would you like to include special characters?");
  console.log(containSpecial);

  //take the array and pass it through a random geneator function and then push value to array
  if(containSpecial){
    possibleRandomChar = possibleRandomChar.concat(special);
    console.log(possibleRandomChar);
    guaranteeChar.push(generateRandom(special));
    console.log(guaranteeChar);
  }

  // while loop to prompt the questions again if no options were selected
  if(
    containLower === false && 
    containNumber === false && 
    containSpecial === false && 
    containUpper === false
    ){
    alert("You must choose at least one type of character to proceed")
    return;
  };

  // variable to store generated password
  var newPassword = [];

  // for loop to randomly generate password based on selections made
  for (var i = 0; i < passwordLength; i++) {
    newPassword.push(generateRandom(possibleRandomChar));
    console.log(newPassword);
  }

  for(var i = 0; i < guaranteeChar.length; i++){
    newPassword[i] = guaranteeChar[i];
  }

  return newPassword.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
