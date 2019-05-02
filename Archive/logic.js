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
    var word;
    var letter;
    for (var i = 0; i < word.length; i++) {
        if (letter === word[i]) {
            return "you typed " + letter;
        }
    }      
}
