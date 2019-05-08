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


var myGame = {
    wins: 0,
    losses: 0,
    round: setupRound()
    
};

//working
document.onkeyup = function myGuess(event, word, puzzleState) {
    var letter = event.key;
    var word = myGame.round.word;
    console.log("letter is " + letter);
    console.log("puzzlestate:", puzzleState)
    if (word.includes(letter)) {
        console.log("Here!");
        fillBlanks(word, letter, puzzleState);
    }
  
};

// will not change the puzzleState array for unknown reasons
function fillBlanks(word, letter, puzzleState) {
    for (var k = 0; k < word.length; k++) {
        if ((word[k] === letter) && (puzzleState[k] === "_")) {
            puzzleState[k] = letter;
            document.getElementById("puzzle-state").innerHTML = puzzleState;
        }

    }
    return puzzleState;
};


//working
function randomWord() {
    word = gameWords[Math.floor(Math.random() * gameWords.length)];
    return word;
};

//working
function setupRound() {
    var round = {
        word: randomWord(),
        guessesLeft: 9,
        wrongGuesses: [],
        puzzleState: getBlanks()
        
    }

    return round;
    
};

//working
function getBlanks() {
    puzzleState = [];
    for (var j = 0; j < word.length; j++) {
        puzzleState.push(" _ ");
    }
    document.getElementById("puzzle-state").innerHTML = puzzleState;
    return puzzleState;
};

function hasWon(puzzleState) {
    if (puzzleState.includes(" _ ") === true) {
        return false;
    }
    else if (puzzleState.includes(" _ ") === false) {
        isEndOfRound();
        return true;
    }
   
};

function hasLost(guessesLeft) {
    if (guessesLeft === 0) {
        isEndOfRound();
    }
    else {
        return false;
    }
};

function isEndOfRound(round) {
    if (round.puzzleState.includes("_") === false) {
        startNewRound();
    }
    else if (round.guessesLeft === 0) {
        startNewRound();
    }
    else {
        return false;
    }

        
};


function startNewRound() {
    
    if (hasWon(myGame.round.puzzleState) === true) {
        myGame.wins++;
        alert("You Win! The word was " + myGame.round.word + ". You have won " + myGame.wins + " time(s)!");
        document.getElementById("puzzle-state").innerHTML = [];
        getBlanks();
        
    }
    else if (hasLost(myGame.round.guessesLeft) === true) {
        myGame.losses++;
        alert("You lose... The word was " + myGame.round.word + ". You have lost " + myGame.losses + " times.");
        document.getElementById("puzzle-state").innerHTML = [];
        getBlanks();
     
    }
};

//working game start
myGame;

