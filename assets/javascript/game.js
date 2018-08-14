// Variables 
var userGuess;
var currentWord;
var questionBank;
var wrongAnswerCount = 0;
var messages;
var win ;
var numberOfWins = 0;



//Arrays

var wordArray=['cat','dog','horse','cow','hippopotamus','scorpion','squirrel','chimpanzee','crocodile','alligator','giraffe','hamster','monkey','octopus','owl','panda','goldfish','rabbit'];


var alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


//Random word Generator
var currentnWord = myArray[Math.floor(Math.random() * myArray.wordArray)];




// Functions
        // Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
         



        //On key up 
document.onkeyup = function(event) 
{
        // var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var dashes = "";
   
    for (i = 0; i < chosenWord.length; i++)
    {
        if (chosenWord.charAt(i) == " ") {
          dashes += " ";
        } else {
          dashes += "-";
        }
    }


    document.getElementById("word").innerHTML = dashes;
    dashes.charAt(0) = "a";

}




// Number of Guesses Remaining: (# of guesses remaining for the user).

var guessesRemaining = 0;


// function calls





    //Objects
var questionBank = {

    'cat': "This question should be visible during guesses",
    // 'dog',
    // 'horse',
    // 'cow',
    // 'hippopotamus',
    // 'scorpion',
    // 'squirrel',
    // 'chimpanzee',
    // 'crocodile',
    // 'alligator',
    // 'giraffe',
    // 'hamster','
    // ''monkey',
    // 'octopus',
    // 'owl',
    // 'panda',
    // 'goldfish',
    // 'rabbit'=
};

messages = {
    win: 'You win!',
    lose: 'Game over!',
    guessed: ' already guessed, please try again...',
    validLetter: 'Please enter a letter from A-Z'
};



// Conditions

if (wordArray[i]===currentWord.length && currentWord.length < lives.length){
    console.log(messages.win);
    }
else if (wordArray[i]!==currentWord.length ||  currentWord.length >= lives.length){
    console.log(messages.lose);
    
}
else {
    console.log(messages.validLetter);
}




var Wins =  ("# of times user guessed the word correctly");
var losses = ("# of times user didnt guess word in the guess amount given")
// After the user wins/loses the game should automatically choose another word and make the user play it. -->
    

// loops

for (var i=0 ; i >= currentWord.length; i++ ){



}