const display = document.getElementById('display');

let totalSoFar = 0;
let operationFlag = false;

const addNumber = (num) => {
    console.log(totalSoFar);
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
    if (display.innerHTML === '0') {
        return;
    }

    if (!operationFlag) {
        totalSoFar = parseFloat(display.innerHTML);
        operationFlag = true;
        display.innerHTML = '0';
        return;
    }

    switch (operation) {
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
    }
    display.innerHTML = '0';
}

const equal = () => {
    if (display.innerHTML === '0') {
        return;
    }

    const result = eval(display.innerHTML);
    display.innerHTML = result;
}

const reset = () => {
    display.innerHTML = 0;
    totalSoFar = 0;
    operationFlag = false;
}
