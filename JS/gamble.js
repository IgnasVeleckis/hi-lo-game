function gambleDisplayOff() {
    let display = document.querySelector(".xgamble");
    display.classList.add("display");
    display.classList.remove("xgamble");
    document.querySelector(".bank-coins").innerHTML = bank;

    for (let i = 0; i < 10; i++) {
        let card = document.querySelector(`#card-${i}`);
        card.classList.remove("true");
        card.classList.remove("false");
        card.classList.add("unknown");
    }
    const DomDiv = document.querySelector('.final_text_text');
    DomDiv.innerHTML = '';
}

function gambleDisplayOn() {
    let divideBank = bank % 10;
    if (divideBank != 0) {
        let display = document.querySelector(".display");
        display.classList.add("xgamble");
        display.classList.remove("display");
        gamble();
    } else {
        alert("you can gamble only if you have money that doesnt divide by 10, such as 17");
    }
}



function gamble() {
    finTabTimesGamble++;
    let floor = bank / 10;

    let floored = Math.floor(floor);

    let back = floored * 10;

    var roundedBankLeftovers = bank - back; // gaunama verte virs 10  kuri bus anudojama kortu zaidimui

    document.querySelector(".leftoversValueOne").innerHTML = roundedBankLeftovers;
    document.querySelector(".leftoversValue2").innerHTML = roundedBankLeftovers;
    let roundedBank = bank - roundedBankLeftovers;

    document.querySelector(".bank-coins").innerHTML = roundedBank;

    let guessCards = [];
    let guessCardsRed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    while (guessCards.length < roundedBankLeftovers) {
        let randomID = Math.floor(Math.random() * 9);
        if (guessCards.indexOf(randomID) === -1) {
            guessCards.push(randomID);
            const index = guessCardsRed.indexOf(randomID);

            if (index > -1) {
                guessCardsRed.splice(index, 1);
            }
        }
    }

    for (let i = 0; i < guessCards.length; i++) {
        let cardID = guessCards[i];
        let card = document.querySelector(`#card-${cardID}`);

        card.onclick = function() {

            for (let i = 0; i < guessCards.length; i++) {
                let cardID = guessCards[i];
                let card = document.querySelector(`#card-${cardID}`);
                card.classList.remove("unknown");
                card.classList.add("true");
                card.onclick = function() {
                    return false;
                }
            }
            for (let i = 0; i < guessCardsRed.length; i++) {
                let cardID = guessCardsRed[i];
                let card = document.querySelector(`#card-${cardID}`);
                card.classList.remove("unknown");
                card.classList.add("false");
                card.onclick = function() {
                    return false;
                }
            }

            const message = new Message('You win!', 'win')
            const DomDiv = document.querySelector('.final_text_text');
            DomDiv.innerHTML = message.text;
            finTabGambleWinTimes++;
            bank += 10 - roundedBankLeftovers;
            finTabGambleWinMoney += 10;
            document.querySelector(".bank-coins").innerHTML = bank;
            bankArr.push(bank);

            /* console.log(bankArr) */




            roundedBankLeftovers = 0;
            let divideBank = bank % 10;
            if (divideBank === 0) {
                let gambleBtnOff = document.querySelector(".gamble");
                gambleBtnOff.classList.remove("on");
            }
        };
    }

    for (let i = 0; i < guessCardsRed.length; i++) {
        let cardID = guessCardsRed[i];
        let card = document.querySelector(`#card-${cardID}`);
        /* card.classList.remove("unknown");
        card.classList.add("false"); */
        card.onclick = function() {
            for (let i = 0; i < guessCardsRed.length; i++) {
                let cardID = guessCardsRed[i];
                let card = document.querySelector(`#card-${cardID}`);
                card.classList.remove("unknown");
                card.classList.add("false");
                card.onclick = function() {
                    return false;
                }
            }
            for (let i = 0; i < guessCards.length; i++) {
                let cardID = guessCards[i];
                let card = document.querySelector(`#card-${cardID}`);
                card.classList.remove("unknown");
                card.classList.add("true");
                card.onclick = function() {
                    return false;
                }
            }


            const message = new Message('You loose!', 'loss')
            const DomDiv = document.querySelector('.final_text_text');
            DomDiv.innerHTML = message.text;
            bank -= roundedBankLeftovers;
            finTabGambleWinMoney -= roundedBankLeftovers;
            document.querySelector(".bank-coins").innerHTML = bank;


            finish_table();
            roundedBankLeftovers = 0;
            let divideBank = bank % 10;
            if (divideBank === 0) {
                let gambleBtnOff = document.querySelector(".gamble");
                gambleBtnOff.classList.remove("on");
            }
        };
    }


}