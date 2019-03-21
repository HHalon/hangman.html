//word bank
var wordBank = ['hulk','thor','spiderman','ironman'];
//random word selection
var word = [Math.floor(Math.random() * wordBank.length)]
var chosenWord = wordBank[word]
var underscore = [];
var rightWord = [];
var wrongWord = [];

console.log(chosenWord);
//document.onkeyup = function(event) {
var generateUndercore = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        underscore.push("_");
    }
    return underscore;
};

console.log(generateUndercore());

//user input

document.addEventListener("keypress" ,(event) => {
        var userGuess;
     let  userGuess = (String.fromCharCode(event.keyCode));

        if (chosenWord.indexOf(userGuess) > -1) {
           rightWord.push(userGuess)
        }
    });
    
console.log(underscore[chosenWord.indexOf(userGuess) = userGuess]);

//}


// user guess



//checks to see if input is correct
//for (var i = 0; i < chosenWord; i++) {
  //  if (chosenWord[i] === )
//
