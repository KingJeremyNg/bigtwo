export default function deck() {
    class Card {
        constructor(self, suit, value) {
            self.suit = suit;
            self.value = value;
        }
    }

    // Cards of diamond
    d_2 = new Card("d", "2");
    d_3 = new Card("d", "3");
    d_4 = new Card("d", "4");
    d_5 = new Card("d", "5");
    d_6 = new Card("d", "6");
    d_7 = new Card("d", "7");
    d_8 = new Card("d", "8");
    d_9 = new Card("d", "9");
    d_10 = new Card("d", "10");
    d_j = new Card("d", "j");
    d_q = new Card("d", "q");
    d_k = new Card("d", "k");
    d_a = new Card("d", "a");

    // Cards of clubs
    c_2 = new Card("c", "2");
    c_3 = new Card("c", "3");
    c_4 = new Card("c", "4");
    c_5 = new Card("c", "5");
    c_6 = new Card("c", "6");
    c_7 = new Card("c", "7");
    c_8 = new Card("c", "8");
    c_9 = new Card("c", "9");
    c_10 = new Card("c", "10");
    c_j = new Card("c", "j");
    c_q = new Card("c", "q");
    c_k = new Card("c", "k");
    c_a = new Card("c", "a");

    // Cards of hearts
    h_2 = new Card("h", "2");
    h_3 = new Card("h", "3");
    h_4 = new Card("h", "4");
    h_5 = new Card("h", "5");
    h_6 = new Card("h", "6");
    h_7 = new Card("h", "7");
    h_8 = new Card("h", "8");
    h_9 = new Card("h", "9");
    h_10 = new Card("h", "10");
    h_j = new Card("h", "j");
    h_q = new Card("h", "q");
    h_k = new Card("h", "k");
    h_a = new Card("h", "a");

    // Cards of spades
    s_2 = new Card("s", "2");
    s_3 = new Card("s", "3");
    s_4 = new Card("s", "4");
    s_5 = new Card("s", "5");
    s_6 = new Card("s", "6");
    s_7 = new Card("s", "7");
    s_8 = new Card("s", "8");
    s_9 = new Card("s", "9");
    s_10 = new Card("s", "10");
    s_j = new Card("s", "j");
    s_q = new Card("s", "q");
    s_k = new Card("s", "k");
    s_a = new Card("s", "a");

    deck = [
        d_2, d_3, d_4, d_5, d_6, d_7, d_8, d_9, d_10, d_j, d_q, d_k, d_a,
        c_2, c_3, c_4, c_5, c_6, c_7, c_8, c_9, c_10, c_j, c_q, c_k, c_a,
        h_2, h_3, h_4, h_5, h_6, h_7, h_8, h_9, h_10, h_j, h_q, h_k, h_a,
        s_2, s_3, s_4, s_5, s_6, s_7, s_8, s_9, s_10, s_j, s_q, s_k, s_a,
    ]

    return deck;
}
