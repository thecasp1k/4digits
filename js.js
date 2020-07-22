let clog = console.log;

let numb;
function numberRandom () {
    return numb = Math.floor(1000 + Math.random() * (10000-1000)) + '';
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
    console.log(numbF);
    clog(numberF)


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
}