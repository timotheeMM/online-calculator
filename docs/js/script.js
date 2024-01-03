let display = document.getElementById('display');
let expression = '';

/**
 * Append a number to the expression and update the display.
 * @param {string} num - The number to append.
 */
function appendNumber(num) {
    if (expression === "Error" || expression === "Infinity") {
        expression = '';
        display.value = expression
    }

    expression += num;
    display.value = expression;
}

/**
 * Append an operator to the expression if the last character is not already an operator.
 * @param {string} op - The operator to append.
 */
function appendOperator(op) {
    if (expression === "Error" || expression === "Infinity") {
        expression = '';
        display.value = expression
    }

    lastChar = expression.charAt(expression.length - 1);

    if (lastChar !== "+" && lastChar !== "-" && lastChar !== "×" && lastChar !== "÷" && lastChar !== ".") {
        expression += op;
        display.value = expression;
    }
}

/**
 * Append a decimal point to the expression if the last character is not already a decimal point or an operator.
 */
function appendDecimal() {
    lastChar = expression.charAt(expression.length - 1);

    if (lastChar !== "+" && lastChar !== "-" && lastChar !== "×" && lastChar !== "÷" && lastChar !== ".") {
        expression += '.';
        display.value = expression;
    }
}

/**
 * Clear the display and reset the expression.
 */
function clearDisplay() {
    expression = '';
    display.value = expression;
}

/**
 * Delete the last character from the expression, considering special cases like "Error" and "Infinity".
 */
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

/**
 * Evaluate the expression, replace '×' and '÷' with '*' and '/', and update the display.
 * Handle errors and display 'Error' in case of an exception.
 */
function calculate() {
    try {
        let modifiedExpression = expression.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(modifiedExpression);
        expression = result.toString();
        display.value = expression;
    } catch (error) {
        expression = 'Error';
        display.value = expression;
    }
}
