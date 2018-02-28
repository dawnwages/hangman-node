

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

var Letter = function(letterCharacter, letterPicked){ 
    this.letterCharacter = letterCharacter;
    this.letterPicked = letterPicked;
    this.displayLetter = "_";

    if(this.letterPicked){
        this.displayLetter = this.letterCharacter;
    } else {
        this.displayLetter = "_";
    }

    //console.log(this.displayLetter);
    // this.letterCheck = function(){

    //     //inquire to push to the letter

    //     if(userGuess === this.letterCharacter) {
    //         //console.log(this.letterCharacter);
    //         //console.log(userGuess);
    //         this.displayLetter = userGuess;
    //         this.letterPicked = true;
    //         console.log("This is the display letter: "+this.displayLetter);
    //         return this.displayLetter;
    //     } else {
    //         //console.log(this.letterCharacter);
    //         //console.log(userGuess);
    //         //console.log("This is the display letter: "+this.displayLetter);
    //         return this.displayLetter;
    //     }
    // }
    //function that returns the underlying character if the letter has been guessed or a placeholder if the letter has not been guessed


}

//const testLetter = new Letter(userGuess);



//testLetter.letterCheck();





module.exports = Letter;
