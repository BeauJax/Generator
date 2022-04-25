// Assignment code here
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
var numericalArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
var characterArray = []; 
var specialArray = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', '{', ']', '}', ';', '"', ':', '/', '?', ',', '<', '.', '>']; 

function generatePassword() {

//Prompts - password length
var passwordLength = window.prompt("How many characters long do you want your new password to be? (Enter a number between 8 - 128)");
if (passwordLength === "" || passwordLength === null) { 
  alert("Invalid Input! You must enter a number between 8 - 128 for your new password length.");
  return;
}
else if (passwordLength < 8 || passwordLength > 128) {
  alert("Invalid Input! You must enter a number between 8 - 128 for your new password length.");
  return;
}
else {
  alert("Your new password will be " + passwordLength + " characters long.");
  console.log("Designated password length: " + passwordLength)
}  


var lowerCase = window.confirm("Would you like your new password to include LOWERCASE characters ('a, b, c, etc...')?");
  if (lowerCase) {
    alert("Your new password WILL contain LOWERCASE characters.");
    characterArray = characterArray.concat(lowerCaseArray)
    console.log("Overall list of available characters now included for use in new password: " + characterArray);
    console.log("Total count of different characters now available for use in new password: " + characterArray.length);
  }
  else { 
    alert("Your new password WILL NOT contain LOWERCASE characters.");
  }
  console.log ("Include lowercase characters in new password: " + lowerCase);

  var upperCase = window.confirm("Would you like your new password to include UPPERCASE characters ('A, B, C, etc...')?");
  if (upperCase) { 
    alert("Your new password WILL contain UPPERCASE characters."); 
    characterArray = characterArray.concat(upperCaseArray)
    console.log("Overall list of available characters now included for use in new password: " + characterArray);
    console.log("Total count of different characters now available for use in new password: " + characterArray.length);
  }
  else { 
    alert("Your new password WILL NOT contain UPPERCASE characters.");
  }
  console.log ("Include uppercase characters in new password: " + upperCase);

  var numerical = window.confirm("Would you like your new password to include NUMERICAL characters ('1, 2, 3, etc...')?");
  if (numerical) { 
  alert("Your new password WILL contain NUMERICAL characters.");
  characterArray = characterArray.concat(numericalArray)
  console.log("Overall list of available characters now included for use in new password: " + characterArray);
  console.log("Total count of different characters now available for use in new password: " + characterArray.length);
  }
  else { 
    alert("Your new password WILL NOT contain NUMERICAL characters.");
  }
  console.log ("Include numerical characters in new password: " + numerical);

  var special = window.confirm("Would you like your new password to include SPECIAL characters ('#, &, %, etc...')?");
  if (special) { 
    alert("Your new password WILL contain SPECIAL characters.");
    characterArray = characterArray.concat(specialArray)
    console.log("Overall list of available characters now included for use in new password: " + characterArray);
    console.log("Total count of different characters now available for use in new password: " + characterArray.length);
  }
  else { 
    alert("Your new password WILL NOT contain SPECIAL characters.");
  }
  console.log ("Include special characters in new password: " + special);

  //ensure at least 1 character type is chosen
  if (!lowerCase && !upperCase && !numerical && !special) { //if user does not select any character types, alert the user and provide clearer instructions to repeat the process, and end the function.
    alert("Input Invalid. You must choose character types for your new password. Please click the 'Generate Password' button to try again and choose at least 1 type of character (Lowercase, Uppercase, Numerical, or Special).");
    console.log("Invalid input. You did not choose to include any charater types for your new password. Please click the 'Generate Password' button to try again, and choose 1 or more of the available character types (Lowercase, Uppercase, Numerical, and Special). Thanks!");
    return;
  }

  //Randomizer  
  let password = "" 
  for (let i = 0; i < passwordLength; i++) { 
    let characterIndex = [Math.floor(Math.random() * characterArray.length)]; 
    password = password + characterArray[characterIndex]; 
  }
  return password
};  //end of generatePassword() function

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

// Event listener for Generate Password button
generateBtn.addEventListener("click", writePassword);