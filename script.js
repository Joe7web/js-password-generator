// Assignment Code

var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"] 
var createPassword = []
var allChars = []

function getParams (){
  var pwLength = prompt("How many characters would you like your password to be? Choose a number between 8 and 128.");

  pwLength = parseInt(pwLength)
  //console.log("pw",pwLength)
  
  if (pwLength < 8 || pwLength > 128) {
   alert("Password length must be between 8 and 128 characters");
   getParams();
  }
  
  var lowCaseChoice = confirm("Do you want to include lowercase letters in your password?")
  console.log(lowCaseChoice);

  if (lowCaseChoice === true){
   // createPassword.push(lowerCase[lowCaseRandom]);
   allChars.push(lowerCase)

  }
  //console.log(allChars);
  
  var upCaseChoice = confirm("Do you want to include uppercase letters in your password?")
  if (upCaseChoice === true){
    allChars.push(upperCase)
   // createPassword.push(upperCase[upCaseRandom]);
  }   
  
  var numCharChoice = confirm("Do you want to include numbers in your password?")
  if (numCharChoice ===true){
    allChars.push.(numChar);
    //createPassword.push(NumChar[numRandom]);
  }
  var specCharChoice = confirm("Do you want to include special characters in your password?")
  if (specCharChoice === true){
    allChars.push(specialChar);
   //createPassword.push(specialChar[specCharRandom]);
  }
  for (var = 0; i < pwLength; i++)
  allChars.push(createPassword)


} 
//console.log(lowCaseChoice,"line 50")

//var lowCaseRandom = Math.floor(Math.random() * lowerCase.length);
//var upCaseRandom = Math.floor(Math.random() * upperCase.length);
// var numRandom = Math.floor(Math.random() * numChar.length);
// var specCharRandom = Math.floor(Math.random() * specialChar.length);


//for (var = 0; i < pwLength; i++)

//var newPassword = ''

//}




// Write password to the #password input

function writePassword() {
  var password = getParams();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

///Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//function generatePassword() {
  


  
  //WHEN I click the button to generate a password
  //THEN I am presented with a series of prompts for password criteria
  
  //if Click on the button - brings up first prmpt
  
//pw length prompt
  //var passwordLength = prompt('How long would you like your password to be? Please enter a number between 8 - 128')

//WHEN prompted for password criteria
//THEN I select which criteria to include in th//\\e password


//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters

 //prmpt should say "How many characters would you like your password to be?"
 //                  "Must be between 8 and 129 characters long"

// >=8 and <=129    the answer will need placed in an array

//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected

/* confrm "Do you want lowercase letters in your password?" if yes then include lowerChar array, else move to next prmpt

confrm "Do you want uppercase letters in your password?" if yes then include upperChar array , else move to next prmpt

confrm "Do you want numbers in your password?"  if yes then include numChar array, else move to next prmpt  

confrm "Do you want special characters in your password?" if yes then include spech array, else move to next prmpt */

//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria

//  create function that generates a random password - from each array selected - based on number of characters selected

//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page*?



//Will be displayed on page