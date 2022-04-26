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

console.log(operate(divide, 4, 3));

