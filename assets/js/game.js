let allCards = ['mario', 'mario','luigi', 'luigi', 'leonardo', 'leonardo', 'robin', 'robin', 'frogger', 'frogger', 'donkeykong', 'donkeykong', 'ghost', 'ghost', 'bombjack', 'bombjack'];
let buttons = [...document.getElementsByTagName('button')];
let tiles;

let visibleTiles = [];
let visibleTile;
let activeButton;
let deck;
let turnCounter = 0;
let cardsMatched = 0;

// Shuffle all cards using Fisher-Yates shuffle algorithm and array.ptototype
Array.prototype.allCardsShuffle = function() {
    let newPosition;
    let tempVar;
    let i = this.length;

    while (-- i > 0) {
        newPosition = Math.floor(Math.random() * (i + 1));
        tempVar = this[newPosition];
        this[newPosition] = this[i];
        this[i] = tempVar
    } return this;
};

//Function that will create new grid
function createGrid (){
    let newGrid = '';
//making sure the grid is created from the available deck - after checkButton () ran
    for (i = 0; i < deck.length; i++){
    newGrid += '<div id="tile' + i + '"class="tile '+ deck[i] + ' hidden"></div>';
    }; 
    document.getElementById('board').innerHTML = newGrid;
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
        turnCounter++;
        $('h2').html('Turns: ' + turnCounter);
        tiles.forEach(function (tile) {
            tile.removeEventListener('click', flipTile);
        });
        if (visibleTiles[0].className === visibleTiles[1].className) {
            cardsMatched++;
            visibleTiles.forEach(function (tile) {
                tile.classList.add('removed');
            });

        } else {
            visibleTiles.forEach(function (tile) {
                tile.classList.add('hidden');
            });
        };
        tiles.forEach(function (tile) {
            tile.addEventListener('click', flipTile);
        });
        visibleTiles = [];
    }
}

function startGame(){
    tiles.forEach(function(tile){
        tile.addEventListener('click', flipTile);
    })
}

//Function that acts when easy, medium and hard difficulty buttons are clicked
let clickedButton = function(){
    activeButton = this;
    if ($(this).hasClass('easybtn')){
        deck = ['mario', 'mario','luigi', 'luigi', 'leonardo', 'leonardo', 'robin', 'robin'];
        deck.allCardsShuffle();
        createGrid ();
        tiles=[...document.getElementsByClassName('tile')];
        startGame();
    } else if ($(this).hasClass('mediumbtn')){
        deck =  ['mario', 'mario','luigi', 'luigi', 'leonardo', 'leonardo', 'robin', 'robin', 'frogger', 'frogger', 'donkeykong', 'donkeykong'];
        deck.allCardsShuffle();
        createGrid ();
        tiles=[...document.getElementsByClassName('tile')];

    } else {
        deck = allCards;
        deck.allCardsShuffle();
        createGrid ();
        tiles=[...document.getElementsByClassName('tile')];
  
    }
}

//function that listens for which button is clicked
let checkButton = function (){
    buttons.forEach(function(button){
        button.addEventListener('click', clickedButton);
    });
}

checkButton();  