'use strict';

// querySelector is a method available on the _document_ object. Pass the string with the name of the selector into the method. _.textContent_ is a property available on the element

// for input elements, we use the _.value_ property instead of _.textContent_

const checkButton = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const againButton = document.querySelector('.again');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const highScoreSpan = document.querySelector('.highscore');
const scoreSpan = document.querySelector('.score');
const body = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// The event listener is a special kind of function that expects an _event handler_ function as the second argument
checkButton.addEventListener('click', checkHandler);
guessInput.addEventListener('keypress', enterHandler);
againButton.addEventListener('click', againHandler);

function checkHandler() {
    const guess = +guessInput.value;

    // When there is no input
    if (!guess) {
        message.textContent = '⛔ No Number!';

        // When the player wins
    } else if (guess === secretNumber) {
        message.textContent = '🎉 Correct Number!';
        number.textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            highScoreSpan.textContent = highScore;
        }

        // Access to the style property of the elements
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';

    } else if (guess !== secretNumber) {
        if (score > 1) {
            message.textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            --score;
            scoreSpan.textContent = score;
        } else {
            message.textContent = `💥 You've lost the game!`;
            scoreSpan.textContent = 0;
        }
    }
}

function enterHandler(event) {
    if (event.key === 'Enter') {
        checkHandler();
    } else {
        return;
    }
}

function againHandler() {
    // Restore values
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Restore text
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;

    // Restore styles
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}