//Joe and I worked on this project together
let suit = ["Hearts", "Diamonds", "Clubs", "Spades"];
let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let player1 = []
let player2 = []
let board = []
class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}
class Deck {
    constructor() {
        this.length = 52;
        this.deck = [];
    }
    makeDeck() {
        for (let i = 0; i < suit.length; i++) {
            for (let j = 0; j < rank.length; j++) { //Blake proofread this code and give feedback
                this.deck.push(new Card(suit[i], rank[j], value[j]));
            }
        }
    }
    shuffle() {
        let counter = this.deck.length, //Got this from a youtube video by Adam Coder
            temp, i;
        while (counter) {
            i = Math.floor(Math.random() * counter--); //i = a random number from 52-1)
            temp = this.deck.counter;
            this.deck.counter = this.deck[i];
            this.deck[i] = temp;
        }
        return this.deck
    }
    deal() {
        let a, b;
        a = this.deck.slice(0, 26);
        b = this.deck.slice(26, 52); //splits deck and pushes to player1 & player 2
        player1.push(a);
        player2.push(b);
    }
    makeBoard() {
        let x, y;
        x = player1[0].shift();
        y = player2[0].shift(); //puts 2 cards into play
        board.push(x, y);
    }
    compareCards() {
        let j = board[0];
        let k = board[1];
        if (j.value > k.value) {
            board.shift(j) && board.shift(k);
            player1[0].push(j,k);
        }else if
            (j.value < k.value) {
                board.shift(j) && board.shift(k);
                player2[0].push(j,k);
        }else{
            console.log('war')
        }
        }
}

// class Game {
//     constructor(player1, player2) {
//         // this.player1 = player1;
//         // this.player2 = player2;
//         // this.board = board;
//     }
//     makeBoard(){
//         let x,y;
//         x = player1.slice(0,1);
//         y = player2.slice(0,1)
//         board.push(x,y);
//         // board.pop(player1);
//         // board.pop(player2);
//         // return board;
//     }

var wholeDeck = new Deck();
wholeDeck.makeDeck();
wholeDeck.shuffle();
wholeDeck.deal();
wholeDeck.makeBoard();

// let shuffledCards = new Deck();
// shuffledCards.shuffleDeck();








// Deck = {
//     //suits: ["Clubs", "Diamonds", "Hearts", "Spades"],
//     deck: [],
//     shuffledDeck: [],
//     BuildDeck: function(){
//         for(var suit = 0; suit < this.suits.length; suit++){
//             for(var card = 0; card < this.cards.length; card++){
//                 this.deck.push([this.cards[card], this.suits[suit]]);
//             }
//         }
//     }
// }
// Deck.buildDeck
// let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
// let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// class Card {
//  constructor(rank, value) {
//      this.rank = rank;
//      this.value = value;
//  }
// }
// class Deck {
//  constructor() {
//      this.deck = []
//          // this.length = 52
//  }
//  makeDeck() {
//      for (let i = 0; j =; i < 13; i++) {
//         //  for (let j = 0; j < 4; j++) {
//           //    this.suit = suit[i];
//           //    this.rank = rank[j];    // class Deck does not have these attributes (these 3 lines are not needed)
//           //    this.value = value[j];
//              this.deck.push(new Card(rank[i] , value[j])); // 'this.' not needed (just passing arguments to a new Card instance)
//          }
//      }
//  }
// // }
// var deck = new Deck()
// deck.makeDeck() // need to invoke (aka call) the makeDeck method on your deck array
// deck.deck //this will display the value of your deck array (within your 'deck' instance of the Deck class) in the browser console (MAKE SURE you click the gray arrow to expand the array to view all your cards)

// let suit = ['Hearts','Diamonds','Clubs','Spades'];
// let rank = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']; 
// let value = [2,3,4,5,6,7,8,9,10,11,12,13,14];

// class Card {
//     constructor (suit, rank, value){
//         this.suit = suit;
//         this.rank = rank;
//         this.value = value;
//     }
// }

// class Deck {
//     constructor () {
//         this.deck = []
//         // this.length = 52
//     }
//     makeDeck(){
//         for (let i = 0; i < suit.length; i++) {
//             for (let j = 0; j < rank.length; j++) { 
//                 this.suit = suit[i];
//                 this.rank = rank[j];
//                 this.value = value[j];
//                 this.deck.push(new Deck(this.rank[j],this.suit[i],this.value[j]));
//             }
//         }
//         return this.deck
//     }
// }
// var deck = new Deck(); 

// let cards = new Deck(suit,rank,value);
// cards.makeDeck

// let deck = [];
// let player1 = [];
// let player2 = [];

// function makeDeck(){        //makes the deck
// for (let i = 0; i < rank.length; i++){
//     for (let j = 0; j < suit.length; j++){
//         var card = {};
//         card.suit = suit[j];
//         card.rank = rank[i];
//         card.value = value[i];
//         deck.push(card); // pushes into array
//     }
// }
// }

//  function shuffle(cards){
//     var i, j, temp
//     for (i = cards.length - 1; i > 0; i--){
//         j = Math.floor(Math.random() * (i+1));
//         temp = cards[i];
//         cards[i] = cards[j];
//         cards[j] = temp; 
//     }
//     return cards;
// }
// function dealCards(){
//     player1 = deck.slice(0,26);
//     player2 = deck.slice(26,26);
// }

// function playGame(){
//    while (player2.length > 0 || player1.length > 0){
//    function compare(card1,card2) {
//    board = []
//    board.push(player1[i]);
//    board.push(player2[i]);
//    if (board[0] < board[1]){
//        board.unshift()
//    }