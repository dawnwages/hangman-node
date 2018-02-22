//contains a constructor Letter. This constructor should be able to either display an underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed.

//userGuess = a string value to store the underlying character for the letter
// ifAccurate takes the character as an argument and checks it against the underlying character
//fullWord = the word that the user is guessing against. This should be designed in a different document

var lowerFullWord = "Banana Pancakes";
var fullWord = lowerFullWord.toUpperCase();
var userGuess = process.argv[2].toUpperCase();

function Letter(letterGuess, ifAccurate, letterSpace){ 
    this.letterGuess = letterGuess;
    this.ifAccurate = false;
    this.letterSpace = "_";

    //function that returns the underlying character if the letter has been guessed or a placeholder if the letter has not been guessed
    this.letterGame = function() {
        if(fullWord.indexOf(this.letterGuess) > -1){
            console.log("correct!");
            this.ifAccurate = true;
            this.letterSpace = userGuess;
            console.log(this.ifAccurate);
            console.log(this.letterSpace);
        } else {
            console.log("this letter is not in the word");
            this.ifAccurate = false;
            console.log(this.ifAccurate);
            console.log(this.letterSpace);
        }
    }

}

const testLetter = new Letter(userGuess);

testLetter.letterGame();