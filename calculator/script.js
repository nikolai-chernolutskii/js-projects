const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

// Calculate first and second values depending on operator
const calculate = {
    '/': (firstNumber, secondNumber) => firstNumber / secondNumber,

    '*': (firstNumber, secondNumber) => firstNumber * secondNumber,

    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,

    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,

    '=': (secondNumber) => secondNumber,
};

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number) {
    // Replace the current display value if first value is entered (once the first value is entered and we hit a plus sign (e.g.), we want the display to reset itself)
    if (awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
        // If the current display value is 0, replace it, if not add number
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}

// This decimal function is going to check what is currently in our calculator display, and if it does NOT include the decimal point, then we are going to set the textContent to whatever is already in there and add a decimal point to the end of it
function addDecimal() {
    // If operator pressed, don't add decimal
    if (awaitingNextValue) return;
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}


function useOperator(operator) {
    const currentValue = +(calculatorDisplay.textContent);
    // Prevent multiple operators
    if (operatorValue && awaitingNextValue) {
        operatorValue = operator;
        return;
    }
    // Assign firstValue if no value
    if (!firstValue) {
        firstValue = currentValue;
    } else {
        /* console.log(firstValue, operatorValue, currentValue);*/
        const calculation = calculate[operatorValue](firstValue, currentValue);
        /*console.log('calculation', calculation);*/
        calculatorDisplay.textContent = calculation;
        firstValue = calculation;
    }
    // Ready for next value, store operator
    awaitingNextValue = true;
    operatorValue = operator;
}

// Reset all values, display
function resetAll() {
    firstValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
}

// Add event listeneres for numbers, operators, decimal btns
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) /* this will be the case for our number btns because there is no class assigned to them */ {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value)); /* send the input btn value assigned in html */
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal()); // When we add this event listener, it's going to add the decimal function (see above)
    }
});

// Event listener for reset
clearBtn.addEventListener('click', resetAll);