/* class Card {
    constructor(drawn, id, color, suit, paysHigh, paysLow, src) {
        this.drawn = drawn;
        this.id = id;
        this.color = color;
        this.suit = suit;
        this.paysHigh = paysHigh;
        this.paysLow = paysLow;
        this.src = src;
    }

    pushToDeck() {
        deck.push();
    }
} */

class Card {
    constructor(cardProperties) {
        this.cardProperties = {
            drawn: false,
            id: 0,
            color: "red",
            suit: "hearts",
            src: "cards/hearts/1ofH.jpg"
        };
    }
}

/* var deck = [];

const card1ofH = new Card(false, 0, 'red', 'hearts', 1, 1, 'cards/hearts/1ofH.jpg');
const card2ofH = new Card(false, 1, 'red', 'hearts', 1.1, 10.7, 'cards/hearts/2ofH.jpg');
const card3ofH = new Card(false, 2, 'red', 'hearts', 1.1, 5.3, 'cards/hearts/3ofH.jpg');
const card4ofH = new Card(false, 3, 'red', 'hearts', 1.1, 3.5, 'cards/hearts/4ofH.jpg');
const card5ofH = new Card(false, 4, 'red', 'hearts', 1.3, 2.6, 'cards/hearts/5ofH.jpg');
const card6ofH = new Card(false, 5, 'red', 'hearts', 1.5, 2.1, 'cards/hearts/6ofH.jpg');
const card7ofH = new Card(false, 6, 'red', 'hearts', 1.7, 1.7, 'cards/hearts/7ofH.jpg');
const card8ofH = new Card(false, 7, 'red', 'hearts', 2.1, 1.5, 'cards/hearts/8ofH.jpg');
const card9ofH = new Card(false, 8, 'red', 'hearts', 2.6, 1.3, 'cards/hearts/9ofH.jpg');
const card10ofH = new Card(false, 9, 'red', 'hearts', 3.5, 1.1, 'cards/hearts/10ofH.jpg');
const cardJofH = new Card(false, 10, 'red', 'hearts', 5.3, 1.1, 'cards/hearts/JofH.jpg');
const cardQofH = new Card(false, 11, 'red', 'hearts', 10.7, 1.1, 'cards/hearts/QofH.jpg');
const cardKofH = new Card(false, 12, 'red', 'hearts', 1, 1, 'cards/hearts/KofH.jpg');




const card1ofD = new Card(false, 0, 'red', 'diamonds', 1, 1, 'cards/diamonds/1ofD.jpg');
const card2ofD = new Card(false, 1, 'red', 'diamonds', 1.1, 10.7, 'cards/diamonds/2ofD.jpg');
const card3ofD = new Card(false, 2, 'red', 'diamonds', 1.1, 5.3, 'cards/diamonds/3ofD.jpg');
const card4ofD = new Card(false, 3, 'red', 'diamonds', 1.1, 3.5, 'cards/diamonds/4ofD.jpg');
const card5ofD = new Card(false, 4, 'red', 'diamonds', 1.3, 2.6, 'cards/diamonds/5ofD.jpg');
const card6ofD = new Card(false, 5, 'red', 'diamonds', 1.5, 2.1, 'cards/diamonds/6ofD.jpg');
const card7ofD = new Card(false, 6, 'red', 'diamonds', 1.7, 1.7, 'cards/diamonds/7ofD.jpg');
const card8ofD = new Card(false, 7, 'red', 'diamonds', 2.1, 1.5, 'cards/diamonds/8ofD.jpg');
const card9ofD = new Card(false, 8, 'red', 'diamonds', 2.6, 1.3, 'cards/diamonds/9ofD.jpg');
const card10ofD = new Card(false, 9, 'red', 'diamonds', 3.5, 1.1, 'cards/diamonds/10ofD.jpg');
const cardJofD = new Card(false, 10, 'red', 'diamonds', 5.3, 1.1, 'cards/diamonds/JofD.jpg');
const cardQofD = new Card(false, 11, 'red', 'diamonds', 10.7, 1.1, 'cards/diamonds/QofD.jpg');
const cardKofD = new Card(false, 12, 'red', 'diamonds', 1, 1, 'cards/diamonds/KofD.jpg');




const card1ofC = new Card(false, 0, 'red', 'clubs', 1, 1, 'cards/clubs/1ofC.jpg');
const card2ofC = new Card(false, 1, 'red', 'clubs', 1.1, 10.7, 'cards/clubs/2ofC.jpg');
const card3ofC = new Card(false, 2, 'red', 'clubs', 1.1, 5.3, 'cards/clubs/3ofC.jpg');
const card4ofC = new Card(false, 3, 'red', 'clubs', 1.1, 3.5, 'cards/clubs/4ofC.jpg');
const card5ofC = new Card(false, 4, 'red', 'clubs', 1.3, 2.6, 'cards/clubs/5ofC.jpg');
const card6ofC = new Card(false, 5, 'red', 'clubs', 1.5, 2.1, 'cards/clubs/6ofC.jpg');
const card7ofC = new Card(false, 6, 'red', 'clubs', 1.7, 1.7, 'cards/clubs/7ofC.jpg');
const card8ofC = new Card(false, 7, 'red', 'clubs', 2.1, 1.5, 'cards/clubs/8ofC.jpg');
const card9ofC = new Card(false, 8, 'red', 'clubs', 2.6, 1.3, 'cards/clubs/9ofC.jpg');
const card10ofC = new Card(false, 9, 'red', 'clubs', 3.5, 1.1, 'cards/clubs/10ofC.jpg');
const cardJofC = new Card(false, 10, 'red', 'clubs', 5.3, 1.1, 'cards/clubs/JofC.jpg');
const cardQofC = new Card(false, 11, 'red', 'clubs', 10.7, 1.1, 'cards/clubs/QofC.jpg');
const cardKofC = new Card(false, 12, 'red', 'clubs', 1, 1, 'cards/clubs/KofC.jpg');




const card1ofS = new Card(false, 0, 'red', 'spades', 1, 1, 'cards/spades/1ofS.jpg');
const card2ofS = new Card(false, 1, 'red', 'spades', 1.1, 10.7, 'cards/spades/2ofS.jpg');
const card3ofS = new Card(false, 2, 'red', 'spades', 1.1, 5.3, 'cards/spades/3ofS.jpg');
const card4ofS = new Card(false, 3, 'red', 'spades', 1.1, 3.5, 'cards/spades/4ofS.jpg');
const card5ofS = new Card(false, 4, 'red', 'spades', 1.3, 2.6, 'cards/spades/5ofS.jpg');
const card6ofS = new Card(false, 5, 'red', 'spades', 1.5, 2.1, 'cards/spades/6ofS.jpg');
const card7ofS = new Card(false, 6, 'red', 'spades', 1.7, 1.7, 'cards/spades/7ofS.jpg');
const card8ofS = new Card(false, 7, 'red', 'spades', 2.1, 1.5, 'cards/spades/8ofS.jpg');
const card9ofS = new Card(false, 8, 'red', 'spades', 2.6, 1.3, 'cards/spades/9ofS.jpg');
const card10ofS = new Card(false, 9, 'red', 'spades', 3.5, 1.1, 'cards/spades/10ofS.jpg');
const cardJofS = new Card(false, 10, 'red', 'spades', 5.3, 1.1, 'cards/spades/JofS.jpg');
const cardQofS = new Card(false, 11, 'red', 'spades', 10.7, 1.1, 'cards/spades/QofS.jpg');
const cardKofS = new Card(false, 12, 'red', 'spades', 1, 1, 'cards/spades/KofS.jpg');


card1ofS.pushToDeck();
card2ofS.pushToDeck();
card3ofS.pushToDeck();
card4ofS.pushToDeck();
card5ofS.pushToDeck();



console.log(deck); */