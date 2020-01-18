let allCards = ['mario', 'mario','luigi', 'luigi', 'leonardo', 'leonardo', 'robin', 'robin', 'frogger', 'frogger', 'donkeykong', 'donkeykong', 'ghost', 'ghost', 'bombjack', 'bombjack'];
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

// Shuffle all cards using Fisher-Yates shuffle algorithm and array.ptototype
function shuffle(arr) {
    let newPosition;
    let tempVar;
    for (let i = arr.length - 1; i > 0; i--){
        newPosition = Math.floor(Math.random() * (i + 1));
        tempVar = arr[i];
        arr[i] = arr[newPosition];
        arr[newPosition]= tempVar
    }
    return arr;
};

// CountDown will allow for time to be counted down on level hard for added difficulty
function countDown(){
    if (timeLeft > 0){
        timeLeft--;
        timerDisplay.innerHTML = timeLeft + 's left';
    } else {
        resetGame();
    }
}

//Function that will create new grid
function createGrid (){
    let newGrid = '';
//making sure the grid is created from the available deck - after checkButton () ran
    for (i = 0; i < deck.length; i++){
    newGrid += '<div id="tile' + i + '"class="tile '+ deck[i] + ' hidden"></div>';
    }; 
    document.getElementById('board').innerHTML = newGrid;
}

// Function that will allow for click sound to be played when tile is flipped
function playClickSound() {
    $('audio#tilesound')[0].play();
}

//Function that will filter all cards and find these with class "removed" and remove them from tiles array
function disableCards(){
    tiles = tiles.filter(val => !val.classList.contains('removed'));
};

//Function that will reset the game 
function resetGame(){
    location.reload();
}

//Function that will start flipping the tiles
function flipTile() {
    visibleTile = this;
    this.classList.remove('hidden');
    if (visibleTiles.length == 0) {
        visibleTiles[0] = visibleTile;
        return;
    } else {
        visibleTiles[1] = visibleTile;
        if (visibleTiles[0].id === visibleTiles[1].id) {
            visibleTiles[0] = visibleTile;
            return;
        } else {
            turnCounter++;
            $('h3').html('Turns: ' + turnCounter);
            tiles.forEach(function (tile) {
                tile.removeEventListener('click', flipTile);
            });
        }

        setTimeout(function () {
            if (visibleTiles[0].className === visibleTiles[1].className && visibleTiles[0].id != visibleTiles[1].id) {
                cardsMatched++;
                visibleTiles.forEach(function (tile) {
                    tile.classList.add('removed');
                });
                disableCards();
                if (cardsMatched == deck.length / 2) {
                    alert("You've won in only " + turnCounter + " turns! try again :)");
                    turnCounter = 0;
                    $('h3').html('Turns: ' + turnCounter);
                    resetGame();
                };

            } else {
                visibleTiles.forEach(function (tile) {
                    tile.classList.add('hidden');
                });
            };
            tiles.forEach(function (tile) {
                tile.addEventListener('click', flipTile);
            });
            visibleTiles = [];
        }, 750);
    }
}

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

//Function that acts when easy, medium and hard difficulty buttons are clicked
let clickedButton = function(){
    activeButton = this;
    if ($(this).hasClass('easybtn')){
        deck = ['mario', 'mario','luigi', 'luigi', 'leonardo', 'leonardo', 'robin', 'robin'];
        shuffle(deck);        
        createGrid();
        tiles=[...document.getElementsByClassName('tile')];
        startGame();

    } else if ($(this).hasClass('mediumbtn')){
        deck =  ['mario', 'mario','luigi', 'luigi', 'leonardo', 'leonardo', 'robin', 'robin', 'frogger', 'frogger', 'donkeykong', 'donkeykong'];
        shuffle(deck);        
        createGrid();
        tiles=[...document.getElementsByClassName('tile')];
        startGame();

    } else {
        deck = allCards;
        shuffle(deck);       
        createGrid();
        tiles=[...document.getElementsByClassName('tile')];
        startGame();
        
    }
}

//function that listens for which button is clicked
let checkButton = function (){
    buttons.forEach(function(button){
        button.addEventListener('click', clickedButton);
    });
}

checkButton();  