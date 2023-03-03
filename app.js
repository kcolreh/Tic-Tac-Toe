let userChoiseWeapon = (weapon) => {
    if (weapon === 'x') {
        userChoiseWeapon = 1;
    } else (userChoiseWeapon = 2);
    return userChoiseWeapon;
};

const userChoiseEnemy = (enemy) => {
    const usersEnemy = enemy;
    return usersEnemy;
};

let aiWeapon = () => {
    if (chooseWeapon === 1) {
        aiWeapon = 2;
    } else aiWeapon = 1;
};

let chooseWeapon = (() => {
    const choiseX = document.getElementById('choise-x');
    const choiseO = document.getElementById('choise-o');
    const choiseContainer = document.getElementById('x-o-choise-btns-container');
    const enemyChoiseContainer = document.getElementById('enemy-choise-container');

    choiseX.addEventListener('click', () => {
        choiseContainer.classList.add('x-o-choise-btns-container-invisible');
        enemyChoiseContainer.classList.remove('enemy-choise-container-inivisble');
        chooseWeapon = userChoiseWeapon('x');
        aiWeapon();
        return chooseWeapon;
    });
    choiseO.addEventListener('click', () => {
        choiseContainer.classList.add('x-o-choise-btns-container-invisible');
        enemyChoiseContainer.classList.remove('enemy-choise-container-inivisble');
        chooseWeapon = userChoiseWeapon('o');
        aiWeapon();
        return chooseWeapon;
    });
})();

let chooseEnemy = (() => {
    const choiseHuman = document.getElementById('choise-human');
    const choiseAi = document.getElementById('choise-ai');
    const enemyChoiseContainer = document.getElementById('enemy-choise-container');
    const board = document.getElementById('gameboard');

    choiseHuman.addEventListener('click', () => {
        enemyChoiseContainer.classList.add('enemy-choise-container-inivisble');
        board.classList.remove('invisible-gameboard');
        chooseEnemy = userChoiseEnemy('human');
        return chooseEnemy;
    });

    choiseAi.addEventListener('click', () => {
        enemyChoiseContainer.classList.add('enemy-choise-container-inivisble');
        board.classList.remove('invisible-gameboard');
        chooseEnemy = userChoiseEnemy('ai');
        aiFirstMove();
        return chooseEnemy;
    });
})();

const board = (() => {
    const gameBoard3x3grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    return gameBoard3x3grid;
})();

const clearBoard = () => {
    const boardElements = document.querySelectorAll('.board-elements');
    boardElements.forEach(((element) => {
        element.classList.remove('user-x');
        element.classList.remove('user-o');
    }));
    board.forEach((value, index) => {
        board[index] = 0;
    });
};

const checkDraw = () => {
    function reduceFunction(total, number) {
        const sum = total + number;
        return sum;
    }
    const row1Total = board[0].reduce(reduceFunction);
    const row2Total = board[1].reduce(reduceFunction);
    const row3Total = board[2].reduce(reduceFunction);
    if (row1Total >= 4 && row2Total >= 4 && row3Total >= 4) {
        console.log('its a draw');
    }
};

function checkWinner() {
    for (let row = 0; row < board.length; row += 1) {
        if (board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
            if (board[row][0] === 1) {
                console.log('x won');
            } if (board[row][0] === 2) {
                console.log('o won');
            }
        }
    }

    for (let column = 0; column < board.length; column += 1) {
        if (board[0][column] === board[1][column] && board[1][column] === board[2][column]) {
            if (board[0][column] === 1) {
                console.log('x won');
            } if (board[0][column] === 2) {
                console.log('o won');
            }
        }
    }

    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        if (board[0][0] === 1) {
            console.log('x won');
        } if (board[0][0] === 2) {
            console.log('o won');
        }
    }

    if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        if (board[0][2] === 1) {
            console.log('x won');
        } if (board[0][2] === 2) {
            console.log('o won');
        }
    }
}

const updateBoard = () => {
    const boardElements = document.querySelectorAll('.board-elements');
    boardElements.forEach((element) => {
        const index1 = element.dataset.id.slice(1, 2);
        const index2 = element.dataset.id.slice(5, 6);
        if (board[index1][index2] === 1) {
            element.classList.add('user-x');
        } else if (board[index1][index2] === 2) {
            element.classList.add('user-o');
        }
    });
    checkWinner();
    checkDraw();
};

