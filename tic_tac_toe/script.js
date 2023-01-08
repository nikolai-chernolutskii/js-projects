const players = [
    { name: 'Niko', symbol: 'X' },
    { name: 'Asena', symbol: 'O' },
];

const player1 = document.getElementById('p1-name')
const player2 = document.getElementById('p2-name')

player1.textContent = players[0].name;
player2.textContent = players[1].name;

const nikoMove = players[0].symbol;
const asenaMove = players[1].symbol;

const board = document.getElementsByClassName('square');

function move(playerMove, checkBox) {
    board[checkBox].textContent = playerMove;
}

function clearAll() {
    for (let cell of board) {
        cell.textContent = null;
    }
}