var gameWords = [
    "moist",
    "slurp",
    "turgid",
    "curd",
    "dangle",
    "diddle",
    "expulsion",
    "gurgle",
    "smear",
    "squirt",
    "viscous",
    "bulbous",
    "secrete",
    "dripping",
    "squat",
    "kumquat",
    "discharge",
    "frothy",
    "crusty",
    "munch",
    "soggy",
    "splayed",
    "seepage"
];

// Body of all the game's logic. Functions mostly self explanitory

function randomWord(gameWords) {
    var word = gameWords[Math.floor(Math.random() * gameWords.length)];
    return word;
};

function isCorrectGuess(word, letter) {
    for (var i = 0; i < word.length; i++) {
        if (word.includes(letter)) {
            return true;
        }
        else {
            return false;
        }
    }      
};

function getBlanks(word) {
    var blankArray = [];
    for (var j = 0; j < word.length; j++) {
        blankArray.push("_");
    }
    return blankArray;
};

function fillBlanks(word, puzzleState, letter) {
    for (var k = 0; k < puzzleState.length; k++) {
            if ((puzzleState[k] === "_") && (word[k] === letter)) {
                puzzleState[k] = letter;
            }
        }
    
        return puzzleState;
};

function setupRound(word) {
    var round = {
            word: word,
            guessesLeft: 9,
            wrongGuesses: [],
            puzzleState: getBlanks(word)
        
        }   
        
    return round;
};

function updateRound(round, letter) {

    var newPuzzleState = fillBlanks(round.word, round.puzzleState, letter);
    if (round.word.includes(letter)) {
        round.puzzleState = newPuzzleState;
    }
    else {
        round.guessesLeft--;
        round.wrongGuesses.push(letter);
    }
};

function hasWon(puzzleState) {
    if (puzzleState.includes("_") === true) {
        return false;
    }
    else if (puzzleState.includes("_") === false) {
        return true;
    }
   
};

function hasLost(guessesLeft) {
    if (guessesLeft === 0) {
        return true;
    }
    else {
        return false;
    }
};

// isEndOfRound() not used in final version of game

function isEndOfRound(round) {
    if (round.puzzleState.includes("_") === false) {
        return true;
    }
    else if (round.guessesLeft === 0) {
        return true;
    }
    else {
        return false;
    }
        
};

// setupGame() is the first function to run, called in myGame Object

function setupGame(gameWords, playerWins, playerLosses) {
    var word = randomWord(gameWords);
    var game = {
        wins: playerWins,
        losses: playerLosses,
        round: setupRound(word)
    }
    console.log(game)
    return game;
};

// startNewRound() more accurately handles what happens when "game over" conditions are met

function startNewRound(game) {
    
    if (hasWon(game.round.puzzleState) === true) {
        game.wins++;
        document.getElementById("win-counter").innerHTML = myGame.game.wins;
        alert("You Win! The word was ((" + game.round.word + ")). You have won " + game.wins + " time(s)!");
        cleanUp();
    }
    else if (hasLost(game.round.guessesLeft) === true) {
        game.losses++;
        document.getElementById("loss-counter").innerHTML = myGame.game.losses;
        alert("You lose... The word was ((" + game.round.word + ")). You have lost " + game.losses + " times.");
        cleanUp();
    }
};

//---------COMMENTED OUT CODE: was written for buttons, decided not used buttons for final code

//function makeButtons() {
//    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//    var letterButtons = document.getElementById("button-column");
//    for (var h = 0; h < letters.length; h++) {
//        var btn = document.createElement("button");
//        var btnText = document.createTextNode(letters[h]);
//        btn.appendChild(btnText);
//        btn.id = letters[h].toLowerCase();
//        letterButtons.appendChild(btn);
//   }
//}

//makeButtons();
//--------------------------------------------------------------------------------

// Game object and variables/HTML page modifiers for initial game

var myGame = {
    game: setupGame(gameWords, 0, 0),
    words: gameWords,
    round: {
        puzzleState: []
    }
};

var puzzleState = document.getElementById("puzzle-state");
var playerWins = document.getElementById("win-counter");
var playerLosses = document.getElementById("loss-counter");
puzzleState.innerHTML = myGame.game.round.puzzleState.join(" ");
playerWins.innerHTML = 0;
playerLosses.innerHTML = 0;

//-------------------------------------------------------------------------
//document.getElementById("a").addEventListener("click", function(word) {
//    console.log("This is A");
//});
//-------------------------------------------------------------------------

//On key press function

document.onkeyup = function myGuess(event, word, puzzleState) {
    var round = myGame.game.round;
    var letter = event.key;
    var word = myGame.game.round.word;
    var puzzleState = myGame.game.round.puzzleState;
    console.log("letter is " + letter);
    console.log("puzzlestate:", puzzleState)
    if (word.includes(letter) === true) {
        console.log("right choice!");
        updateRound(round, letter);
        document.getElementById("puzzle-state").innerHTML = myGame.game.round.puzzleState.join(" ");
    } else if (word.includes(letter) === false) {
        console.log("oops");
        updateRound(round, letter);
        document.getElementById("guesses-left").innerHTML = myGame.game.round.guessesLeft;
        document.getElementById("wrong-guesses").innerHTML = myGame.game.round.wrongGuesses;
    }
    startNewRound(myGame.game);

};

//This function restarts the game

function cleanUp() {
    var playerWins = myGame.game.wins;
    var playerLosses = myGame.game.losses;
    myGame.game.round.guessesLeft = 9;
    document.getElementById("guesses-left").innerHTML = myGame.game.round.guessesLeft;
    myGame.game.round.wrongGuesses = "";
    document.getElementById("wrong-guesses").innerHTML = myGame.game.round.wrongGuesses;
    myGame.game = setupGame(gameWords, playerWins, playerLosses);
    document.getElementById("puzzle-state").innerHTML = myGame.game.round.puzzleState.join(" ");

};
