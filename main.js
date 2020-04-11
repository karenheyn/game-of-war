class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.suit = ["Hearts", "Diamonds", "Clubs", "Spades"];
    this.rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    this.value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    this.cards = [];
  }
  createCards() {
    for (let i = 0; i < this.suit.length; i++) {
      for (let j = 0; j < this.rank.length; j++) {
        this.cards.push(new Card(this.suit[i], this.rank[j], this.value[j]));
      }
    }
  }
  shuffle() {
    let counter = this.cards.length;
    let temp, i;
    while (counter) {
      i = Math.floor(Math.random() * counter--); //i = a random number from 52-1)
      temp = this.cards[counter];
      this.cards[counter] = this.cards[i];
      this.cards[i] = temp;
    }
    return this.cards;
  }
}

class Players {
  constructor(name) {
    this.name = name;
    this.playersCards = [];
  }
}

class Game {
  constructor() {
    this.players = [];
    this.cardsInPlay = [];
    this.deck = [];
  }
  makeBoard() {
    deck.createCards();
    deck.shuffle();
    for (let i = 0; i < 2; i++) {
      //creates players
      let player = new Players(`player ${i + 1}`);
      this.players.push(player);
    }
    this.deck.push(deck.cards);
  }
  dealCards() {
    let a, b;
    a = this.deck[0].slice(0, 26);
    b = this.deck[0].slice(26, 52); //splits deck and pushes to player1 & player 2
    this.players[0].playersCards.push(a);
    this.players[1].playersCards.push(b);
    console.log("both players have 26 cards");
    console.log(this.players);
  }
  playRound() {
    // while (
    //   this.players[0].playersCards.length &&
    //   this.players[1].playersCards.length
    // ) {
    // checks for cards remaining in both hands
    this.cardsInPlay.push(this.players[0].playersCards[0].pop());
    this.cardsInPlay.push(this.players[1].playersCards[0].pop());
    console.log(this.players[0]);
    console.log(this.cardsInPlay);
  }
  // console.log(this.players);
  // console.log(this.players[0]);
}
// const card = new Card();
// const deck = new Deck();
// const players = new Players();
// const game = new Game();
// console.log(deck);
const game = new Game();
const deck = new Deck();
game.makeBoard();
game.dealCards();
game.playRound();
