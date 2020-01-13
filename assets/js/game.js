let allCards = ['mario', 'mario','luigi', 'luigi', 'leonardo', 'leonardo', 'robin', 'robin', 'frogger', 'frogger', 'donkeykong', 'donkeykong', 'ghost', 'ghost', 'bombjack', 'bombjack'];
let buttons = [...document.getElementsByTagName('button')];
let tiles;

let visibleTiles = 0;
let activeButton;
let deck;

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
    newGrid += '<div id="tile' + i + '" onclick="startGame()"class="tile '+ deck[i] + '"></div>';
    }; 
    document.getElementById('board').innerHTML = newGrid;
}

//Function that will start flipping the tiles
function flipTile(){
    
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
        deck = deck = ['mario', 'mario','luigi', 'luigi', 'leonardo', 'leonardo', 'robin', 'robin'];
        deck.allCardsShuffle();
        createGrid ();
        tiles=[...document.getElementsByClassName('tile')];
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