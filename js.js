let clog = console.log;

let numb = '';
function numberRandom () {
    numb += Math.floor(Math.random()*10);
    let i = 0;
    let extraNumb = Math.floor(Math.random()*10);
    while ( i < 4) {
        if (extraNumb == numb[i]) {
            extraNumb = Math.floor(Math.random()*10);
            i = 0;
            continue;
        }
        else if (extraNumb != numb[i] && i+1 == numb.length && i != 3) {
            numb += extraNumb;
            if(numb.length == 4) {
                break;
            }
            i = 0;
            continue;
        } else {
            i++;
        }
    }
    clog(numb)
}
window.onload = numberRandom();

function gebi (id) {  return document.getElementById(id)};
function gebcl (className) { return document.getElementsByClassName(className)[0]};

gebi('btn').onclick = () => {
    if ( gebi('text').value != '' ) {
        gameFunction(gebi('text').value);
    } else {
        alert ('Ввведите число в поле для ввода.');
    }
};

function gameFunction (number) {
    gebcl('attempt').innerHTML++;
    let numbF = numb.split('');
    let numberF = number.split('');
    let numberHide = ["*","*","*","*"];

    for( let key in numberF ) {
        for ( let key1 in numbF ) {
            if(numberF[key] == numbF[key1] && key == key1) {
                numberHide[key] = 'B';
                gebcl('number').innerText[key] = numberF[key];
                continue;
            } else if (numberF[key] == numbF[key1] && key != key1) {
                numberHide[key] = 'C';
                continue;
            }
        }
    }

    gebcl('tableGame').children[0].appendChild(document.createElement('tr')).appendChild(document.createElement('td')).innerText = number;
    gebcl('tableGame').children[0].lastChild.appendChild(document.createElement('td')).innerText = numberHide.join('');
    if(numberHide == 'BBBB'){
        prompt('WIN!')
    }
}