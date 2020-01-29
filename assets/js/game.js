/** Variables  
 */ 
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
    for (let i = 0; i < deck.length; i++) {
        newGrid += '<div id="GridPositionNo' + (i+1) + '"class="mx-auto tile ' + deck[i] + ' hidden"></div>';
    }
    document.getElementById('board').innerHTML = newGrid;
}

/** Function playing card click sound */
function playClickSound() {
    $('audio#tilesound')[0].play();
}

/** Function that will filter all cards by nagation of containing class "removed"
 * this will allow for them to be removed from current "tilesInGrid" array. 
 * This was created to make sure matched cards cannot be clicked again despite
 * being already removed from the card deck.
 */

function disableCards() {
    tilesInGrid = tilesInGrid.filter(function (tile) {
        return !tile.classList.contains('removed');
    }); 

}

/** Function reseting the game  
*/

function resetGame() {
    location.reload();
}

/** Function that will be called when an update to the turnCounter is required
 */
function turnCounterDisplay() {
	$('h3').html('Turns: ' + turnCounter);
}

/** Function that adds class 'removed' to matched tiles in order to remove them from the deck-game 
*/
function removeCardsFromDeck(){
    cardsUncovered.forEach(function (tile) {
        tile.classList.add('removed');
    });
}

/** Function that will add class 'hidden' to the tile after unsucessful match
  in order to return this card back to the game.
 */
function returnCardsBackToDeck(){
    cardsUncovered.forEach(function (tile) {
        tile.classList.add('hidden');
    });
}

/** Function that checks for a game victory - whether all cards were matched
 */
function gameVictoryCheck(){
    if (cardsMatched == deck.length / 2) {
        winAlert();
        turnCounter = 0;
        turnCounterDisplay();
    } else {
        return;
    }
}

/** Function that returns possibility of tile clicking/flipping
 */
function enableTileClick(){
    tilesInGrid.forEach(function(tile){
        tile.addEventListener('click', cardRevealed);
    });
}

/** Removing possibility of tile clicking/flipping
 */
function disableTileClick(){
    tilesInGrid.forEach(function (tile) {
        tile.removeEventListener('click', cardRevealed);
    });
}

/** Function that checks for a card match - pair match
 */
function checkForCardMatch(){
    if (cardsUncovered[0].className === cardsUncovered[1].className && cardsUncovered[0].id != cardsUncovered[1].id) {
        cardsMatched++;
        removeCardsFromDeck();
        disableCards();
        gameVictoryCheck();
    } else {
        returnCardsBackToDeck();
    }
}

/** Function delaying cards to be flipped back in order to allow game user to
   see what card has been uncovered but not matched or what pair has been removed from the game
*/
function delayCardsFlippingBack(){
    setTimeout(function () {
        checkForCardMatch();
        enableTileClick();
        cardsUncovered = [];
    }, 750);
}

/** Function that will reveal cards after tile was flipped 
*/

function cardRevealed() {
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
            disableTileClick();
        }
        delayCardsFlippingBack();
    }
}

/** Function that starts timer for hard level
 */

 function startTimerIfNeeded(){
    if (deck.length === 16){
        timeLeft = 60;
        clearInterval(timer);
        timer = setInterval(countDown, 1000);
    } else { 
        clearInterval(timer);
        timerDisplay.innerHTML = ''; 
    }
 }

 /** Fuction that let's tile flipping and playing game
  */

function startTileFlipping(){
    startTimerIfNeeded();
    $('.tile').click(playClickSound);
    enableTileClick();    
}

/** Function setting easy level play
 */

function playEasyLevel(){
    deck = ['mario', 'mario','luigi', 'luigi', 'leonardo', 'leonardo', 'robin', 'robin'];
    shuffle(deck);        
    createGrid();
    tilesInGrid=[...document.getElementsByClassName('tile')];
    turnCounter = 0;
    turnCounterDisplay();
    startTileFlipping();
}

/** Function setting medium level play
 */
function playMediumLevel(){
    deck =  ['mario', 'mario','luigi', 'luigi', 'leonardo', 'leonardo', 'robin', 'robin', 'frogger', 'frogger', 'donkeykong', 'donkeykong'];
    shuffle(deck);        
    createGrid();
    tilesInGrid=[...document.getElementsByClassName('tile')];
    turnCounter = 0;
    turnCounterDisplay();
    startTileFlipping();
}

/** Function setting hard level play
 */
function playHardLevel(){
    deck = allCards;
    shuffle(deck);       
    createGrid();
    tilesInGrid=[...document.getElementsByClassName('tile')];
    turnCounter = 0;
    turnCounterDisplay();
    startTileFlipping();
}

/** Function that allows picking desired difficulty of a game
 */ 

let pickingDifficulty = function(){
    activeButton = this;
    if ($(this).hasClass('easybtn')){
       playEasyLevel();
    } else if ($(this).hasClass('mediumbtn')){
        playMediumLevel();
    } else {
       playHardLevel();        
    }
};

/** Function that makes difficulty button clickable
 */
let enablingDifficultyClick = function (){
    difficultyButtons.forEach(function(button){
        button.addEventListener('click', pickingDifficulty);
    });
};

/** Calling for a function that starts game process by allowing the user to pick 
 * difficulty and then proceed with a game
 * */

enablingDifficultyClick();  

/** Setting modals - welcome (on page load, on game reset etc.), game over (after time
 * has run out in level hard) and winning one (all cards matched, game won) 
 */
function welcomeModal(){
    $('#welcomeModal').modal('show');
}

function loadPage(){
    window.onload = welcomeModal();
}

loadPage();

function gameOver(){
    $('#gameOverModal').modal({keyboard: false});
    $('#gameOverModal').modal('show');
    $('#closeGameOver').click(resetGame);
}

function winAlert(){
    $('#winModal').modal('show');
    $('.winModalBtn').click(resetGame);
}
