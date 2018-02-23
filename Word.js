var Letter = require("./Letter.js");

//var lowerFullWord = "Banana Pancakes";
//var fullWord = lowerFullWord.toUpperCase().split("");
//var emptyWord = [];
var userGuess = process.argv[2].toUpperCase();

function Word(wordChoice){
    this.wordChoice = wordChoice;
    this.fullWord = wordChoice.toUpperCase().split("");
    this.emptyWord = [];

    for (i = 0; i < this.fullWord.length; i++){
        if (this.fullWord[i] === " "){
            this.emptyWord.push(this.fullWord[i]);
        }else{
            this.emptyWord.push("_"); 
        }
    
    this.wordGame = function(){
        console.log(this.emptyWord.join(" "));
    }

    this.letterGame = function() {
        var letterCount = 0;
        for( x = 0; x < this.fullWord.length; x++){    
            if(userGuess === this.fullWord[x]) {
            
                console.log("correct!");
                var letterLocation = x;
                letterCount++
                console.log(letterLocation);
                this.ifAccurate = 1;
                this.letterSpace = userGuess;
                this.emptyWord.splice(letterLocation, 1, this.fullWord[x]);
                console.log(this.emptyWord);
                console.log(this.ifAccurate);
                console.log(this.letterSpace);
            } else {
                //console.log("this letter is not in the word");
                this.ifAccurate = 0;
                //console.log(this.ifAccurate);
                //console.log(this.letterSpace);
            }
        }
        console.log("you have matched "+letterCount+" letter(s)!");
    }
    
        
    }

}

const testWord = new Word("Banana Pancakes");

testWord.wordGame();
testWord.letterGame();