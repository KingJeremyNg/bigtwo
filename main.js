import Deck from './src/deck.js';

const SUITS = ["♦", "♣", "♥", "♠"];
const VALUES = ["3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2"];
// const computerCardSlot = document.querySelector(".computer-card-slot");

let deck = new Deck();
deck.shuffle();
console.log(deck.cards);
deck.deal(4);
console.log(deck.players);

// computerCardSlot.appendChild(deck.cards[0].getHTML())

// function compareCard(a, b) {
//     // Check face value first
//     let v1 = VALUES.indexOf(a.value);
//     let v2 = VALUES.indexOf(b.value);
//     if (v1 < v2) return -1;
//     if (v1 > v2) return 1;
//     // If face values are equal then check suits
//     let s1 = SUITS.indexOf(a.suit);
//     let s2 = SUITS.indexOf(b.suit);
//     if (s1 < s2) return -1;
//     if (s1 > s2) return 1;
// }
