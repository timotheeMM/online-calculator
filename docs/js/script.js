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
    lastChar = expression.charAt(expression.length - 1)

    if (lastChar !== "+" && lastChar !== "-" && lastChar !== "×" && lastChar !== "÷" && lastChar !== ".") {
        expression += '.';
        display.value = expression;
    }
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function deleteLast() {
    expression = expression.slice(0, -1);
    display.value = expression;
}

function calculate() {
    try {
        let modifiedExpression = expression.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(modifiedExpression);
        display.value = result;
        expression = result.toString();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}
