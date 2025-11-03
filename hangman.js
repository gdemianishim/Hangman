var POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", "obsiquious", "dissonant", "toady", "idempotent"];
var word = "";
var guesses = "";
var MAX_GUESSES = 6;
var guess_count = MAX_GUESSES;
var gameOver = false; 


function newGame() {
    var randomIndex = parseInt(Math.random()) * POSSIBLE_WORD.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    guess_count = MAX_GUESSES;
    gameOver = false
    
    updatePage();
}

function guessLetter() {
    var input = document.getElementById("guess");
    var letter = input.value; 
    guesses += letter; 
    upadtePage();

}

function upadtePage(){
    var clueString = "";
    for (var i = 0; i < word.length; i++);
}

