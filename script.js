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

calculator = document.querySelector('.calculator');
keys = calculator.querySelector('.keys');

keys.addEventListener('click', e=>{
    if(e.target.matches('button')){
        //Do something
        const key = e.target;
        // console.log(e.target)
        const action = key.dataset.action;
        console.log(key.dataset.action);
        if(!action) {
            console.log('number key')
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

