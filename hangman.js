var POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", "obsiquious", "dissonant", "toady", "idempotent"];
var word = "";
var guesses = "";
var MAX_GUESSES = 6;
var guess_count = MAX_GUESSES;
var gameOver = false;


function newGame() {
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    guess_count = MAX_GUESSES;
    gameOver = false;
    updatePage();
}

function guessLetter() {
    var input = document.getElementById("guess");
    var letter = input.value;
    input.value = "";
    if (word === "" || guesses.indexOf(letter) >= 0 || gameOver === true) {
        return;
    }

    if (word.indexOf(letter) < 0) {
        guess_count--;
    }
    guesses += letter;
    updatePage();


//test
}
function updatePage() {
    var clueString = "";
    for (var i = 0; i < word.length; i++) {
        var currentLetter = word.charAt(i);
        if (guesses.indexOf(currentLetter) >= 0) {
            clueString += currentLetter + " ";
        }
        else{
            clueString+="_ ";
        }
       
    }
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;
    var guessArea = document.getElementById("guesses");
    if(clueString.indexOf("_")<0)
    {
        guessArea.innerHTML = "you Won!";
        gameOver = true
    } 
    else if (guess_count<= 0)
    {
        guessArea.innerHTML = "You Lost";
        gameOver = true;
    }
    else{
        guessArea.innerHTML = "Guessed Letters: " + guesses; 
    }
    
    var image = document.getElementById("hangmanImage");
    image.src = "images/hangman" + guess_count + ".gif";

}


