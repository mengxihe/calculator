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
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        if(!action) {
            console.log('number key')
            if(displayedNum === '0') {
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
        }
        if (action ==='decimal') {
            console.log('decimal key');
        }
        if (action === 'clear') {
            console.log('clear key');
        }
        if (action === 'equal') {
            console.log('equal key');
        }
    }
})

