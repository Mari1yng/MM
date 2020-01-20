// Variables

let allCards = ['mario', 'mario', 'luigi', 'luigi', 'leonardo', 'leonardo', 'robin', 'robin', 'frogger', 'frogger', 'donkeykong', 'donkeykong', 'ghost', 'ghost', 'bombjack', 'bombjack'];
let buttons = [...document.getElementsByClassName('difficulty')];
let tiles;

let visibleTiles = [];
let visibleTile;
let activeButton;
let deck;
let turnCounter = 0;
let cardsMatched = 0;
let timeLeft;
let timer;
let timerDisplay = document.getElementById('timer');

/** Shuffle all cards using Fisher-Yates shuffle algorithm
 *  This function is called every time after difficulty was changed
 *  and card deck assigned 
 */

function shuffle(arr) {
    let newPosition;
    let tempVar;
    for (let i = arr.length - 1; i > 0; i--) {
        newPosition = Math.floor(Math.random() * (i + 1));
        tempVar = arr[i];
        arr[i] = arr[newPosition];
        arr[newPosition] = tempVar
    }
    return arr;
};

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
    for (i = 0; i < deck.length; i++) {
        newGrid += '<div id="tile' + i + '"class="tile ' + deck[i] + ' hidden"></div>';
    };
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
    tiles = tiles.filter(val => !val.classList.contains('removed'));
};

// Function that will reset the game 

function resetGame() {
    location.reload();
}

// Function that will allow flipping the tiles

function flipTile() {
    visibleTile = this;
    this.classList.remove('hidden');
// Assigning first clicked tile to visibleTiles array and allowing another click
    if (visibleTiles.length == 0) {
        visibleTiles[0] = visibleTile;
        return;
// Assigning another tile, second click, to visibleTiles array
    } else {
        visibleTiles[1] = visibleTile;
/** Making sure second clicked tile is not the same one to prevent removing tile 
* from the game after double clicking.
*/
        if (visibleTiles[0].id === visibleTiles[1].id) {
            visibleTiles[0] = visibleTile;
            return;
/** If the cards are different - not the same, double-clicked card, 
* the game proceeds and allows for the turn number to be adjusted, increased and 
* displayed properly as well a removing possibility to click another-third card.
*/
        } else {
            turnCounter++;
            $('h3').html('Turns: ' + turnCounter);
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', flipTile);
            });
        }
/** Delaying game from proceedning after card matched for better UX.
* Without this function user unable to see matched cards or second uncoverd
* unmatched card before being flipped back.
*/
        setTimeout(function () {
            if (visibleTiles[0].className === visibleTiles[1].className && visibleTiles[0].id != visibleTiles[1].id) {
                cardsMatched++;
                visibleTiles.forEach(function (tile) {
                    tile.classList.add('removed');
                });
// Making sure cards are removed from the deck to prevent double clicking
                disableCards();
                if (cardsMatched == deck.length / 2) {
// Displaying winAlert modal after all cards matched
                    winAlert();
                    turnCounter = 0;
                    $('h3').html('Turns: ' + turnCounter);

                };
// Cards unmatched, making sure they are flipped back again and still in game
            } else {
                visibleTiles.forEach(function (tile) {
                    tile.classList.add('hidden');
                });
            };
            tiles.forEach(function (tile) {
                tile.addEventListener('click', flipTile);
            });
// Emptying visibleTiles to be able to match cards again in another turn
            visibleTiles = [];
        }, 750);
    }
}

/** Function that starts the game and checks which difficulty level has been
 * picked in order to assign countDown function and display timer or leave the timer out.
 */
function startGame(){
    if (deck.length === 16){
        timeLeft = 60;
        timer = setInterval(countDown, 1000);
    } else { 
        clearInterval(timer);
        timerDisplay.innerHTML = ''; 
    };
    $('.tile').click(playClickSound);
    tiles.forEach(function(tile){
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
        tiles=[...document.getElementsByClassName('tile')];
        startGame();
/** Medium level picked, assigns only 12 tiles and 12 cards to the deck, shuffles deck and creates
 * grid then starts the game. 
 */ 
    } else if ($(this).hasClass('mediumbtn')){
        deck =  ['mario', 'mario','luigi', 'luigi', 'leonardo', 'leonardo', 'robin', 'robin', 'frogger', 'frogger', 'donkeykong', 'donkeykong'];
        shuffle(deck);        
        createGrid();
        tiles=[...document.getElementsByClassName('tile')];
        startGame();
/** Hard level picked, 16 tiles and cards in deck, creating grid and starts 
 * function startGame which assigns timer. */
    } else {
        deck = allCards;
        shuffle(deck);       
        createGrid();
        tiles=[...document.getElementsByClassName('tile')];
        startGame();
        
    }
}

//function that listens for which difficulty button is clicked
let checkButton = function (){
    buttons.forEach(function(button){
        button.addEventListener('click', clickedButton);
    });
}

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
})
