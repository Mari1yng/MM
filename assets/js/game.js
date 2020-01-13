let allCards = ['mario.png', 'mario.png','luigi.png', 'luigi.png', 'leonardo.png', 'leonardo.png', 'robin.png', 'robin.png', 'frogger.png', 'frogger.png', 'donkeykong.png', 'donkeykong.png', 'ghost.png', 'ghost.png', 'bombjack.png', 'bombjack.png'];
let buttons = [...document.getElementsByTagName('button')];

let visibleTiles = 0;
let activeButton;
let deck;

// Shuffle all cards using Fisher-Yates shuffle algorithm
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

let clickedButton = function(){
    activeButton = this;
    if ($(this).hasClass('easybtn')){
        deck = deck = ['mario.png', 'mario.png','luigi.png', 'luigi.png', 'leonardo.png', 'leonardo.png', 'robin.png', 'robin.png'];
        deck.allCardsShuffle();
    } else if ($(this).hasClass('mediumbtn')){
        deck =  ['mario.png', 'mario.png','luigi.png', 'luigi.png', 'leonardo.png', 'leonardo.png', 'robin.png', 'robin.png', 'frogger.png', 'frogger.png', 'donkeykong.png', 'donkeykong.png'];
        deck.allCardsShuffle();
    } else {
        deck = allCards;
        deck.allCardsShuffle();
    }
}

//Function that will create new grid
function createGrid (){
    let newGrid = '';
//making sure the grid is created from the available deck - after checkButton () ran
    for (i = 0; i < deck.lenght; i++){
    newGrid += '<div id="tile'+i+'" onclick="flipTile(this,\''+deck[i]+'\')"></div>';
    document.getElementById('board').innerHTML = newGrid;
    };    
}

let checkButton = function (){
    buttons.forEach(function(button){
        button.addEventListener('click', clickedButton);
    });
}

checkButton();  