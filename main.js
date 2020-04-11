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
    // checks for cards remaining in both hands
    // if (
    //   this.players[0].playersCards[0].length > 0 &&
    //   this.players[1].playersCards[0].length > 0
    // ) {
    this.cardsInPlay.push(this.players[0].playersCards[0].shift());
    this.cardsInPlay.push(this.players[1].playersCards[0].shift());
    console.log(
      `Player 1 played ${this.cardsInPlay[0].rank} of ${this.cardsInPlay[0].suit}`
    );
    console.log(
      `Player 2 played ${this.cardsInPlay[1].rank} of ${this.cardsInPlay[1].suit}`
    );
    this.compare();
  }
  // }

  compare() {
    if (this.cardsInPlay.length >= 2) {
      if (
        this.cardsInPlay[this.cardsInPlay.length - 2].value >
        this.cardsInPlay[this.cardsInPlay.length - 1].value
      ) {
        console.log("Player 1 won");
        this.players[0].playersCards[0].push(...this.cardsInPlay);
        this.cardsInPlay = [];
      } else if (
        this.cardsInPlay[this.cardsInPlay.length - 2].value <
        this.cardsInPlay[this.cardsInPlay.length - 1].value
      ) {
        console.log("Player 2 won");
        this.players[1].playersCards[0].push(...this.cardsInPlay);
        this.cardsInPlay = [];
        // this.playRound();
      } else {
        this.makeWar();
      }
    }
  }

  makeWar() {
    if (
      this.players[0].playersCards[0].length > 4 &&
      this.players[1].playersCards[0].length > 4
    ) {
      console.log("!!!WAR!!!");
      for (let i = 0; i < 4; i++) {
        this.cardsInPlay.push(this.players[0].playersCards[0].shift());
        this.cardsInPlay.push(this.players[1].playersCards[0].shift());
      }
      console.log(
        `player one played ${
          this.cardsInPlay[this.cardsInPlay.length - 2].rank
        } of ${this.cardsInPlay[this.cardsInPlay.length - 2].suit}`
      );
      console.log(
        `player two played ${
          this.cardsInPlay[this.cardsInPlay.length - 1].rank
        } of ${this.cardsInPlay[this.cardsInPlay.length - 1].suit}`
      );
      this.compare();
    } else {
      if (this.players[0].playersCards[0].length < 4) {
        console.log(`player 1 doesnt have enought cards, and loses`);
      } else if (this.players[1].playersCards[0].length < 4) {
        console.log(`player 2 doesnt have enought cards, and loses`);
      }
    }
    // } else {
    //   if (this.players[0].playersCards[0] > this.players[1].playersCards[0]) {
    //     console.log("player 1 wins!");
    //     this.players[0].playersCards[0] = [];
    //   } else {
    //     console.log("player 2 wins!");
    //   }
    // }
  }
  playGame() {
    game.makeBoard();
    game.dealCards();
    while (
      this.players[0].playersCards[0].length &&
      this.players[1].playersCards[0].length
    ) {
      game.playRound();
    }
    if (!this.players[0].playersCards[0].length) {
      console.log(`player 2 won the game!`);
    } else if (!this.players[1].playersCards[0].length) {
      console.log(`player 1 won the game! `);
    }
  }
}

const game = new Game();
const deck = new Deck();
// game.makeBoard();
// game.dealCards();
// game.playRound();
game.playGame();
