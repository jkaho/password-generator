// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = parseInt(prompt("How long do you want your password to be? Type in a numerical value between 8 to 128 (inclusive)."));
  console.log(passwordLength);
  if (isNaN(passwordLength) === true || passwordLength < 8 || passwordLength > 128) { 
      var wrongLengthInput = confirm("Must input a numerical value between 8 and 128 (inclusive).");
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
