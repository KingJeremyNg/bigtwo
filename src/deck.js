const SUITS = ["♦", "♣", "♥", "♠"];
const VALUES = ["3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2"];

export default class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards;
        this.players = {};
    }

    get numCards() {
        return this.cards.length;
    }

    shuffle() {
        let currentIndex = this.numCards,
            temporaryValue,
            randomIndex;
        for (let i = this.numCards - 1; i > 0; i--) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue;
        }
    }

    deal(numPlayers) {
        for (let i = 0; i < numPlayers; i++) {
            let handSize = (this.numCards / numPlayers);
            this.player[i] = this.cards.slice(i * handSize, (i + 1) * handSize);
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    get color() {
        return this.suit === "♦" || this.suit === "♥" ? "red" : "black";
    }

    getHTML() {
        const cardDiv = document.createElement('div');
        cardDiv.innerText = this.suit;
        cardDiv.classList.add("card", this.color);
        cardDiv.dataset.value = this.value;
        return cardDiv;
    }
}

function newDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value);
        })
    })
}
