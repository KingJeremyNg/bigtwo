import deal from './src/deal.js';

const values = "3456789tjqka2";
const suits = "dchs";

let hands = deal();
let p1 = hands["p1"];
let p2 = hands["p2"];
let p3 = hands["p3"];
let p4 = hands["p4"];

function compareCard(a, b) {
    let v1 = values.indexOf(a.value);
    let v2 = values.indexOf(b.value);
    let s1 = suits.indexOf(a.suit);
    let s2 = suits.indexOf(b.suit);
    // Check face value first
    if (v1 < v2) return -1;
    if (v1 > v2) return 1;
    // If face values are equal then check suits
    if (s1 < s2) return -1;
    if (s1 > s2) return 1;
}

p1.sort(compareCard);
p2.sort(compareCard);
p3.sort(compareCard);
p4.sort(compareCard);

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
