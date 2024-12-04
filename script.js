// Selecting elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');

let currentInput = '';
let previousInput = '';
let operator = '';

// Function to handle button clicks
function handleButtonClick(e) {
    const value = e.target.dataset.value;

    if (!isNaN(value) || value === '.') {
        // Append numbers and decimals
        currentInput += value;
        updateDisplay(currentInput);
    } else if (value === '=') {
        // Perform calculation
        if (currentInput && previousInput && operator) {
            const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
            updateDisplay(result);
            previousInput = result.toString();
            currentInput = '';
            operator = '';
        }
    } else {
        // Handle operators
        if (currentInput) {
            previousInput = currentInput;
            currentInput = '';
        }
        operator = value;
    }
}

// Function to perform calculations
function calculate(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Error';
        default: return '';
    }
}

// Function to update the display
function updateDisplay(value) {
    display.value = value;
}

// Clear the display and reset variables
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('');
}

// Add event listeners to buttons
buttons.forEach(button => button.addEventListener('click', handleButtonClick));
clearButton.addEventListener('click', clearDisplay);
