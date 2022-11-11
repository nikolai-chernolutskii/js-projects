const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

function sendNumberValue(number) {
    // If the current display value is 0, replace it, if not add number
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
}

// Add event listeneres for numbers, operators, decimal btns
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) /* this will be the case for our number btns because there is no class assigned to them */ {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value)); /* send the input btn value assigned in html */
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    }

});