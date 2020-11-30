// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var copyBtn = document.querySelector("#copy");

// Write password to the #password input
function writePassword() {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVQXYZ"
  var lowercase = "abcdefghijklmnopqrstuvqxyz"
  var numbers = "0123456789"
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  var chosenCharacters = ""
  var chosenCharactersIndex = 0
  
  for (var i = 0; i < 1; i++) {
    var passwordLength = parseInt(prompt("How long do you want your password to be?\nType in a numerical value between 8 to 128 (inclusive)."));
    console.log(passwordLength);
    if (isNaN(passwordLength) === true || passwordLength < 8 || passwordLength > 128) { 
      var wrongLengthInput = confirm("Must input a numerical value between 8 and 128 (inclusive).\nPress 'OK' to continue and 'Cancel' to exit.");
      if (wrongLengthInput === true) {
        i -= 1;
      } else {
        return;
      }
    } 
  }

  for (var i = 0; i < 1; i++) {
    var includeLowercase = confirm("Do you want to include lowercase characters in your password?\nPress 'OK' for yes and 'Cancel' for no.");
    if (includeLowercase) {
      chosenCharacters += lowercase;
    }
    if (includeLowercase) {
      chosenCharactersIndex += 26;
    }
    console.log(chosenCharacters);
    console.log(chosenCharactersIndex);

    var includeUppercase = confirm("Do you want to include uppercase characters in your password?\nPress 'OK' for yes and 'Cancel' for no.");
    if (includeUppercase) {
      chosenCharacters += uppercase;
    }
    if (includeUppercase) {
      chosenCharactersIndex += 26;
    }
    console.log(chosenCharacters);
    console.log(chosenCharactersIndex);

    var includeNumbers = confirm("Do you want to include numbers in your password?\nPress 'OK' for yes and 'Cancel' for no.");
    if (includeNumbers) {
      chosenCharacters += numbers;
    }
    if (includeNumbers) {
      chosenCharactersIndex += 10;
    }
    console.log(chosenCharacters);
    console.log(chosenCharactersIndex);

    var includeSpecialCharacters = confirm("Do you want to include special characters in your password?\nPress 'OK' for yes and 'Cancel' for no.");
    if (includeSpecialCharacters) {
      chosenCharacters += specialCharacters;
    }
    if (includeSpecialCharacters) {
      chosenCharactersIndex += 33;
    }
    if (includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSpecialCharacters === false) {
      var wrongCharacterInput= confirm("You must select at least one of the four character types.\nPress 'OK' to continue and 'Cancel' to exit."); 
      if (wrongCharacterInput === true) {
        i -= 1;
      }
    }
    console.log(chosenCharacters);
    console.log(chosenCharactersIndex);
  }

  function generatePassword() {
    var createPassword = "";
    for (var i = 0; i < passwordLength; i++) {
      createPassword += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharactersIndex));
    }
    console.log(createPassword);
    return createPassword;
  }

  var password = generatePassword();

  passwordText.value = password;
}

function copyPassword() {
  passwordText.select();
  passwordText.setSelectionRange(0, 99999);

  document.execCommand("copy");

  alert("Password has been copied to your clipboard.");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);
