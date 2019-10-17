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
        this.cards = []
    }
    createCards() {
        for (let i = 0; i < this.suit.length; i++) {
            for (let j = 0; j < this.rank.length; j++) { //Blake proofread this code and gave feedback
                this.cards.push(new Card(this.suit[i], this.rank[j], this.value[j]));
            }
        }
    }
    shuffle() {
        let counter = this.cards.length, //Got this from a youtube video by Adam Coder
        temp, i;
    while (counter) {
        i = Math.floor(Math.random() * counter--); //i = a random number from 52-1)
        temp = this.cards[counter];
        this.cards[counter] = this.cards[i];
        this.cards[i] = temp;
    }
    return this.cards
}
                    

                }
            //     deal() {}

    class Players {
        constructor(name){
            this.name = name
            this.playersCards = []    
        }
    }

    class Game {
        constructor(){
        this.players = []
        this.cardsInPlay = []
        }
        board(){
            let deck = new Deck
            deck.createCards()
            deck.shuffle()   
            for (let i =0; i< 2; i++){
                let player = new Players(`player ${i + 1}`)
                this.players.push(player)

            }
        }
    }

