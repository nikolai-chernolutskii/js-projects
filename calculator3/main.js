'use strict';

let a = ''; // first number
let b = ''; // second number
let sign = ''; // mathematical operator
let sign2 = ''; // chained mathematical operator
let finish = false; // calculation complete status

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const action = ['-', '+', 'X', '/', '^'];
const sqrt = '√';
const decimal = '.';

const out = document.querySelector('.calc-screen p'); // calculator display

function clearAll() {
    a = ''; //first number and result
    b = ''; // second number
    sign = ''; // mathematical operator
    sign2 = ''; // chained mathematical operator
    finish = false;
    out.textContent = 0;
}

function delCharacter() {
    if (a && !b) {
        out.textContent = out.textContent.slice(0, -1);
        a = out.textContent;
        return;
    } else {
        out.textContent = out.textContent.slice(0, -1);
        b = out.textContent;
        return;
    }
}

function negative() {
    if (b === '' && sign === '') {
        a = a * -1;
        out.textContent = a;
    } else {
        b = b * -1;
        out.textContent = b;
    }
}

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return; // the click does not fall on a btn

    if (event.target.classList.contains('ac')) return clearAll(); // clearAll btn clicked

    if (event.target.classList.contains('del')) return delCharacter(); // del btn clicked

    if (event.target.classList.contains('plus-minus')) return negative(); // +/- btn clicked

    out.textContent = '';

    const key = event.target.textContent; // receiving the value of the clicked btn

    // if 0-9 btn is pressed
    if (digit.includes(key)) {
        // if b equals an empty string AND the mathematical operator equals an empty string then we have just started populating the a variable
        if (b === '' && sign === '') {
            if (a === '0') {
                a = key;
            } else {
                a += key; //  we replace the screen content (0) with the 1st digit and then ADD other digits (if any) to the 1st one
            }
            console.log(a, sign, b);
            out.textContent = a;
        }
        // if a does not equal an empty string (if it is already filled) AND if b does not equal an empty string (if it is already filled) AND if finish variable is true (if the equal sign has been pressed and the calculation has been made)
        else if (a !== '' && b !== '' && finish) {
            b = key; // set the b variable to nil, i.e. register the first entered symbol
            finish = false;
            out.textContent = b;
        } else {
            if (b === '0') {
                b = key;
            } else {
                b += key;
            }
            out.textContent = b;
            console.log(a, sign, b);
        }
        return;
    }

    // if +, -, *, /, exp  is pressed
    if (action.includes(key)) {
        // *** CHAINING OPERATIONS
        if (a && b && !finish) {
            sign2 = key;
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
            out.textContent = a + sign2;
            sign = sign2;

            // Limiting the output to 10 digits (both for integers and floats)
            if (out.textContent.length > 10) {

                let result = out.textContent;

                if (out.textContent.includes('.')) {

                    let decimalLimit = out.textContent.substring(0, 11);

                    result = parseFloat(decimalLimit);
                } else {
                    result = out.textContent.substring(0, 10);
                }
                out.textContent = result + sign2;
                a = result;
                return;
            } else {
                out.textContent = a + sign2;
            }
        } else {
            sign = key;
            out.textContent = a + sign; // display the first operand and the mathematical operator
        }
        console.log(a, sign, b);
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

        if (out.textContent.length > 10) {

            let result = out.textContent;

            if (out.textContent.includes('.')) {

                let decimalLimit = out.textContent.substring(0, 11);

                result = parseFloat(decimalLimit);
            } else {
                result = out.textContent.substring(0, 10);
            }
            out.textContent = result;
            a = result;
            return;
        } else {
            out.textContent = a;
        }
    }

    if (key === sqrt) {
        if (a < 0) {
            out.textContent = 'Error 😋';
            a = '';
            b = '';
            sign = '';
            return;
        } else {
            a = a ** (1 / 2);
            finish = true;
            out.textContent = a;

            // Limiting the output to 10 digits (both for integers and floats)
            if (out.textContent.length > 10) {

                let result = out.textContent;

                if (out.textContent.includes('.')) {

                    let decimalLimit = out.textContent.substring(0, 11);

                    result = parseFloat(decimalLimit);
                } else {
                    result = out.textContent.substring(0, 10);
                }
                out.textContent = result;
                a = result;
            }
        }
    }

    if (key === decimal) {
        if (b === '' && sign === '') {
            if (a.includes('.')) {
                out.textContent = a;
            } else {
                a += key;
                out.textContent = a;
            }
        } else {
            if (b.includes('.')) {
                out.textContent = b;
            } else {
                b += key;
                out.textContent = b;
            }
        }
    }
}
