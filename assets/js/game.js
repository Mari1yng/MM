let allCards = ['mario.png', 'mario.png','luigi.png', 'luigi.png', 'leonardo.png', 'leonardo.png', 'robin.png', 'robin.png', 'frogger.png', 'frogger.png', 'dnkeykong.png', 'donkeykong.png', 'ghost.png', 'ghost.png', 'bombjack.png', 'bombjack.png'];
let visibleTiles = 0;
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
    }
};




