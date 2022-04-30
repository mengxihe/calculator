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

        Array.from(key.parentNode.children).forEach(k => k.classList.remove('pressed'));
        if(!action) {
            // console.log('number key');
            calculator.dataset.previousKeyType = 'number'
            if(displayedNum === '0') {
                display.textContent = keyContent;
            } else if (previousKeyType === 'operator' || previousKeyType === 'calculate'){
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
            calculator.dataset.previousKeyType = 'operator';
            const firstValue = calculator.dataset.firstValue;
            const secondValue = displayedNum;
            const currentOperator = calculator.dataset.currentOperator;
            
            if(firstValue && currentOperator && previousKeyType !== 'operator' && previousKeyType !=='calculate') {
                const calcValue = operate (currentOperator, firstValue, secondValue);
                display.textContent = calcValue;
                calculator.dataset.firstValue = calcValue;
            } else {
                calculator.dataset.firstValue = displayedNum;
            }
            calculator.dataset.currentOperator = action;
            key.classList.add('pressed');
        }


        if (action === 'decimal') {
            // console.log(previousKeyType)
            if (!display.textContent.includes('.')){
                display.textContent = displayedNum + '.';
            }
            if (previousKeyType === 'operator') {
                display.textContent = '0.';
            }
            calculator.dataset.previousKeyType = 'decimal';
        }

        if (action === 'clear') {
            if (key.textContent === 'AC') {
                calculator.dataset.firstValue = '';
                calculator.dataset.currentOperator = '';
                calculator.dataset.previousKeyType = '';
            }
            calculator.dataset.previousKeyType = 'clear'
            display.textContent = 0;
        }

        if (action === 'calculate') {
            let firstValue = calculator.dataset.firstValue;
            const currentOperator = calculator.dataset.currentOperator;
            let secondValue = displayedNum;
            console.log(firstValue);
            if (firstValue) {
                if(previousKeyType === 'calculate') {
                    firstValue = displayedNum;
                    secondValue = calculator.dataset.modValue;
                }

                display.textContent = operate (currentOperator, firstValue, secondValue);
            }
            calculator.dataset.modValue = secondValue;
            calculator.dataset.previousKeyType = 'calculate';
            
        }
    }
}


const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');
// console.log(display)

keys.addEventListener('click', buttonClick);