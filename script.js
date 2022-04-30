const add = (a, b) => {
    return Number(a) + Number( b);
}

const subtract = (a, b) => {
    return Number(a) - Number( b);
}

const multiply = (a, b) => {
    return Number(a) * Number( b);
}

const divide = (a, b) => {
    return Number(a) / Number( b);
}

const operate = (operator, a, b) => {
    if (operator === 'add'){
        return add(a, b);
    }
    else if (operator === 'subtract') {
        return subtract(a, b);
    }
    else if (operator === 'multiply') {
        return multiply(a, b);
    }
    else if (operator === 'divide') {
        return divide(a, b);
    }
}



const buttonClick = (e) =>{
    if (e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
        const operatorType = calculator.dataset.operatorType;
        let result = 0;
        const firstNumber = calculator.dataset.firstNumber;
        let secondNumber = 0;

        if(!action) {
            console.log('number key');
            calculator.dataset.previousKeyType = 'number'
            if(displayedNum === '0') {
                display.textContent = keyContent;
            } else if (previousKeyType === 'operator'){
                display.textContent = keyContent;
            }
            else {
                display.textContent = displayedNum + keyContent;
            }
        }
        if(
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            // console.log('operator key');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstNumber = display.textContent;
            calculator.dataset.operatorType = key.dataset.action;
        }
        if (action === 'decimal') {
            console.log(previousKeyType)
            if (!display.textContent.includes('.')){
                display.textContent = displayedNum + '.';
            }
            if (previousKeyType === 'operator') {
                display.textContent = '0.';
            }
            calculator.dataset.previousKeyType = 'decimal';
        }
        if (action === 'clear') {
            calculator.dataset.previousKeyType = 'clear'
            display.textContent = '0';
        }
        if (action === 'calculate') {
            calculator.dataset.previousKeyType = 'operator'
            secondNumber = display.textContent;

            result = operate (operatorType, firstNumber, secondNumber);
            console.log(result);
            display.textContent = result;
        }
    }
}


const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');
// console.log(display)

keys.addEventListener('click', buttonClick);