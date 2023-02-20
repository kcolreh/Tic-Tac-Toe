let moveCounter = (() => {
    const count = 0;
    return count;
})();

const userChoiseWeapon = (weapon) => {
    let userWeapon = '';
    if (weapon === 'x') {
        userWeapon = 1;
    } else (userWeapon = 2);
    return userWeapon;
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
    const gameboard = document.getElementById('gameboard');

    choiseHuman.addEventListener('click', () => {
        enemyChoiseContainer.classList.add('enemy-choise-container-inivisble');
        gameboard.classList.remove('invisible-gameboard');
        chooseEnemy = userChoiseEnemy('human');
        return chooseEnemy;
    });

    choiseAi.addEventListener('click', () => {
        enemyChoiseContainer.classList.add('enemy-choise-container-inivisble');
        gameboard.classList.remove('invisible-gameboard');
        chooseEnemy = userChoiseEnemy('ai');
        if (aiWeapon === 1) {
            humanVsAiEasy();
            moveCounter += 1;
        }
        return chooseEnemy;
    });
})();

const gameBoard = (() => {
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
    gameBoard.forEach((value, index) => {
        gameBoard[index] = 0;
    });
};

let checkDraw = () => {
    function reduceFunction(total, number) {
        const sum = total + number;
        return sum;
    }
    const row1Total = gameBoard[0].reduce(reduceFunction);
    const row2Total = gameBoard[1].reduce(reduceFunction);
    const row3Total = gameBoard[2].reduce(reduceFunction);
    if (row1Total >= 4 && row2Total >= 4 && row3Total >= 4) {
        clearBoard();
        console.log('its a draw');
        checkDraw = 'Draw';
        return checkDraw;
    }
    return checkDraw;
};

let checkRow = () => {
    const possibilities = [1, 2];
    for (let i = 0; i < gameBoard.length; i += 1) {
        const rowIndex0 = gameBoard[i][0];
        const rowIndex1 = gameBoard[i][1];
        const rowIndex2 = gameBoard[i][2];
        if (possibilities[0] === rowIndex0
            && possibilities[0] === rowIndex1
            && possibilities[0] === rowIndex2) {
            clearBoard();
            console.log('x won row');
            checkRow = 'x won row!';
            return checkRow;
        } if (possibilities[1] === rowIndex0
            && possibilities[1] === rowIndex1
            && possibilities[1] === rowIndex2) {
            clearBoard();
            console.log('o won row');
            checkRow = 'o won row!';
            return checkRow;
        }
    }
    return checkRow;
};

let checkColumn = () => {
    const possibilities = [1, 2];
    for (let i = 0; i < gameBoard.length; i += 1) {
        const columnIndex0 = gameBoard[0][i];
        const columnIndex1 = gameBoard[1][i];
        const columnIndex2 = gameBoard[2][i];
        if (possibilities[0] === columnIndex0
            && possibilities[0] === columnIndex1
            && possibilities[0] === columnIndex2) {
            clearBoard();
            console.log('x won column');
            checkColumn = 'x won column';
            return checkColumn;
        } if (possibilities[1] === columnIndex0
            && possibilities[1] === columnIndex1
            && possibilities[1] === columnIndex2) {
            clearBoard();
            console.log('o won column');
            checkColumn = 'o won column';
            return checkColumn;
        }
    }
    return checkColumn;
};

let checkDiagonal = () => {
    const possibilities = [1, 2];
    for (let i = 0; i < gameBoard.length; i += 1) {
        const diagonalIndex0 = gameBoard[0][0];
        const diagonalIndex1 = gameBoard[1][1];
        const diagonalIndex2 = gameBoard[2][2];
        const diagonalIndex3 = gameBoard[0][2];
        const diagonalIndex4 = gameBoard[2][0];
        if ((possibilities[0] === diagonalIndex3
            && possibilities[0] === diagonalIndex1
            && possibilities[0] === diagonalIndex4)
            || (possibilities[0] === diagonalIndex0
                && possibilities[0] === diagonalIndex1
                && possibilities[0] === diagonalIndex2)) {
            clearBoard();
            console.log('x won diagonal');
            checkDiagonal = 'x won diagonal';
            return checkDiagonal;
        } if ((possibilities[1] === diagonalIndex3
            && possibilities[1] === diagonalIndex1
            && possibilities[1] === diagonalIndex4)
            || (possibilities[1] === diagonalIndex0
                && possibilities[1] === diagonalIndex1
                && possibilities[1] === diagonalIndex2)) {
            clearBoard();
            console.log('o won diagonal');
            checkDiagonal = 'o won diagonal';
            return checkDiagonal;
        }
    }
    return checkDiagonal;
};

const updateBoard = () => {
    const boardElements = document.querySelectorAll('.board-elements');
    boardElements.forEach((element) => {
        const index1 = element.dataset.id.slice(1, 2);
        const index2 = element.dataset.id.slice(5, 6);
        if (gameBoard[index1][index2] === 1) {
            element.classList.add('user-x');
        } else if (gameBoard[index1][index2] === 2) {
            element.classList.add('user-o');
        }
    });
    checkDraw();
    checkRow();
    checkColumn();
    checkDiagonal();
};

const humanVsAiEasy = (moveCount) => {
    const choise1 = Math.floor(Math.random() * 3);
    const choise2 = Math.floor(Math.random() * 3);
    console.log(choise1, choise2);
    if (moveCounter % 2 === 0 && chooseEnemy.includes('ai') && gameBoard[choise1][choise2] === 0) {
        gameBoard[choise1][choise2] = aiWeapon;
        updateBoard();
    } else if (moveCounter % 2 !== 0 && chooseEnemy.includes('ai') && gameBoard[choise1][choise2] === 0) {
        gameBoard[choise1][choise2] = aiWeapon;
        updateBoard();
    } else if (gameBoard[choise1][choise2] === 1 || gameBoard[choise1][choise2] === 2) {
        humanVsAiEasy(moveCount);
    }
};

const gameFlow = (() => {
    const gridEvent = document.getElementById('gameboard');

    gridEvent.addEventListener('click', (event) => {
        const index1 = event.target.dataset.id.slice(1, 2);
        const index2 = event.target.dataset.id.slice(5, 6);
        if (moveCounter % 2 === 0 && gameBoard[index1][index2] === 0) {
            gameBoard[index1][index2] = 1;
            moveCounter += 1;
            updateBoard();
            if (chooseEnemy.includes('ai')) {
                humanVsAiEasy(moveCounter);
                moveCounter += 1;
            }
        } else if (moveCounter % 2 !== 0 && gameBoard[index1][index2] === 0) {
            gameBoard[index1][index2] = 2;
            moveCounter += 1;
            updateBoard(moveCounter);
            if (chooseEnemy.includes('ai')) {
                humanVsAiEasy(moveCounter);
                moveCounter += 1;
            }
        }
    });
})();
