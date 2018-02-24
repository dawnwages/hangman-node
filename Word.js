var Letter = require("./Letter.js");


//var lowerFullWord = "Banana Pancakes";
//var fullWord = lowerFullWord.toUpperCase().split("");
//var emptyWord = [];
//var userGuess = process.argv[2].toUpperCase();

console.log(newLetter);

function Word(wordChoice){
    this.wordChoice = wordChoice;
    this.fullWord = wordChoice.toUpperCase().split("");
    this.emptyWord = [];
    this.wordLength = wordChoice.length;
    this.successGuess = 0;

    for (i = 0; i < this.fullWord.length; i++){
        if (this.fullWord[i] === " "){
            this.emptyWord.push(this.fullWord[i]);
            this.wordLength--;
        }else{
            this.emptyWord.push("_"); 
        }

    this.addLetterGuess = function(userGuess){
            inquirer.prompt([
                {
                    name: "letterCharacter",
                    message: "Guess a letter!"
                }
            ]).then(function(answers){
                //initializes the new letter variable
                var newLetter = new Letter(answers.letterCharacter);
                newLetter.printInfo();
            }); 
    }
    
    
    // this.wordGame = function(){
    //     var incorrectGuess = 0;
    //     userGuess();

    //     // while(this.wordLength > this.successGuess){
    //     //     console.log(this.emptyWord.join(" "));
    //     //     if (i === 3) {
    //     //         break;
    //     //     }
    //     // } 
        
    // }

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
               // console.log(this.emptyWord);
               // console.log(this.ifAccurate);
               // console.log(this.letterSpace);
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

//const testWord = new Word("Banana Pancakes");

//testWord.wordGame();
//testWord.letterGame();



module.exports = Word;