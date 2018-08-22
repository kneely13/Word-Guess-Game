// Variables 
var wordBank=['cat','dog','horse','cow','hippopotamus','scorpion','squirrel','chimpanzee','crocodile','alligator','giraffe','hamster','monkey','octopus','owl','panda','goldfish','rabbit']; 
var wins = 0;
var loss = 0;
var wrongLetter = [];
var livesLeft = [];
var dashes = [];
var userGuesses = [];
var rand;
var winCounter=0;
var imageOrder=document.querySelectorAll(".body-part");
var imageLength=imageOrder.length;



function startGame(){
    dashes=[];
    imageLength = imageOrder.length
    imageOrder.forEach(function(el) {
        el.classList.add('hidden')
    })
 rand = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log('random Word = ' + rand);
    for(var i = 0; i < rand.length; i++)
    {
        dashes.push('_');
    }
    
    document.getElementById('wordBlanks').textContent = dashes.join(" ");

    //Reset
    wrongLetter = [];
    livesLeft = 10;
   

    //HTML so that it prints on sreen
    document.getElementById('lives-left').textContent = livesLeft;
}

function winLose()
{
    if(rand === dashes.join(''))
    {
        
        wins++;
        document.getElementById('win-counter').textContent = wins
        document.getElementById('t-rex-roar').play();
        startGame();
        
        
    }
    else if(livesLeft === 0)
    {
          
         loss++;
         document.getElementById('loss-counter').textContent = loss
         document.getElementById('t-rex-roar').play();
         
         startGame();
    }
    else if(livesLeft <= 1)
    {
         
        document.querySelector('.head').setAttribute('src', 'assets/images/inkedHangman-fullBody-lose.jpg')
    }
    else if(livesLeft > 1)
    {
        document.querySelector('.head').setAttribute('src', 'assets/images/head.jpg')
    }
    
}  

var update= function(badLetters, letters) {
    document.getElementById('wordBlanks').textContent = letters.join(', ')
    document.getElementById('wrong-guesses').textContent = badLetters.join(', ')
    document.getElementById('lives-left').textContent = livesLeft
    if (imageLength >= 0) {
        imageOrder[imageLength].classList.remove('hidden')
    }
   
}

document.onkeyup = function(event)
{
    //This is needed to be saved as variable to use somewhere else
    userGuesses.push(event.key); //Determines whether the user guess is included in the random word 
    // if it does we get value greater than -1. 
    if(rand.indexOf(event.key) > -1)
    {
        //if does aggsist, push it in the right anwser for loop
        for (var i = 0; i < rand.length; i++)
        {
            if(rand[i] === event.key)
            {
                dashes[i] = event.key;
                console.log(dashes);
                winCounter++;
                winLose();
                update(wrongLetter, dashes);
            }
        }
    }
    else 
    {
        wrongLetter.push(event.key);
        livesLeft--;
        imageLength--;
        console.log(wrongLetter);
        winLose();
        update(wrongLetter, dashes);
    }
}



startGame();
console.log(rand[0]);
