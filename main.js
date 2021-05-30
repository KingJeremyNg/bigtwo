import Deck from './src/deck.js';

// Player 1 html elements
const p1_element = document.getElementById("p1");
const p1_s1 = document.getElementById("p1-s1");
const p1_s2 = document.getElementById("p1-s2");
const p1_s3 = document.getElementById("p1-s3");
const p1_s4 = document.getElementById("p1-s4");
const p1_s5 = document.getElementById("p1-s5");

// Player 2 html elements
const p2_element = document.getElementById("p2");
const p2_s1 = document.getElementById("p2-s1");
const p2_s2 = document.getElementById("p2-s2");
const p2_s3 = document.getElementById("p2-s3");
const p2_s4 = document.getElementById("p2-s4");
const p2_s5 = document.getElementById("p2-s5");

// Player 3 html elements
const p3_element = document.getElementById("p3");
const p3_s1 = document.getElementById("p3-s1");
const p3_s2 = document.getElementById("p3-s2");
const p3_s3 = document.getElementById("p3-s3");
const p3_s4 = document.getElementById("p3-s4");
const p3_s5 = document.getElementById("p3-s5");

// Player 4 html elements
const p4_element = document.getElementById("p4");
const p4_s1 = document.getElementById("p4-s1");
const p4_s2 = document.getElementById("p4-s2");
const p4_s3 = document.getElementById("p4-s3");
const p4_s4 = document.getElementById("p4-s4");
const p4_s5 = document.getElementById("p4-s5");

const text = document.getElementById("text");

let p1_deck, p2_deck, p3_deck, p4_deck;

startGame();
function startGame() {
    let deck = new Deck();
    deck.shuffle();
    p1_deck = new Deck(deck.cards.slice(0, 13));
    p2_deck = new Deck(deck.cards.slice(13, 26));
    p3_deck = new Deck(deck.cards.slice(26, 39));
    p4_deck = new Deck(deck.cards.slice(39, 52));
    p1_deck.sort();
    p2_deck.sort();
    p3_deck.sort();
    p4_deck.sort();
    console.log(p1_deck, p2_deck, p3_deck, p4_deck);
    clear();
}

function clear() {
    p1_s1.innerHTML = "";
    p1_s2.innerHTML = "";
    p1_s3.innerHTML = "";
    p1_s4.innerHTML = "";
    p1_s5.innerHTML = "";
    p2_s1.innerHTML = "";
    p2_s2.innerHTML = "";
    p2_s3.innerHTML = "";
    p2_s4.innerHTML = "";
    p2_s5.innerHTML = "";
    p3_s1.innerHTML = "";
    p3_s2.innerHTML = "";
    p3_s3.innerHTML = "";
    p3_s4.innerHTML = "";
    p3_s5.innerHTML = "";
    p4_s1.innerHTML = "";
    p4_s2.innerHTML = "";
    p4_s3.innerHTML = "";
    p4_s4.innerHTML = "";
    p4_s5.innerHTML = "";
    text.innerHTML = "";

    // Update card count
    p1.innerHTML = p1_deck.numCards;
    p2.innerHTML = p2_deck.numCards;
    p3.innerHTML = p3_deck.numCards;
    p4.innerHTML = p4_deck.numCards;
}
