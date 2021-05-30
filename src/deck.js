const SUITS = ["♦", "♣", "♥", "♠"];
const VALUES = ["3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2"];

export default class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards;
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

    sort() {
        this.cards.sort(compareCard);
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

function compareCard(a, b) {
    // Check face value first
    let v1 = VALUES.indexOf(a.value);
    let v2 = VALUES.indexOf(b.value);
    if (v1 < v2) return -1;
    if (v1 > v2) return 1;
    // If face values are equal then check suits
    let s1 = SUITS.indexOf(a.suit);
    let s2 = SUITS.indexOf(b.suit);
    if (s1 < s2) return -1;
    if (s1 > s2) return 1;
}