function eveluateMove(board) {
    for (let row = 0; row < board.length; row += 1) {
        if (board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
            if (board[row][0] === 1) {
                return +10;
            } if (board[row][0] === 2) {
                return -10;
            }
        }
    }

    for (let column = 0; column < board.length; column += 1) {
        if (board[0][column] === board[1][column] && board[1][column] === board[2][column]) {
            if (board[0][column] === 1) {
                return +10;
            } if (board[0][column] === 2) {
                return -10;
            }
        }
    }

    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        if (board[0][0] === 1) {
            return +10;
        } if (board[0][0] === 2) {
            return -10;
        }
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        if (board[0][2] === 1) {
            return +10;
        } if (board[0][2] === 2) {
            return -10;
        }
    } return 0;
}

function minimax(board, depth, isMaximizer) {
    const score = eveluateMove(board);

    if (score === 10) {
        return score;
    }
    if (score === -10) {
        return score;
    }

    if (isMovesLeft() === false) {
        return 0;
    }

    if (isMaximizer) {
        let best = -1000;

        for (let row = 0; row < board.length; row += 1) {
            for (let column = 0; column < board.length; column += 1) {
                if (board[row][column] === 0) {
                    board[row][column] = 1;
                    best = Math.max(best, minimax(board, depth + 1, false));
                    board[row][column] = 0;
                }
            }
        } return best;
    }

    if (!isMaximizer) {
        let best = 1000;

        for (let row = 0; row < board.length; row += 1) {
            for (let column = 0; column < board.length; column += 1) {
                if (board[row][column] === 0) {
                    board[row][column] = 2;
                    best = Math.min(best, minimax(board, depth + 1, true));
                    board[row][column] = 0;
                }
            }
        } return best;
    }
}

const makeMove = (row, column) => ({ row, column });

function findBestMove(board) {
    let bestValue = aiWeapon === 1 ? -Infinity : +Infinity;
    const bestMove = makeMove;
    bestMove.row = -1;
    bestMove.column = -1;

    for (let row = 0; row < board.length; row += 1) {
        for (let column = 0; column < board.length; column += 1) {
            if (board[row][column] === 0 && aiWeapon === 1) {
                board[row][column] = aiWeapon;
                const moveValue = minimax(board, 0, false);
                board[row][column] = 0;
                if (moveValue > bestValue) {
                    bestMove.row = row;
                    bestMove.column = column;
                    bestValue = moveValue;
                }
            } if (board[row][column] === 0 && aiWeapon === 2) {
                board[row][column] = aiWeapon;
                const moveValue = minimax(board, 0, true);
                board[row][column] = 0;
                if (moveValue < bestValue) {
                    bestMove.row = row;
                    bestMove.column = column;
                    bestValue = moveValue;
                }
            }
        }
    } return bestMove;
}

function isMovesLeft() {
    let movesAvailable = true;
    const movesLeftR1 = board[0].every((value) => value > 0);
    const movesLeftR2 = board[1].every((value) => value > 0);
    const movesLeftR3 = board[2].every((value) => value > 0);
    if (movesLeftR1 === true && movesLeftR2 === true && movesLeftR3 === true) {
        movesAvailable = false;
    } return movesAvailable;
}

let isPlayersTurn = (() => true)();

let isAiTurn = (() => false)();

function aiFirstMove() {
    if (aiWeapon === 1) {
        isAiTurn = true;
        aiMove();
    }
}

const humanMove = (() => {
    const gridEvent = document.getElementById('gameboard');
    gridEvent.addEventListener('click', (event) => {
        const index1 = event.target.dataset.id.slice(1, 2);
        const index2 = event.target.dataset.id.slice(5, 6);
        if (isPlayersTurn === true && board[index1][index2] === 0) {
            board[index1][index2] = userChoiseWeapon;
            isPlayersTurn = false;
            isAiTurn = true;
            updateBoard();
            aiMove();
        }
    });
})();

const humanVsHuman = (() => {
    const gridEvent = document.getElementById('gameboard');
    gridEvent.addEventListener('click', (event) => {
        const index1 = event.target.dataset.id.slice(1, 2);
        const index2 = event.target.dataset.id.slice(5, 6);
        if (isPlayersTurn === false && isAiTurn === false && board[index1][index2] === 0) {
            board[index1][index2] = aiWeapon;
            isPlayersTurn = true;
            updateBoard();
        }
    });
})();

function aiMove() {
    if (isAiTurn === true && chooseEnemy.includes('ai')) {
        const move = findBestMove(board);
        board[move.row][move.column] = aiWeapon;
        isPlayersTurn = true;
        isAiTurn = false;
        updateBoard();
    } else isAiTurn = false;
}
