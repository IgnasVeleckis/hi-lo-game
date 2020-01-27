var bank;
var bet;
var payout;



// payoutai nuo 3 iki K nes 2 ir T NIEKAD NEBUS pirma korta
// galbut sukurt atskira array payoutmas ir gaudyt id nuo 0 iki 12
// nereiktu situ if??????
function paysMore() {
    if (guessedCards[0].id === 1) {
        payout = cards[1].paysHigh; // priskirt objektams is kortu array nauja value       pays: 1.1,       ir daryt payout = cards[1].pays
    } else if (guessedCards[0].id === 2) {
        payout = cards[2].paysHigh;
    } else if (guessedCards[0].id === 3) {
        payout = cards[3].paysHigh;
    } else if (guessedCards[0].id === 4) {
        payout = cards[4].paysHigh;
    } else if (guessedCards[0].id === 5) {
        payout = cards[5].paysHigh;
    } else if (guessedCards[0].id === 6) {
        payout = cards[6].paysHigh;
    } else if (guessedCards[0].id === 7) {
        payout = cards[7].paysHigh;
    } else if (guessedCards[0].id === 8) {
        payout = cards[8].paysHigh;
    } else if (guessedCards[0].id === 9) {
        payout = cards[9].paysHigh;
    } else if (guessedCards[0].id === 10) {
        payout = cards[10].paysHigh;
    } else if (guessedCards[0].id === 11) {
        payout = cards[11].paysHigh;
    } else if (guessedCards[0].id === 0 || guessedCards[0].id === 12) {
        payout = cards[12].paysHigh;
        payout = cards[0].paysHigh;
    }
}


function paysLess() {

    if (guessedCards[0].id === 1) {
        payout = cards[1].paysLow; // priskirt objektams is kortu array nauja value       pays: 1.1,       ir daryt payout = cards[1].pays
    } else if (guessedCards[0].id === 2) {
        payout = cards[2].paysLow;
    } else if (guessedCards[0].id === 3) {
        payout = cards[3].paysLow;
    } else if (guessedCards[0].id === 4) {
        payout = cards[4].paysLow;
    } else if (guessedCards[0].id === 5) {
        payout = cards[5].paysLow;
    } else if (guessedCards[0].id === 6) {
        payout = cards[6].paysLow;
    } else if (guessedCards[0].id === 7) {
        payout = cards[7].paysLow;
    } else if (guessedCards[0].id === 8) {
        payout = cards[8].paysLow;
    } else if (guessedCards[0].id === 9) {
        payout = cards[9].paysLow;
    } else if (guessedCards[0].id === 10) {
        payout = cards[10].paysLow;
    } else if (guessedCards[0].id === 11) {
        payout = cards[11].paysLow;
    } else if (guessedCards[0].id === 0 || guessedCards[0].id === 12) {
        payout = cards[12].paysHigh;
        payout = cards[0].paysHigh;
    }
}
// kelia zemina bet


function betUp10() {
    if (bank > 0 && bet + 10 <= bank) {

        bet += 10;
        calcWin();
        document.querySelector('.bet-coins').innerHTML = bet;




    } else if (bet === bank) {
        bet += 0;
        alert('out of money');
    } else if (bank < bet) {
        bet = bank;
        document.querySelector('.bet-coins').innerHTML = bet;
    }



}

function betDown10() {
    if (bet > 0 && bet - 10 >= 0) {

        bet -= 10;
        calcWin();
        document.querySelector('.bet-coins').innerHTML = bet;

    } else if (bank === 0) {
        bet += 0;
        alert('out of money');
    } else if (bank < bet) {
        bet = bank;
        document.querySelector('.bet-coins').innerHTML = bet;
    }

}


// prideda default banka ir bet
function addCoins() {
    bet = 10;
    bank = 100;
    bankArr.push(bank);
    /* console.log(bankArr); */
    betArr.push(bet);
    /* console.log(betArr); */
    document.querySelector('.bank-coins').innerHTML = bank;
    document.querySelector('.bet-coins').innerHTML = bet;
    /* let toFixed = Number(bank).toFixed(2);
    document.querySelector('.bank-coins').innerHTML = toFixed;
    document.querySelector('.bet-coins').innerHTML = bet; */

}
addCoins();

function win() { // paleidziama jei higher arba lower funkcijos if'e laimejimas

    if (bank <= 0) {
        alert('insufficient funds');
    } else if (bank === 0) {
        alert('insufficient funds');
    } else {
        let won = bank - bet + bet * payout;
        let wonRounded = Math.floor(won);
        finTabMaxWin = Math.floor(bet * payout);
        document.querySelector('.bank-coins').innerHTML = wonRounded;
        bank = wonRounded; // nauja bank verte
        bankArr.push(bank);
        /* console.log(bankArr); */
        maxwinArr.push(finTabMaxWin);
        /* console.log(maxwinArr); */
        fintTabTimesWon++;
        wonAnimCard()
    }
}

function loss() { // paleidziama jei higher arba lower funkcijos if'e pralaimejimas, taspats kas win

    if (bank === 0) {
        alert('Out of money');
        finish_table()

    } else {
        bank -= bet;
        document.querySelector('.bank-coins').innerHTML = bank;
        lossAnimCard()
    }
}




function betHigherThanBank() {
    if (bet > bank) {
        let floor = bank / 10;

        let floored = Math.floor(floor);

        let back = floored * 10;

        let roundedBankLeftovers = bank - back;
        bet = bank - roundedBankLeftovers;
        document.querySelector('.bet-coins').innerHTML = bet;
    }
}