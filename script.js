const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a-b;
}

const multiply = (a, b) => {
    return a*b;
}

const divide = (a, b) => {
    return a/b;
}

// console.log(add(2, 8));
// console.log(subtract(3, 1));
// console.log(multiply(3, 3));
// console.log(divide(3, 2));
const operate = (operator, a, b) => {
    if (operator === add){
        return add(a, b);
    }
    else if (operator === subtract) {
        return subtract(a, b);
    }
    else if (operator === multiply) {
        return multiply(a, b);
    }
    else if (operator === divide) {
        return divide(a, b);
    }
}

// console.log(operate(divide, 4, 3));

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.keys');

const display = document.querySelector('.display')
// console.log(display.textContent);

keys.addEventListener('click', e=>{
    if(e.target.matches('button')){
        const key = e.target;
        // console.log(key);
        

        console.log(key.parentNode.children);
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
        if(!action) {
            console.log('number key')
            if(displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
                
            }
        }
        if (
            action ==='add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('operator key!');
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
        }
        if (action ==='decimal') {
            console.log('decimal key');
            display.textContent = displayedNum + '.';
        }
        if (action === 'clear') {
            console.log('clear key');
        }
        if (action === 'equal') {
            console.log('equal key');
            const secondValue = displayedNum
        }
        //things
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
    }
})

