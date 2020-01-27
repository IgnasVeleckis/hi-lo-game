var guessedCards = []; // array dviem kortom displayint
var length = guessedCards.length;

function drawCard() {
    let a = Math.random() * 51;
    let randomID = Math.round(a);
    /* console.log(cards[randomID].drawn); */
    if (cards[randomID].drawn === false) {
        // if'as tikrina ar verte yra false(neistraukta korta)
        document.querySelector(".image").src = cards[randomID].src; // paima sugeneruoto id src ir imeta i doma
        guessedCards.unshift(cards[randomID]); // imeta korta i array kur dvi kortos
        document.querySelector(".prevImage").src = guessedCards[1].src; // permeta src is pirmos i antra korta
        cards[randomID].drawn = true; // uzdeda naujai kortai drawn: true;
    } else {
        // if'as jei korta buvo istraukta
        let i = 0;
        while (cards[randomID].drawn == true && i < 9999) {
            a = Math.random() * 51;
            randomID = Math.round(a);

            i++;
        }

        document.querySelector(".image").src = cards[randomID].src; // paima sugeneruoto id src ir imeta i doma
        guessedCards.unshift(cards[randomID]); // imeta korta i array kur dvi kortos
        document.querySelector(".prevImage").src = guessedCards[1].src; // permeta src is pirmos i antra korta
        cards[randomID].drawn = true; // uzdeda naujai kortai drawn: true;
    }
    /* console.log(cards[randomID].drawn);
    console.log(cards); */
    shuffle();
}

function shuffle() {
    let aaa = 0;
    for (let i = 0; i < 52; i++) {
        if (cards[i].drawn == true) {
            aaa++;

        }
        if (aaa >= 25) {
            alert('reshuffle');
            aaa = 0;
            reshuffle++;
            for (let b = 0; b < 52; b++) {
                cards[b].drawn = false;

            }

        }


    }
}


//apkarpo array kur displayina

function cutArr() {
    if (guessedCards.length < 2) {
        drawCard(); // jei array maziau nei 2 elementai traukia korta
    } else {
        guessedCards.pop(); // jei daugiau ismeta paskutine korta is array ir traukia nauja
        drawCard();
    }
}

// funkcijos kortos dydziui spet

function higher() {
    // aukstesne
    if (bank != 0 && bank - bet >= 0) {
        if (bet === 0) {
            alert("negalima lost su 0");
        } else {
            paysMore(); // gauna kortos payout'a
            cutArr(); // apkarpo array kuriam displayina kortas kad butu tik 2 visad
            highlightTable(); // highlight'ina korta lenteleje
            calcWin(); // paskaiciuoja laimejima
            finTabGuess++;
            finTabPickHigh++;
            let firstCard = guessedCards[0].id;
            let secondCard = guessedCards[1].id;
            let highestBetCount = document.querySelector('.bet-coins').innerHTML;
            betArr.push(highestBetCount);

            if (firstCard === secondCard) {
                // lygios jei display array elementu id vienodi
                tieAnimCard();

            } else if (firstCard > secondCard) {
                // laimejimas jei nauja korta didesne ir pralaimejimas jei ne
                win();

                if (bank % 10 != 0) {
                    let button = document.querySelector(".gamble");
                    button.classList.add("on");
                } else if (bank % 10 === 0) {
                    let button = document.querySelector(".gamble");
                    button.classList.remove("on");
                }
            } else {
                loss();

                finish_table();
            }
        }
    } else {
        alert("insufficient funds");
        betHigherThanBank();
    }
}

// taspoats kas higher tik atvirksciai

function lower() {
    if (bank != 0 && bank - bet >= 0) {
        if (bet === 0) {
            alert("negalima lost su 0");
            const message = new Message('Bet should be higher than 0 :)')
        } else {
            paysLess();
            cutArr();
            highlightTable();
            calcWin();
            finTabGuess++;
            finTabPickLow++;
            let firstCard = guessedCards[0].id;
            let secondCard = guessedCards[1].id;
            let highestBetCount = document.querySelector('.bet-coins').innerHTML;
            betArr.push(highestBetCount);

            if (firstCard === secondCard) {
                alert('lygios');
                tieAnimCard();
            } else if (firstCard < secondCard) {
                win();

                if (bank % 10 != 0) {
                    let button = document.querySelector(".gamble");
                    button.classList.add("on");
                } else if (bank % 10 === 0) {
                    let button = document.querySelector(".gamble");
                    button.classList.remove("on");
                }
            } else {
                loss();

                finish_table();
            }
        }
    } else {
        alert("insufficient funds");
        betHigherThanBank();
    }
}

function onload() {
    // funkcija imest pirma korta i slota

    let a = Math.random() * 51; // 51
    let randomID = Math.round(a); // ranodm nr 0 - 51

    let b = Math.random() * 10 + 1;
    let randomMinusAdd = Math.round(b); // random nr naudojamas kad nebutu 2 ir T pirmos kortas

    if (cards[randomID].id === 0) {
        // jei pirma korta 2 arba T prideda sukurta random sk kad pakeist 2 arba T
        randomID = +randomMinusAdd;
    } else if (cards[randomID].id === 12) {
        randomID = +randomMinusAdd;
    }
    document.querySelector(".image").src = cards[randomID].src; // prideda src kortos is array pagal random ID
    guessedCards.unshift(cards[randomID]); // prideda ta korta i tusicia array kur displayna kortas
    cards[randomID].drawn = true;
}
onload();

function calcWin() {
    let payHigh = guessedCards[0].paysHigh;
    let expectedWinHigh = Math.floor(bet * payHigh);
    let payLow = guessedCards[0].paysLow;
    let expectedWinLow = Math.floor(bet * payLow);
    document.querySelector(".winValueHi").innerHTML =
        "expected win: " +
        expectedWinHigh +
        " ( " +
        (Math.floor(bet * payHigh - bet)) +
        " added to bank ) ";
    document.querySelector(".winValueLo").innerHTML =
        "expected win: " +
        expectedWinLow +
        " ( " +
        (Math.floor(bet * payLow - bet)) +
        " added to bank ) ";

    if (guessedCards[0].paysHigh === 1 || guessedCards[0].paysLow === 1) {
        document.querySelector(".winValueHi").innerHTML =
            "expected win: " + expectedWinHigh + " ( " + " - " + " added to bank ) ";
        document.querySelector(".winValueLo").innerHTML =
            "expected win: " + expectedWinLow + " ( " + " - " + " added to bank ) ";
    }
}
calcWin();

function highlightTable() {
    let card = guessedCards[0].id;
    let lastCard = guessedCards[1].id;
    let row = document.querySelector(`.id-${card}`);
    let lastRow = document.querySelector(`.id-${lastCard}`);
    row.classList.add("highlight");
    lastRow.classList.remove("highlight");
}

function highlightFirst() {
    let card = guessedCards[0].id;
    let row = document.querySelector(`.id-${card}`);
    row.classList.add("highlight");
}

highlightFirst();