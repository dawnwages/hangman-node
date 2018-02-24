var Word = require("./Word.js");

var guessLimit = 10; // you have 10 incorrect guesses before the game ends


var wordArray = [
    "Banana Pancakes",
    "Better Together",
    "Waiting On The World To Change",
]

function playGame() {
    var randomWord = new Word(wordArray[Math.floor(Math.random()*wordArray.length)]);
    console.log(randomWord);

    // creates printInfo method that applies to the newly created word and will be used to print game status
    Word.prototype.printInfo = function(){
        console.log(this.emptyWord.join(" "));
    };


}





playGame();


