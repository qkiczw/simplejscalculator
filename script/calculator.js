// Calculator script
console.log('Hello !!!');

let numBtns = document.querySelectorAll('.calc-btn-num');
let actionBtns = document.querySelectorAll('.calc-btn-action');
let sumBtn = document.querySelector('.calc-btn-sum');
let clearBtn = document.querySelector('.clear-btn');
const calcScreen = document.querySelector('.result');
let displayNum = '0';
let actionArray = [];

calcScreen.innerHTML = displayNum;

function displayMessage(e) {
    let pushedNum = e.target.innerHTML;
    displayNum += pushedNum;
    if ( displayNum.charAt(0) === '0') {
        displayNum =  displayNum.slice(1);
        console.log(displayNum);    
    };
    calcScreen.innerHTML = displayNum;

    if(displayNum.split('').some(x => x === '.')){
        console.log('zawiera kropke');
        document.querySelector('.dot-btn').removeEventListener('click', displayMessage, false);    
    }else{
        document.querySelector('.dot-btn').addEventListener('click', displayMessage, false);    
    }  
    
}

function makeOperation(e) {
    let pushedOperation = e.target.innerHTML;
    console.log(pushedOperation);
    if (pushedOperation === '+') {
        actionArray.push(displayNum);
        actionArray.push(pushedOperation);
        console.log(actionArray);
        displayNum = '0'
    }
    if (pushedOperation === '-') {
        actionArray.push(displayNum);
        actionArray.push(pushedOperation);
        console.log(actionArray);
        displayNum = '0'
    }
    if (pushedOperation === 'x') {
        actionArray.push(displayNum);
        actionArray.push('*');
        console.log(actionArray);
        displayNum = '0'
    }
    if (pushedOperation === ':') {
        actionArray.push(displayNum);
        actionArray.push('/');
        console.log(actionArray);
        displayNum = '0'
    }
}

function makeSum(e) {
    let pushedOperation = e.target.innerHTML;
    actionArray.push(displayNum);
    console.log(actionArray);
    valString = actionArray.join(" ");
    console.log(valString);
    let actionResult = eval(valString);
    calcScreen.innerHTML = actionResult;
    actionArray = [actionResult.toString()];
    console.log(actionArray);
    displayNum = '';
}

function clearAll(e) {
    let pushedOperation = e.target.innerHTML;
    displayNum = '0';
    actionArray = [];
    calcScreen.innerHTML = displayNum;
}


numBtns.forEach( num => num.addEventListener('click', displayMessage));
actionBtns.forEach( action => action.addEventListener('click', makeOperation));
sumBtn.addEventListener('click', makeSum);
clearBtn.addEventListener('click', clearAll);
