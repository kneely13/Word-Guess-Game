// Variables 
var wordBank=['cat','dog','horse','cow','hippopotamus','scorpion','squirrel','chimpanzee','crocodile','alligator','giraffe','hamster','monkey','octopus','owl','panda','goldfish','rabbit']; 
// userGuess = [];
var wins = 0;
var loss = 0;
var wrongLetter = [];
// var questionBank;
var livesLeft = [];
// var messages;
// var alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var dashes = [];
var userGuesses = [];
var rand;
var winCounter=0;

function startGame(){
 rand = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log('random Word = ' + rand);
    for(var i = 0; i < rand.length; i++)
    {
        dashes.push('_');
    }
    //Printing dashes to the screen
    document.getElementById('wordBlanks').textContent = dashes.join(" ");

    //Reset
    wrongLetter = [];
    livesLeft = 10;

    //HTML so that it prints on sreen
    document.getElementById('lives-left').textContent = livesLeft;
}

function winLose()
{
    if(winCounter === rand.length)
    {
        // document.write(messages.win);
        alert("messages.loose");
        
        //Later add music and winning picture to this
    }
    else if(livesLeft !== 0)
    {
         alert("messages.win");   
         
    }
}    
document.onkeyup = function(event)
{
    //This is needed to be saved as variable to use somewhere else
    userGuesses = event.key; //Determines whether the user guess is included in the random word 
    // if it does we get value greater than -1. 
    if(rand.indexOf(userGuesses) > -1)
    {
        //if does aggsist, push it in the right anwser for loop
        for (var i = 0; i < rand.length; i++)
        {
            if(rand[i] === userGuesses)
            {
                dashes[i] = userGuesses;
                console.log(dashes);
                winCounter++;
                winLose();
            }
        }
    }
    else 
    {
        wrongLetter.push(userGuesses);
        livesLeft--;
        console.log(wrongLetter);
        winlose();
    }
}
//User Guesses

startGame();
// 
console.log(rand[0]);










// function calls





   //Objects

//    var messages = {
//     win: 'You win!',
//     lose: 'Game over!',
//     guessed: ' already guessed, please try again...',
//     validLetter: 'Please enter a letter from A-Z',
// }

// var questionBank = {
//     'cat': "This question should be visible during guesses"
//     }
// }


// var letter = event.key.toLowerCase();