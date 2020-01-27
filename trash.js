function betUp1() {


    if (bank > 0 && bet < bank) {
        if (timesWonInRow === 0) {
            bet += 1;
            calcWin();
            document.querySelector('.bet-coins').innerHTML = bet;
        } else {
            bet += 0;
        }
    } else if (bet === bank) {
        bet += 0;
    } else if (bank < bet) {

        bet = bank;
        document.querySelector('.bet-coins').innerHTML = bet;
    }
}

function betUp5() {
    if (bank > 0 && bet + 5 <= bank) {
        if (timesWonInRow === 0) {
            bet += 5;
            calcWin();
            document.querySelector('.bet-coins').innerHTML = bet;
        } else {
            bet += 0;
        }
    } else if (bet === bank) {
        bet += 0;
    } else if (bank < bet) {
        bet = bank;
        document.querySelector('.bet-coins').innerHTML = bet;
    }


}

function betUp10() {
    if (bank > 0 && bet + 10 <= bank) {
        if (timesWonInRow === 0) {
            bet += 10;
            calcWin();
            document.querySelector('.bet-coins').innerHTML = bet;
        } else {
            bet += 0;
        }
    } else if (bet === bank) {
        bet += 0;
    } else if (bank < bet) {
        bet = bank;
        document.querySelector('.bet-coins').innerHTML = bet;
    }



}




function betDown1() {
    if (bet > 0) {
        if (timesWonInRow === 0) {
            bet -= 1;
            calcWin();
            document.querySelector('.bet-coins').innerHTML = bet;
        } else {
            bet += 0;
        }
    } else if (bank === 0) {
        bet += 0;
    }

}

function betDown5() {
    if (bet > 0 && bet - 5 >= 0) {
        if (timesWonInRow === 0) {
            bet -= 5;
            calcWin();
            document.querySelector('.bet-coins').innerHTML = bet;
        } else {
            bet += 0;
        }
    } else if (bank === 0) {
        bet += 0;
    }

}

function betDown10() {
    if (bet > 0 && bet - 10 >= 0) {
        if (timesWonInRow === 0) {
            bet -= 10;
            calcWin();
            document.querySelector('.bet-coins').innerHTML = bet;
        } else {
            bet += 0;
        }
    } else if (bank === 0) {
        bet += 0;
    }

}




function win() { // paleidziama jei higher arba lower funkcijos if'e laimejimas

    // COMBO reik padaryt kad kai combo stafke eitu is laimejimo

    if (timesWonInRow < 4) {
        if (bank <= 0) {
            alert('insufficient funds') // alert jei baiges pinigai
        } else {
            let won = bank - bet + bet * payout;
            let wonRounded = (won);
            document.querySelector('.bank-coins').innerHTML = wonRounded;
            bank = wonRounded; // nauja bank verte
        }
    } else {
        if (bank === 0) {
            alert('insufficient funds') // alert jei baiges pinigai
        } else {
            let won = bank - bet + bet * payout;
            let wonRounded = (won);
            document.querySelector('.bank-coins').innerHTML = wonRounded;
            bank = wonRounded; // nauja bank verte
        }
        alert('you won 5 times in a row');

    }
    timesWonInRow++;
    if (timesWonInRow === 5) {
        timesWonInRow = 0;
    }
    console.log(timesWonInRow);



}



function loss() { // paleidziama jei higher arba lower funkcijos if'e pralaimejimas, taspats kas win


    timesWonInRow = 0;


    if (bank === 0) {
        alert('Out of money');
    } else {
        bank -= bet;
        document.querySelector('.bank-coins').innerHTML = bank;
    }
}


function betDown1() {
    if (bet > 0) {

        bet -= 1;
        calcWin();
        document.querySelector('.bet-coins').innerHTML = bet;

    } else if (bank === 0) {
        bet += 0;
    }

}

function betDown5() {
    if (bet > 0 && bet - 5 >= 0) {

        bet -= 5;
        calcWin();
        document.querySelector('.bet-coins').innerHTML = bet;

    } else if (bank === 0) {
        bet += 0;
    }

}


function betUp1() {


    if (bank > 0 && bet < bank) {

        bet += 1;
        calcWin();
        document.querySelector('.bet-coins').innerHTML = bet;

    } else if (bet === bank) {
        bet += 0;
    } else if (bank < bet) {

        bet = bank;
        document.querySelector('.bet-coins').innerHTML = bet;
    }
}

function betUp5() {
    if (bank > 0 && bet + 5 <= bank) {

        bet += 5;
        calcWin();
        document.querySelector('.bet-coins').innerHTML = bet;

    } else if (bet === bank) {
        bet += 0;
    } else if (bank < bet) {
        bet = bank;
        document.querySelector('.bet-coins').innerHTML = bet;
    }


}