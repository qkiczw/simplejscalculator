// Calculator script
console.log('Hello !!!');

let numBtns = document.querySelectorAll('.calc-btn-num');
let actionBtns = document.querySelectorAll('.calc-btn-action');
let sumBtn = document.querySelector('.calc-btn-sum');
let clearBtn = document.querySelector('.clear-btn');
const calcScreen = document.querySelector('.result');
let displayNum = '0';
let valusArray = [];

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

function makeOperation(e) {
    let pushedOperation = e.target.innerHTML;
    console.log(pushedOperation);
    if (pushedOperation === '+') {
        valusArray.push(displayNum);
        valusArray.push(pushedOperation);
        console.log(valusArray);
        displayNum = '0'
    }
    if (pushedOperation === '-') {
        valusArray.push(displayNum);
        valusArray.push(pushedOperation);
        console.log(valusArray);
        displayNum = '0'
    }
    if (pushedOperation === 'x') {
        valusArray.push(displayNum);
        valusArray.push('*');
        console.log(valusArray);
        displayNum = '0'
    }
    if (pushedOperation === ':') {
        valusArray.push(displayNum);
        valusArray.push('/');
        console.log(valusArray);
        displayNum = '0'
    }
}

function makeSum(e) {
    let pushedOperation = e.target.innerHTML;
    valusArray.push(displayNum);
    console.log(valusArray);
    valString = valusArray.join(" ");
    console.log(valString);
    calcScreen.innerHTML = eval(valString);
    valusArray = [];
}

function clearAll(e) {
    let pushedOperation = e.target.innerHTML;
    displayNum = '0';
    valusArray = [];
    calcScreen.innerHTML = displayNum;
}

numBtns.forEach( num => num.addEventListener('click', displayMessage));
actionBtns.forEach( action => action.addEventListener('click', makeOperation));
sumBtn.addEventListener('click', makeSum);
clearBtn.addEventListener('click', clearAll);
