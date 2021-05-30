import Deck from './src/deck.js';

// const computerCardSlot = document.querySelector(".computer-card-slot");

let deck = new Deck();
deck.shuffle();
deck.deal(4);
deck.sort();

// computerCardSlot.appendChild(deck.cards[0].getHTML())
