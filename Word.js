//var Letter = require("./Letter.js");

//var lowerFullWord = "Banana Pancakes";
//var fullWord = lowerFullWord.toUpperCase().split("");
//var emptyWord = [];

function Word(wordChoice, fullWord, emptyWord){
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
    
        
    }

}

const testWord = new Word("Banana Pancakes");

testWord.wordGame();