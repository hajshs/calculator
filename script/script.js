document.addEventListener('DOMContentLoaded', function () {
const resultElement = document.getElementById('result');
const buttonsContainer = document.getElementById('buttons');

let currentInput = '';

buttonsContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('numB') || event.target.classList.contains('eqB')) {
        handleButtonClick(event.target.textContent);
    }
    });

function handleButtonClick(value) {
    switch (value) {
        case 'AC':
            clearDisplay();
            break;
        case '=':
            calculate();
            break;
        case '^':
            appendToDisplay('**');
            break;
        default:
            appendToDisplay(value);
    }
}

function appendToDisplay(value) {
    currentInput += value;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    resultElement.textContent = currentInput;
}
});