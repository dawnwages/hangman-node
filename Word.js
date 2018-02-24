
var Letter = require("./Letter.js");
var inquirer = require("inquirer");
var emptyWord = [];

//var lowerFullWord = "Banana Pancakes";
//var fullWord = lowerFullWord.toUpperCase().split("");
//var emptyWord = [];
//var userGuess = process.argv[2].toUpperCase();

var Word = function(wordChoice){
    this.wordChoice = wordChoice;
    this.fullWord = wordChoice.toUpperCase().split("");
    //this.emptyWord = [];
    this.wordLength = wordChoice.length;
    this.successGuess = 0;


    Letter.prototype.toString = function(){
        // console.log("this is the printed info : "+this.letterCharacter);     
            
            return this.displayLetter;
        };


    for (i = 0; i < this.fullWord.length; i++){
        if (this.fullWord[i] === " "){
            emptyWord.push(new Letter(this.fullWord[i], true));
            //this.emptyWord.push(this.fullWord[i]);
            //we're using this variable so we can track when we are complete. These are all of the letters e
            this.wordLength--;
        }else{
            emptyWord.push(new Letter(this.fullWord[i], false));
            //this.emptyWord.push("_"); 
        }
    }
    console.log("this should be all of the letter objects: "+emptyWord.join(" "));

    this.startLoop = function(){
        if (this.wordLength > 0){
            inquirer.prompt([
                {
                    name: "letterCharacter",
                    message: "Guess a letter!",
                }
            ]).then(function(answers){
                this.wordLength--;
                console.log(wordLength);
            })
        }
    }

    this.startLoop();
    //Letter.printInfo();

   //console.log("this is the displayWord :"+this.emptyWord[1][0]);

    // this.addLetterGuess = function(userGuess){
    //         inquirer.prompt([
    //             {
    //                 name: "letterCharacter",
    //                 message: "Guess a letter!"
    //             }
    //         ]).then(function(answers){
    //             //initializes the new letter variable
                
    //             newLetter.printInfo();
    //         }); 
    // }
    
    
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

    // this.letterGame = function() {
    //     var letterCount = 0;
    //     for( x = 0; x < this.fullWord.length; x++){    
    //         if(userGuess === this.fullWord[x]) {
            
    //             console.log("correct!");
    //             var letterLocation = x;
    //             letterCount++
    //             console.log(letterLocation);
    //             this.ifAccurate = 1;
    //             this.letterSpace = userGuess;
    //             this.emptyWord.splice(letterLocation, 1, this.fullWord[x]);
    //            // console.log(this.emptyWord);
    //            // console.log(this.ifAccurate);
    //            // console.log(this.letterSpace);
    //         } else {
    //             //console.log("this letter is not in the word");
    //             this.ifAccurate = 0;
    //             //console.log(this.ifAccurate);
    //             //console.log(this.letterSpace);
    //         }
    //     }
    //     console.log("you have matched "+letterCount+" letter(s)!");
    // }
    
        


}

//const testWord = new Word("Banana Pancakes");

//testWord.wordGame();
//testWord.letterGame();


//This creates a function so we can print each letter


module.exports = Word;
