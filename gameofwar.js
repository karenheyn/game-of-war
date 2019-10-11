let suit = ['Hearts','Diamonds','Clubs','Spades'];
let rank = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']; 
let value = [2,3,4,5,6,7,8,9,10,11,12,13,14];
let deck = [];
let player1 = [];
let player2 = [];

function makeDeck(){        //makes the deck
for (let i = 0; i < rank.length; i++){
    for (let j = 0; j < suit.length; j++){
        var card = {};
        card.suit = suit[j];
        card.rank = rank[i];
        card.value = value[i];
        deck.push(card); // pushes into array
    }
}
}

 function shuffle(cards){
    var i, j, temp
    for (i = cards.length - 1; i > 0; i--){
        j = Math.floor(Math.random() * (i+1));
        temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp; 
    }
    return cards;
}
function dealCards(){
    player1 = deck.slice(0,26);
    player2 = deck.slice(26,26);
}

function playGame(){
   while (player2.length > 0 || player1.length > 0){
   function compare(card1,card2) {
   board = []
   board.push(player1[i]);
   board.push(player2[i]);
   if (board[0] < board[1]){
       board.unshift()
   }

   

       
   }
   
}
}