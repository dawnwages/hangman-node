var inquirer = require("inquirer");

//contains a constructor Letter. This constructor should be able to either display an underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed.

//userGuess = a string value to store the underlying character for the letter
// ifAccurate takes the character as an argument and checks it against the underlying character
//fullWord = the word that the user is guessing against. This should be designed in a different document

//var wordArray = fullWord.split("");
//var userGuess = process.argv[2].toUpperCase();
//console.log(userGuess);


// if(fullWord.indexOf(this.letterGuess) > -1){
//console.log(fullWord);
//console.log(emptyWord);

// The way it is now it will always be true because the userGuess is being checked against the ne

function Letter(letterCharacter){ 
    this.letterCharacter = letterCharacter;
    this.letterPicked = false;
    this.displayLetter = "_";

    this.letterCheck = function(){

        //inquire to push to the letter

        if(userGuess === this.letterCharacter) {
            //console.log(this.letterCharacter);
            //console.log(userGuess);
            this.displayLetter = userGuess;
            this.letterPicked = true;
            console.log("This is the display letter: "+this.displayLetter);
            return this.displayLetter;
        } else {
            //console.log(this.letterCharacter);
            //console.log(userGuess);
            //console.log("This is the display letter: "+this.displayLetter);
            return this.displayLetter;
        }
    }
    //function that returns the underlying character if the letter has been guessed or a placeholder if the letter has not been guessed


}

//const testLetter = new Letter(userGuess);

Letter.prototype.printInfo = function(){
    console.log(this.letterCharacter);
};

//testLetter.letterCheck();
function userGuess() {
    inquirer.prompt([
        {
            name: "letterCharacter",
            message: "Guess a letter!"
        }
    ]).then(function(answers){
        //initializes the new letter variable
        var newLetter = new Letter        (answers.letterCharacter);
        newLetter.printInfo();
    }); 
}

//userGuess();


module.exports = Letter;
