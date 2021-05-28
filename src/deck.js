export default function deck() {
    class Card {
        constructor(suit, value) {
            this.suit = suit;
            this.value = value;
        }
    }

    // Cards of diamond
    let d_2 = new Card("d", "2");
    let d_3 = new Card("d", "3");
    let d_4 = new Card("d", "4");
    let d_5 = new Card("d", "5");
    let d_6 = new Card("d", "6");
    let d_7 = new Card("d", "7");
    let d_8 = new Card("d", "8");
    let d_9 = new Card("d", "9");
    let d_10 = new Card("d", "10");
    let d_j = new Card("d", "j");
    let d_q = new Card("d", "q");
    let d_k = new Card("d", "k");
    let d_a = new Card("d", "a");

    // Cards of clubs
    let c_2 = new Card("c", "2");
    let c_3 = new Card("c", "3");
    let c_4 = new Card("c", "4");
    let c_5 = new Card("c", "5");
    let c_6 = new Card("c", "6");
    let c_7 = new Card("c", "7");
    let c_8 = new Card("c", "8");
    let c_9 = new Card("c", "9");
    let c_10 = new Card("c", "10");
    let c_j = new Card("c", "j");
    let c_q = new Card("c", "q");
    let c_k = new Card("c", "k");
    let c_a = new Card("c", "a");

    // Cards of hearts
    let h_2 = new Card("h", "2");
    let h_3 = new Card("h", "3");
    let h_4 = new Card("h", "4");
    let h_5 = new Card("h", "5");
    let h_6 = new Card("h", "6");
    let h_7 = new Card("h", "7");
    let h_8 = new Card("h", "8");
    let h_9 = new Card("h", "9");
    let h_10 = new Card("h", "10");
    let h_j = new Card("h", "j");
    let h_q = new Card("h", "q");
    let h_k = new Card("h", "k");
    let h_a = new Card("h", "a");

    // Cards of spades
    let s_2 = new Card("s", "2");
    let s_3 = new Card("s", "3");
    let s_4 = new Card("s", "4");
    let s_5 = new Card("s", "5");
    let s_6 = new Card("s", "6");
    let s_7 = new Card("s", "7");
    let s_8 = new Card("s", "8");
    let s_9 = new Card("s", "9");
    let s_10 = new Card("s", "10");
    let s_j = new Card("s", "j");
    let s_q = new Card("s", "q");
    let s_k = new Card("s", "k");
    let s_a = new Card("s", "a");

    deck = [
        d_2, d_3, d_4, d_5, d_6, d_7, d_8, d_9, d_10, d_j, d_q, d_k, d_a,
        c_2, c_3, c_4, c_5, c_6, c_7, c_8, c_9, c_10, c_j, c_q, c_k, c_a,
        h_2, h_3, h_4, h_5, h_6, h_7, h_8, h_9, h_10, h_j, h_q, h_k, h_a,
        s_2, s_3, s_4, s_5, s_6, s_7, s_8, s_9, s_10, s_j, s_q, s_k, s_a,
    ]

    return deck;
}
