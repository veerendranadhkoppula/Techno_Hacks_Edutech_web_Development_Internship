let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput);
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput || '0';
}