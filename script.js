const display = document.getElementById('display');

let totalSoFar = 0;
let lastOperation = '';

const addNumber = (num) => {
    if (num === '.') {
        if (display.innerHTML.indexOf('.') >= 0) {
            return;
        }
        if( display.innerHTML === '0' ) {
            display.innerHTML = '0.';
            return;
        }
    }
    if (display.innerHTML === '0') {
        display.innerHTML = num;
        return;
    }

    display.innerHTML += num;
}

const addOperation = (operation) => {
    if(lastOperation !== ''){
        equal();
    }
    if (display.innerHTML === '0' && lastOperation === '') {
        lastOperation = operation;
        return;
    }

    lastOperation = operation;
    totalSoFar = parseFloat(display.innerHTML);
    display.innerHTML = '0';
}

const equal = () => {
    if (display.innerHTML === '0' && lastOperation === '') {
        return;
    }

    switch(lastOperation){
        case '+':
            totalSoFar += parseFloat(display.innerHTML);
            break;
        case '-':
            totalSoFar -= parseFloat(display.innerHTML);
            break;
        case '*':
            totalSoFar *= parseFloat(display.innerHTML);
            break;
        case '/':
            totalSoFar /= parseFloat(display.innerHTML);
            break;
        default:
            totalSoFar = parseFloat(display.innerHTML);
    }

    display.innerHTML = totalSoFar;
    lastOperation = '';
}

const reset = () => {
    display.innerHTML = 0;
    totalSoFar = 0;
    operationFlag = false;
}
