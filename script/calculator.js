// Calculator script
console.log('Hello !!!');

let numBtns = document.querySelectorAll('.calc-btn-num');
let actionBtns = document.querySelectorAll('.calc-btn-action');
const calcScreen = document.querySelector('.result');
let displayNum = '0';

calcScreen.innerHTML = displayNum;

function displayMessage(e) {
    let pushedNum = e.target.innerHTML;
    displayNum += pushedNum;
    if ( displayNum.charAt(0) === '0') {
        displayNum =  displayNum.slice(1);
        console.log(displayNum);    
    };
    calcScreen.innerHTML = displayNum;
    
}

numBtns.forEach( num => num.addEventListener('click', displayMessage));
