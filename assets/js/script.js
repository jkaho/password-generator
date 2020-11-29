// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVQXYZ"
  var lowercase = "abcdefghijklmnopqrstuvqxyz"
  var numbers = "0123456789"
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  var chosenCharacters = ""
  var chosenCharactersIndex = 0
  
  for (var i = 0; i < 1; i++) {
      var passwordLength = parseInt(prompt("How long do you want your password to be? Type in a numerical value between 8 to 128 (inclusive)."));
      console.log(passwordLength);
      if (isNaN(passwordLength) === true || passwordLength < 8 || passwordLength > 128) { 
          var wrongLengthInput = confirm("Must input a numerical value between 8 and 128 (inclusive).");
          if (wrongLengthInput === true) {
              i -= 1;
          } else {
            return;
          }
      }
  }

  var includeLowercase = confirm("Do you want to include lowercase characters in your password? Press 'OK' for yes and 'Cancel' for no.");
  if (includeLowercase) {
      chosenCharacters += lowercase;
  }
  if (includeLowercase) {
      chosenCharactersIndex += 26;
  }
  console.log(chosenCharacters);
  console.log(chosenCharactersIndex);

  var includeUppercase = confirm("Do you want to include uppercase characters in your password? Press 'OK' for yes and 'Cancel' for no.");
  if (includeUppercase) {
      chosenCharacters += uppercase;
  }
  if (includeUppercase) {
      chosenCharactersIndex += 26;
  }
  console.log(chosenCharacters);
  console.log(chosenCharactersIndex);

  var includeNumbers = confirm("Do you want to include numbers in your password? Press 'OK' for yes and 'Cancel' for no.");
  if (includeNumbers) {
      chosenCharacters += numbers;
  }
  if (includeNumbers) {
      chosenCharactersIndex += 10;
  }
  console.log(chosenCharacters);
  console.log(chosenCharactersIndex);

  var includeSpecialCharacters = confirm("Do you want to include special characters in your password? Press 'OK' for yes and 'Cancel' for no.");
            
  if (includeSpecialCharacters) {
      chosenCharacters += specialCharacters;
  }
  if (includeSpecialCharacters) {
      chosenCharactersIndex += 33;
  }
  if (includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSpecialCharacters === false) {
    var wrongCharacterInput= confirm("You must select at least one of the four character types."); 
  }
  console.log(chosenCharacters);
  console.log(chosenCharactersIndex);

  function generatePassword() {
    var createPassword = "";
    for (var i = 0; i < passwordLength; i++) {
        createPassword += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharactersIndex));
    }
    console.log(createPassword);
    return createPassword;
    }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
