// Variables

const allCards = ['mario', 'mario', 'luigi', 'luigi', 'leonardo', 'leonardo', 'robin', 'robin', 'frogger', 'frogger', 'donkeykong', 'donkeykong', 'ghost', 'ghost', 'bombjack', 'bombjack'];
const difficultyButtons = [...document.getElementsByClassName('difficulty')];
const timerDisplay = document.getElementById('timer');
let turnCounter = 0;
let cardsMatched = 0;
let cardsUncovered = [];
let tilesInGrid;
let visibleTile;
let activeButton;
let deck;
let timeLeft;
let timer;


/** Shuffle all cards using Fisher-Yates shuffle algorithm
 *  This function is called every time after difficulty was changed
 *  and card deck assigned 
 */

function shuffle(cards) {
    let newPosition;
    let presentElement;
    for (let i = cards.length - 1; i > 0; i--) {
        newPosition = Math.floor(Math.random() * (i + 1));
        presentElement = cards[i];
        cards[i] = cards[newPosition];
        cards[newPosition] = presentElement;
    }
    return cards;
}

/** CountDown function is set to add additional difficulty to the game
 * but only while level hard is picked. 
 */

function countDown() {
    if (timeLeft > 0) {
        timeLeft--;
        timerDisplay.innerHTML = timeLeft + 's left';
    } else {
        gameOver();
    }
}

/** Function that will create new grid within the container with id #board.
 * variable newGrid is created to make sure all necessary classes to give 
 * possibility to change the picture displayed(card flipped) and id 
 * that will be used to make sure there are no errors in card matching.
 */

function createGrid() {
    let newGrid = '';
// Making sure the grid is created from the available deck - after checkButton () ran
    for (let i = 0; i < deck.length; i++) {
        newGrid += '<div id="GridPositionNo' + (i+1) + '"class="mx-auto tile ' + deck[i] + ' hidden"></div>';
    }
    document.getElementById('board').innerHTML = newGrid;
}

// Function that will allow for click sound to be played when tile is flipped
function playClickSound() {
    $('audio#tilesound')[0].play();
}

/** Function that will filter all cards by nagation of containing class "removed"
 * this will allow for them to be removed from current "tiles" array. 
 * This was created to make sure matched cards cannot be clicked again despite
 * being already removed from the card deck.
 */

function disableCards() {
    tilesInGrid = tilesInGrid.filter(function (tile) {
        return !tile.classList.contains('removed');
    }); 

}

// Function that will reset the game 

function resetGame() {
    location.reload();
}

/**
 * Function that will be called when an update to the turnCounter is required
 */
function turnCounterDisplay() {
	$('h3').html('Turns: ' + turnCounter);
}

function removeCardsFromDeck(){
    cardsUncovered.forEach(function (tile) {
        tile.classList.add('removed');
    });
}

function returnCardsBackToDeck(){
    cardsUncovered.forEach(function (tile) {
        tile.classList.add('hidden');
    });
}

function gameVictoryCheck(){
    if (cardsMatched == deck.length / 2) {
        winAlert();
        turnCounter = 0;
        turnCounterDisplay();
    } else {
        return;
    }
}

function delayCardsFlippingBack(){
    setTimeout(function () {
        if (cardsUncovered[0].className === cardsUncovered[1].className 
            && cardsUncovered[0].id != cardsUncovered[1].id) {
            cardsMatched++;
            removeCardsFromDeck();
            disableCards();
            gameVictoryCheck();
        } else {
            returnCardsBackToDeck();
        }
        tilesInGrid.forEach(function (tile) {
            tile.addEventListener('click', flipTile);
        });
        cardsUncovered = [];
    }, 750);
}

// Function that will allow flipping the tiles

function flipTile() {
    visibleTile = this;
    this.classList.remove('hidden');
    if (cardsUncovered.length === 0) {
        cardsUncovered[0] = visibleTile;
        return;
    } else {
        cardsUncovered[1] = visibleTile;
        if (cardsUncovered[0].id === cardsUncovered[1].id) {
            cardsUncovered[0] = visibleTile;
            return;
        } else {
            turnCounter++;
            turnCounterDisplay();
            tilesInGrid.forEach(function (tile) {
                tile.removeEventListener('click', flipTile);
            });
        }
        delayCardsFlippingBack()
    }
}

/** Function that starts the game and checks which difficulty level has been
 * picked in order to assign countDown function and display timer or leave the timer out.
 */

 function checkIfTimerNeeded(){
    if (deck.length === 16){
        timeLeft = 60;
        timer = setInterval(countDown, 1000);
    } else { 
        clearInterval(timer);
        timerDisplay.innerHTML = ''; 
    }
 }

function startGame(){
    checkIfTimerNeeded();
    $('.tile').click(playClickSound);
    tilesInGrid.forEach(function(tile){
        tile.addEventListener('click', flipTile);
    });
    
}

// Function that acts when easy, medium and hard difficulty buttons are clicked. 

let clickedButton = function(){
    activeButton = this;
/** Easy level picked, assigns only 8 tiles and 8 cards to the deck, shuffles deck and creates
 * grid then starts the game. 
 */ 
    if ($(this).hasClass('easybtn')){
        deck = ['mario', 'mario','luigi', 'luigi', 'leonardo', 'leonardo', 'robin', 'robin'];
        shuffle(deck);        
        createGrid();
        tilesInGrid=[...document.getElementsByClassName('tile')];
        turnCounter = 0;
        turnCounterDisplay();
        startGame();
/** Medium level picked, assigns only 12 tiles and 12 cards to the deck, shuffles deck and creates
 * grid then starts the game. 
 */ 
    } else if ($(this).hasClass('mediumbtn')){
        deck =  ['mario', 'mario','luigi', 'luigi', 'leonardo', 'leonardo', 'robin', 'robin', 'frogger', 'frogger', 'donkeykong', 'donkeykong'];
        shuffle(deck);        
        createGrid();
        tilesInGrid=[...document.getElementsByClassName('tile')];
        turnCounter = 0;
        turnCounterDisplay();
        startGame();
/** Hard level picked, 16 tiles and cards in deck, creating grid and starts 
 * function startGame which assigns timer. */
    } else {
        deck = allCards;
        shuffle(deck);       
        createGrid();
        tilesInGrid=[...document.getElementsByClassName('tile')];
        turnCounter = 0;
        turnCounterDisplay();
        startGame();
        
    }
};

//function that listens for which difficulty button is clicked
let checkButton = function (){
    difficultyButtons.forEach(function(button){
        button.addEventListener('click', clickedButton);
    });
};

//Calling  check button function that starts the game process
checkButton();  

// Function that loads on page load, displays modal which explains how to play the game.
function welcomeModal(){
    $('#welcomeModal').modal('show');
}

// Function displaying modal when level hard was chosen but card matching was not finished within time.
function gameOver(){
    $('#gameOverModal').modal('show');
    $('#closeGameOver').click(resetGame);
}

//Funcion that displays modal with infomration about all cards matched.
function winAlert(){
    $('#winModal').modal('show');
    $('.winModalBtn').click(resetGame);
}

//Function that allows to open winModal again - after question mark in the footer clicked
$('.fa-question-circle').click(function(){
    welcomeModal();
});
