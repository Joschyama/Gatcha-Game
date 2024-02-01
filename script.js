let test = document.getElementById('text');
let commontext = document.getElementById('countercommon');
let uncommontext = document.getElementById('counteruncommon');
let raretext = document.getElementById('counterrare');
let epictext = document.getElementById('counterepic');
let legendarytext = document.getElementById('counterlegendary');
let randnum;
let countercommonnum = 0;
let counteruncommonnum = 0;
let counterrarenum = 0;
let counterepicnum = 0;
let counterlegendarynum = 0;
function Rollbut() {
    randnum = Math.floor(Math.random()*100)
    checkforprize();
}
function checkforprize() {
    if (randnum == 50) {
        counterlegendarynum++;
        counterlegendary.innerHTML = "Legendary: "+ counterlegendarynum;
    }
    else if (randnum == 1 || randnum == 11 || randnum == 21 || randnum == 31 || randnum == 41 || randnum == 51 || randnum == 61 || randnum == 71 || randnum == 81 || randnum == 91 || randnum == 100) {
        counterepicnum++;
        counterepic.innerHTML = "Epic: "+ counterepicnum;
    }
    else if (randnum == 5 || randnum == 10 || randnum == 15 || randnum == 20 || randnum == 25 || randnum == 30 || randnum == 35 || randnum == 40 || randnum == 45 || randnum == 49 || randnum == 55 || randnum == 60 || randnum == 65 || randnum == 70 || randnum == 75 || randnum == 80 || randnum == 85 || randnum == 90 || randnum == 95 || randnum == 99) {
        counterrarenum++;
        counterrare.innerHTML = "Rare: "+ counterrarenum;
    }
    else if (randnum == 3 || randnum == 6 ||  randnum == 9 || randnum == 12 || randnum == 16 || randnum == 18 || randnum == 22 || randnum == 24 || randnum == 27 || randnum == 32 || randnum == 33 || randnum == 36 || randnum == 39 || randnum == 42 || randnum == 46 || randnum == 48 || randnum == 52 || randnum == 54 || randnum == 57 || randnum == 62 || randnum == 63 || randnum == 66 || randnum == 69 || randnum == 72 || randnum == 76 || randnum == 78 || randnum == 82 || randnum == 84 || randnum == 87 || randnum == 88 || randnum == 93 || randnum == 96 || randnum == 97){
        counteruncommonnum++;
        counteruncommon.innerHTML = "Uncommon: " + counteruncommonnum;
    }
    else {
        countercommonnum++;
        countercommon.innerHTML = "Common: " + countercommonnum;
    }
}
