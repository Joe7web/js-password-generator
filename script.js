
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"] 
var password = ""
var allChars = []

function getParams (){
  var pwLength = prompt("How many characters would you like your password to be? Choose a number between 8 and 128.");

  pwLength = parseInt(pwLength)
  
  if (pwLength < 8 || pwLength > 128) {
   alert("Password length must be between 8 and 128 characters");
   getParams();
  }
  
  var lowCaseChoice = confirm("Do you want to include lowercase letters in your password?")

  if (lowCaseChoice === true){
    for (var i = 0; i < lowerCase.length; i++){
    allChars.push(lowerCase[i]);
    }

  }
  
  var upCaseChoice = confirm("Do you want to include uppercase letters in your password?")

  if (upCaseChoice === true){
    for (var i = 0; i < upperCase.length; i++){
      allChars.push(upperCase[i]);
      }
  
  }   
  
  var numCharChoice = confirm("Do you want to include numbers in your password?")

  if (numCharChoice ===true){
    for (var i = 0; i < numChar.length; i++){
      allChars.push(numChar[i]);
      }
  
  }
  var specCharChoice = confirm("Do you want to include special characters in your password?")

  if (specCharChoice === true){
    for (var i = 0; i < specialChar.length; i++){
      allChars.push(specialChar[i]);
      }
 
  }
  for (var i = 0; i < pwLength; i++){
    var indexPW = Math.floor(Math.random() * allChars.length);
    var chosenChar = allChars[indexPW];
    password = password.concat(chosenChar);
  }
  console.log(password);
  return password;
 

} 

// Write password to the #password input

function writePassword() {
  var password = getParams();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

///Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//function generatePassword() {
  


  
 