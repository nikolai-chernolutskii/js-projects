'use strict';

// variables for the buttons
let a = ''; // first number
let b = ''; // second number
let sign = ''; // mathematical operator
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/', '^'];
const sqrt = '√';

// calculator monitor
const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = ''; //first number and result
    b = ''; // second number
    sign = ''; // mathematical operator
    finish = false;
    out.textContent = 0;
}

// document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // the click does not fall on a btn
    if (!event.target.classList.contains('btn')) return;
    // clearAll btn clicked
    if (event.target.classList.contains('ac')) return clearAll();

    out.textContent = '';

    // receiving the value of the clicked btn
    const key = event.target.textContent;

    // if 0-9 btn or . btn is pressed
    if (digit.includes(key)) {
        // if b equals an empty string AND the mathematical operator equals an empty string then we have just started populating the a variable
        if (b === '' && sign === '') {
            a += key;
            console.log(a, b, sign);
            out.textContent = a;
        }
        // if a does not equal an empty string (if it is already filled) AND if b does not equal an empty string (if it is already filled) AND if finish variable is true (if the equal sign has been pressed and the calculation has been made)
        else if (a !== '' && b !== '' && finish) {
            // set the b variable to nil, i.e. register the first entered symbol
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b; // CORRECT DISPLAY TO SHOW: 1ST OPERAND, SIGN, 2ND OPERAND
        }
        console.log(a, sign, b);
        return;
    }

    // if +, -, *, /, exp  is pressed
    if (action.includes(key)) {
        sign = key;
        // display the mathematical operator
        out.textContent = sign; // CORRECT DISPLAY TO SHOW: 1ST OPERAND, SIGN
        console.log(a, b, sign);
        return;
    }


    // if equal sign is pressed
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = +a + +b;
                break;
            case "-":
                a = +a - +b;
                break;
            case "X":
                a = +a * +b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Error 😋';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = +a / +b;
                break;
            case "^":
                a = a ** b;
                break;
        }

        finish = true;
        out.textContent = a;
    }

    if (key === sqrt) {
        if (a < 0) {
            out.textContent = 'Error 😋';
            a = '';
            b = '';
            sign = '';
            return;
        }
        a = a ** (1 / 2);
        finish = true;
        out.textContent = a;
    }
}
