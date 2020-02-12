class Message {
    constructor(text, condition) {
        this.text = text;
        this.condition = condition; // winBank winBet lossBank tie insufficient funds ir tt ir per
        // if tikrint if(message1.condition === win){atitinkamas text ir color} ir pats bank paryskeja
    }
}

function wonAnimCard() {
    let messageWin = new Message("You win!", "winButton");
    let span = document.querySelector(".image");
    span.classList.remove("winOnLoss");
    span.classList.add("winOnWin");
    let p = document.querySelector(".text");
    p.innerHTML = messageWin.text;
    remove();
}

function lossAnimCard() {
    let messageWin = new Message("You loose!", "loss");
    let span = document.querySelector(".image");
    span.classList.remove("winOnWin");
    span.classList.add("winOnLoss");
    let p = document.querySelector(".text");
    p.innerHTML = messageWin.text;
    remove();
}

function tieAnimCard() {
    let messageWin = new Message("Tie!", "tie");
    let span = document.querySelector(".image");
    span.classList.remove("winOnTie");
    span.classList.add("winOnTie");
    let p = document.querySelector(".text");
    p.innerHTML = messageWin.text;
    remove();
}

function remove() {
    setTimeout(function() {
        let span = document.querySelector(".image");
        span.classList.remove("winOnWin");
        span.classList.remove("winOnLoss");
        span.classList.remove("winOnTie");
    }, 200);
}