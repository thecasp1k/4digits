let numb;
(
    function () {
        return numb = Math.floor(1000 + Math.random() * (9999+1-1000));
    }
);

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
    console.log(numb);











    gebcl('tableGame').children[0].appendChild(document.createElement('tr')).appendChild(document.createElement('td')).innerText = number;
}