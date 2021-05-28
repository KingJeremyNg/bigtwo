import deck from './deck.js';
import shuffle from './shuffle.js';

export default function deal() {
    let hands = {
        p1: [],
        p2: [],
        p3: [],
        p4: [],
    }

    let cards = deck();
    shuffle(cards);

    hands["p1"] = cards.splice(0, 13);
    hands["p2"] = cards.splice(0, 13);
    hands["p3"] = cards.splice(0, 13);
    hands["p4"] = cards.splice(0, 13);

    return hands;
}
