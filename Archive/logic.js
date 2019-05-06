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
            puzzleState: []
        
        }   
        
    return round;
};

function updateRound(round, letter) {

    var newPuzzleState = fillBlanks(round.word, round.puzzleState, letter); //value
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

function setupGame(gameWords, playerWins, playerLosses) {
    var word = randomWord(gameWords);
    var game = {
        wins: playerWins,
        losses: playerLosses,
        round: setupRound(word)
    }

    return game;
};

function startNewRound(game) {
    
    setupGame(gameWords, playerWins, playerLosses);
    
    if (hasWon(game.round.puzzleState) === true) {
        game.wins++;
        alert("You Win! The word was " + game.round.word + ". You have won " + game.wins + " time(s)!");
    }
    else if (hasLost(game.round.guessesLeft) === true) {
        game.losses++;
        alert("You lose... The word was " + game.round.word + ". You have lost " + game.losses + " times.");
    }
};

var myGame = {
    words: gameWords
}

