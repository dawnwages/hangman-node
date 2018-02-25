
var Letter = require("./Letter.js");
var inquirer = require("inquirer");
//inquirer.registerPrompt('recursive', require('inquirer-recursive'));
var emptyWord = [];
var wordLength = 0;
//var emptyWord = [];

var Word = function(wordChoice){
    this.wordChoice = wordChoice;
    this.fullWord = wordChoice.toUpperCase().split("");
    //this.emptyWord = [];
    this.successGuess = 0;

    wordLength = wordChoice.length;
    this.createLetters = function() {

        for (i = 0; i < this.fullWord.length; i++){
            if (this.fullWord[i] === " "){
                emptyWord.push(new Letter(this.fullWord[i], true));
                
                //we're using this variable so we can track when we are complete. These are all of the letters e
                wordLength--;
            }else{
                emptyWord.push(new Letter(this.fullWord[i], false));
                
            }
        }

        Letter.prototype.toString = function(){     
            return this.displayLetter;
        };

        console.log("this should be all of the letter objects: "+emptyWord.join(" "));
    };

    this.createLetters();
    //this.updateCheckLetter(); // No longer need this because we are taking this out of the constructor -- I don't think we have any need for "this" either. We want to keep it on this page so we can communicate with the letter constructor. I guess we can call it on the index page maybe?

}

var updateCheckLetter = function () {
    var c = 0;// c will need to be changed to word length, but this is just to keep it under control for now.
   if ( c < 3 ){ 
    c++;
    inquirer.prompt([     
        {
                    name: 'letterCharacter',
                    message: 'Guess a letter!',
        }
    ]).then(function(answers){
        console.log("You picked :"+answers.letterCharacter);
        for (l = 0; l < emptyWord.length; l++){
            if(emptyWord[l].letterCharacter === answers.letterCharacter){
                emptyWord[l].letterPicked = true;
                emptyWord[l].displayLetter = answers.letterCharacter;
                console.log("updated letter Character: "+answers.letterCharacter);
                console.log("updated display letter: "+emptyWord[l].displayLetter);
            } else {
                console.log(emptyWord[l].letterCharacter+" did not match");
            }
        }
        console.log("this should be all of the letter objects: "+emptyWord.join(" "));
        updateCheckLetter();
    });

};
    // for ( l = 0; l < emptyWord.length; l++){
    //     //console.log(emptyWord[l].displayLetter);
    //     console.log(emptyWord[l].letterCharacter);
    // }
};

updateCheckLetter();

module.exports = Word;
