let display = document.getElementById('display');
let expression = '';

function appendNumber(num) {
    expression += num;
    display.value = expression;
}

function appendOperator(op) {
    lastChar = expression.charAt(expression.length - 1)

    if (lastChar !== "+" && lastChar !== "-" && lastChar !== "×" && lastChar !== "÷" && lastChar !== ".") {
        expression += op;
        display.value = expression;
    }
}

function appendDecimal() {
    lastChar = expression.charAt(expression.length - 1);

    if (lastChar !== "+" && lastChar !== "-" && lastChar !== "×" && lastChar !== "÷" && lastChar !== ".") {
        expression += '.';
        display.value = expression;
    }
}

function clearDisplay() {
    expression = '';
    display.value = expression;
}

function deleteLast() {
    let lastFiveCharacters = expression.slice(-5);
    let lastEightCharacters = expression.slice(-8);

    if (lastFiveCharacters === "Error") {
        expression = expression.slice(0, -5);
        display.value = expression;
    } else if (lastEightCharacters === "Infinity") {
        expression = expression.slice(0, -8);
        display.value = expression;
    } else {
        expression = expression.slice(0, -1);
        display.value = expression;
    }   
}

function calculate() {
    try {
        let modifiedExpression = expression.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(modifiedExpression);
        display.value = result;
        expression = result.toString();
    } catch (error) {
        expression = 'Error';
        display.value = expression;
    }
}
