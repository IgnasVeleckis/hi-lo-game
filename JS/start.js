function startGame() {
    let remove = document.querySelector('.xstart-money');
    remove.parentNode.removeChild(remove);

}
var firstAdd = 0;
var node100;
var node500;
var node1000;
var node2000;

function add100() {
    if (firstAdd === 0) {
        node100 = document.createElement('button');
        let textNode = document.createTextNode('START');
        node100.appendChild(textNode);
        let start = document.querySelector('.start-game');
        start.appendChild(node100);
    } else {
        node100 = document.createElement('button');
        let textNode = document.createTextNode('START');
        node100.appendChild(textNode);
        let start = document.querySelector('.start-game');
        start.appendChild(node100);
        start.removeChild(node100);
    }
    node100.onclick = function() {
        let remove = document.querySelector('.xstart-money');
        remove.parentNode.removeChild(remove);
    }
    bank = 100;
    finTabStartMon = 100;
    bankArr.push(bank);
    bankArr.shift();


    document.querySelector('.bank-coins').innerHTML = bank;
    document.querySelector('.choose500').classList.remove('choosen');
    document.querySelector('.choose1000').classList.remove('choosen');
    document.querySelector('.choose2000').classList.remove('choosen');
    document.querySelector('.choose100').classList.add('choosen');
    firstAdd++;
}

function add500() {
    if (firstAdd === 0) {
        node500 = document.createElement('button');
        let textNode = document.createTextNode('START');
        node500.appendChild(textNode);
        let start = document.querySelector('.start-game');
        start.appendChild(node500);
    } else {
        node500 = document.createElement('button');
        let textNode = document.createTextNode('START');
        node500.appendChild(textNode);
        let start = document.querySelector('.start-game');
        start.appendChild(node500);
        start.removeChild(node500);
    }
    node500.onclick = function() {
        let remove = document.querySelector('.xstart-money');
        remove.parentNode.removeChild(remove);
    }
    bank = 500;
    finTabStartMon = 500;
    bankArr.push(bank);
    bankArr.shift();

    document.querySelector('.bank-coins').innerHTML = bank;
    document.querySelector('.choose100').classList.remove('choosen');
    document.querySelector('.choose1000').classList.remove('choosen');
    document.querySelector('.choose2000').classList.remove('choosen');
    document.querySelector('.choose500').classList.add('choosen');
    firstAdd++;
}

function add1000() {
    if (firstAdd === 0) {
        node1000 = document.createElement('button');
        let textNode = document.createTextNode('START');
        node1000.appendChild(textNode);
        let start = document.querySelector('.start-game');
        start.appendChild(node1000);
    } else {
        node1000 = document.createElement('button');
        let textNode = document.createTextNode('START');
        node1000.appendChild(textNode);
        let start = document.querySelector('.start-game');
        start.appendChild(node1000);
        start.removeChild(node1000);
    }
    node1000.onclick = function() {
        let remove = document.querySelector('.xstart-money');
        remove.parentNode.removeChild(remove);
    }
    bank = 1000;
    finTabStartMon = 1000;
    bankArr.push(bank);
    bankArr.shift();

    document.querySelector('.bank-coins').innerHTML = bank;
    document.querySelector('.choose500').classList.remove('choosen');
    document.querySelector('.choose100').classList.remove('choosen');
    document.querySelector('.choose2000').classList.remove('choosen');
    document.querySelector('.choose1000').classList.add('choosen');
    firstAdd++;
}

function add2000() {
    if (firstAdd === 0) {
        node2000 = document.createElement('button');
        let textNode = document.createTextNode('START');
        node2000.appendChild(textNode);
        let start = document.querySelector('.start-game');
        start.appendChild(node2000);
    } else {
        node2000 = document.createElement('button');
        let textNode = document.createTextNode('START');
        node2000.appendChild(textNode);
        let start = document.querySelector('.start-game');
        start.appendChild(node2000);
        start.removeChild(node2000);
    }
    node2000.onclick = function() {
        let remove = document.querySelector('.xstart-money');
        remove.parentNode.removeChild(remove);
    }
    bank = 2000;
    finTabStartMon = 2000;
    bankArr.push(bank);
    bankArr.shift();
    document.querySelector('.bank-coins').innerHTML = bank;
    document.querySelector('.choose500').classList.remove('choosen');
    document.querySelector('.choose1000').classList.remove('choosen');
    document.querySelector('.choose100').classList.remove('choosen');
    document.querySelector('.choose2000').classList.add('choosen');
    firstAdd++;
}