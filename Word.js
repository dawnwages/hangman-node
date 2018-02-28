
const Letter = require("./Letter.js");
const inquirer = require("inquirer");
//inquirer.registerPrompt('recursive', require('inquirer-recursive'));
var emptyWord = [];
var wordLength = 0;

var updateCheckLetter = function () {
    var c = 0;// c will need to be changed to word length, but this is just to keep it under control for now.
    inquirer.prompt([     
        {
                    name: 'letterCharacter',
                    message: 'Guess a letter!',
        }
    ]).then(function(answers){
        //DAWN!!! YOU NEED TO ADD LOGIC IN THERE SAYING "NO YOU"VE ALREADY GUESSED THIS LETTER!
        //************** DONT FORGET TO FIX! *****************/
        //console.log("You picked :"+answers.letterCharacter);
        for (l = 0; l < emptyWord.length; l++){
            if(emptyWord[l].letterCharacter === answers.letterCharacter && emptyWord[l].letterPicked === false){
                emptyWord[l].letterPicked = true;
                emptyWord[l].displayLetter = answers.letterCharacter;
                wordLength--;
               // console.log("updated letter Character: "+answers.letterCharacter);
               // console.log("updated display letter: "+emptyWord[l].displayLetter);
            } else {
               // console.log(emptyWord[l].letterCharacter+" did not match");
            }  
        }
       console.log("line 63 this should be all of the letter objects: "+emptyWord.join(" "));        
       if(wordLength > 0){ 
           updateCheckLetter();
       } else {
           console.log('/n'+"Congratulations! You've won the game!!"+'/n');
       }
                
    });

};

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
                //console.log("pushing a blank to emptyWord");
            }else{
                emptyWord.push(new Letter(this.fullWord[i], false));
                //console.log("pushing a letter to emptyWord");
            }
        }

        Letter.prototype.toString = function(){     
            return this.displayLetter;
        };

       // console.log("this should be all of the letter objects: "+emptyWord.join(" "));
    };

    this.createLetters();
    //this.updateCheckLetter(); // No longer need this because we are taking this out of the constructor -- I don't think we have any need for "this" either. We want to keep it on this page so we can communicate with the letter constructor. I guess we can call it on the index page maybe?
        
    if (emptyWord.length === 0){
        console.log("Start the Hangman Game!");
    } else {
        console.log("line 74 this should be all of the letter objects: "+emptyWord.join(" "));
    } 

        updateCheckLetter();

};





module.exports = Word;
