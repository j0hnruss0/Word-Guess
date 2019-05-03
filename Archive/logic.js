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
