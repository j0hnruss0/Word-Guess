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
    "seepage",
    "plop"
];

var randomWord = function(gameWords) {
    var guessWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    return guessWord;
};

var isCorrectGuess = function (word, letter) {
    for (var i = 0; i < word.length; i++) {
        if (word.includes(letter)) {
            return true;
        }
        else if (letter === word.charAt(word.length - 1)) {
            return true;
        }
        else if (letter === word.charAt(0)) {
            return true;
        }
        else {
            return false;
        }
    }      
};

var getBlanks = function (word) {
    var blankArray = [];
    for (var j = 0; j < word.length; j++) {
        blankArray.push("_");
    }
    return blankArray;
};


// Not sure how to finish this function; don't know how to replace underscores
// when letter occurs multiple times in a word
var fillBlanks = function (word, currentGame, letter) {
    if (word.includes(letter)) {
        for (var k = 0; k < currentGame.length; k++) {
            if ((currentGame[k] === "_") && (word[k] === letter)) {
                currentGame.splice(k, 1, letter);
                return currentGame;
            }
            else if ((currentGame[k] === letter) && (word[k] === letter)) {
                return null;
            }
        }
    }
    else {
        return false;
    }
};

var setupRound = function (word) {
    var currentGame;
    var round = {
        word: word,
        guessesLeft: 9,
        wrongGuesses: [],
        puzzleState: []
    };
    return round;
};

var updateRound = function (round, letter) {
    if (letter === true) {
        round.guessesLeft;
    }
    else {
        round.guessesLeft--;
        round.wrongGuesses.push(letter);
    }
};
