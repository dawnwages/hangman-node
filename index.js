var Word = require("./Word.js");
var inquirer = require("inquirer");
//random word is global because it will reassign the word when the game is restart
var randomWord;

var gameGuessLimit = 10; // you have 10 incorrect guesses before the game ends

var wordArray = [
    "Banana Pancakes",
    "Better Together",
    "Waiting On The World To Change",
]

//console.log(emptyWord);

function startGame() {
    
    pickWord();
    console.log(randomWord);

    // creates printInfo method that applies to the newly created word and will be used to print game status
    // Word.prototype.printInfo = function(){
    //     console.log("this is line 21 of word javascript: "+this.emptyWord.join(" "));
    // };


}

//pick new word
function pickWord() {
    randomWord = new Word(wordArray[Math.floor(Math.random()*wordArray.length)]);
}

function playGame() {
    console.log("access letter from index.js so I can manipulate it with correct guess");
    //console.log("this should be all of the letter objects: "+emptyWord.join(" "));
}

startGame();
playGame();


