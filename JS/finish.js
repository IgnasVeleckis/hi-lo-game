function finish_table() {
    highestMoneyHad();
    highestBet();
    maxwin();
    if (bank == 0 && bank - bet <= 0) {
        let table = document.querySelector('.finish_table');
        table.classList.remove('hidden');
        /* console.log(finTabStartMon + '  starting money');
        console.log(finTabMaxMon + '  maxx money had');
        console.log(finTabMaxBet + '  max bet');
        // time
        console.log(finTabGuess + '  times guessed');
        console.log(finTabMaxWin + '  max money won'); // reik padaryt if kad jei nelaimeta nei karto rodytu 0 o ne infinity
        console.log(fintTabTimesWon + '  times won');
        console.log(finTabPickHigh + '  times picked high');
        console.log(finTabPickLow + '  times picked low');
        console.log(finTabTimesGamble + '  times gambled');
        console.log(finTabGambleWinTimes + '  times win gamble');
        console.log(finTabGambleWinMoney + '  money won/lost playing gamble'); // padaryt kad rodytu lost jei skaicius neigiamas ir win jei teigiamas
 */
        document.querySelector('.finTabStartMon').innerHTML = finTabStartMon;
        document.querySelector('.finTabMaxMon').innerHTML = finTabMaxMon;
        document.querySelector('.finTabMaxBet').innerHTML = finTabMaxBet;
        document.querySelector('.finTabReshuffle').innerHTML = reshuffle; // time
        document.querySelector('.finTabGuess').innerHTML = finTabGuess;
        document.querySelector('.finTabMaxWin').innerHTML = finTabMaxWin;
        document.querySelector('.fintTabTimesWon').innerHTML = fintTabTimesWon;
        document.querySelector('.finTabPickHigh').innerHTML = finTabPickHigh;
        document.querySelector('.finTabPickLow').innerHTML = finTabPickLow;
        document.querySelector('.finTabTimesGamble').innerHTML = finTabTimesGamble;
        document.querySelector('.finTabGambleWinTimes').innerHTML = finTabGambleWinTimes;
        document.querySelector('.finTabGambleWinMoney').innerHTML = finTabGambleWinMoney;

    }
}