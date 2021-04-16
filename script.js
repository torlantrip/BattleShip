// Locations variables
var randomLoc = Math.floor(Math.random() * 4);
var location1 = randomLoc;
var location2 = location1;
var location3 = location1;

// user's guess variable
var guess;

// hits variable
var hits = 0;

//guesses variable
var guesses = 0;

// ship's variable
var isSunk = false;
// The game

while (isSunk == false) {
    guess = prompt('You only have one fucking guess between 0-6, so ready, aim and fire!')
    if (guess < 0 || guess > 6) {
        alert('You have entered the wrong fucking input BITCH');
    } else {
        guesses = guesses + 1;

        if (guess == randomLoc) {
            hits = hits + 1;
            alert('You won flawlessly');
            isSunk = true;

        } else{
            alert('You lost motherfucker, see you again')
            isSunk = true;
        }
    }
}

var stats = (3/guesses) + '%';
alert(stats);