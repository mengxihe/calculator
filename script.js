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

const buttonClick = (e) =>{
    if (e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        if(!action) {
            console.log('number key');
            if(displayedNum === '0') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
                console.log(display.textContent);
            }
        }
        if(
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('operator key');
        }
        if (action === 'decimal') {
            console.log('decimal key');
            display.textContent = displayedNum + '.';
        }
        if (action === 'clear') {
            console.log('clear key');
            display.textContent = '0';
        }
        if (action === 'calculate') {
            console.log('equal key');
        }
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'));
    }
}


const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');
// console.log(display)

keys.addEventListener('click', buttonClick);