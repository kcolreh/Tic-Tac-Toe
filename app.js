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

const checkRow = () => {
    const possibilities = [1, 2];
    for (let i = 0; i < gameBoard.length; i += 1) {
        const rowIndex0 = gameBoard[i][0];
        const rowIndex1 = gameBoard[i][1];
        const rowIndex2 = gameBoard[i][2];
        if (possibilities[0] === rowIndex0
            && possibilities[0] === rowIndex1
            && possibilities[0] === rowIndex2) {
            clearBoard();
            return console.log('x won row');
        } if (possibilities[1] === rowIndex0
            && possibilities[1] === rowIndex1
            && possibilities[1] === rowIndex2) {
            clearBoard();
            return console.log('o won row');
        }
    }
};

const checkColumn = () => {
    const possibilities = [1, 2];
    for (let i = 0; i < gameBoard.length; i += 1) {
        const columnIndex0 = gameBoard[0][i];
        const columnIndex1 = gameBoard[1][i];
        const columnIndex2 = gameBoard[2][i];
        if (possibilities[0] === columnIndex0
            && possibilities[0] === columnIndex1
            && possibilities[0] === columnIndex2) {
            clearBoard();
            return console.log('x won column');
        } if (possibilities[1] === columnIndex0
            && possibilities[1] === columnIndex1
            && possibilities[1] === columnIndex2) {
            clearBoard();
            return console.log('o won column');
        }
    }
};

const checkDiagonal = () => {
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
            return console.log('x won diagonal');
        } if ((possibilities[1] === diagonalIndex3
            && possibilities[1] === diagonalIndex1
            && possibilities[1] === diagonalIndex4)
            || (possibilities[1] === diagonalIndex0
                && possibilities[1] === diagonalIndex1
                && possibilities[1] === diagonalIndex2)) {
            clearBoard();
            return console.log('o won diagonal');
        }
    }
};

/* const choosePlayer = () => {
    const choosePlayerBtns = document.getElementById('button-container');
    choosePlayerBtns.addEventListener('click', (event) => {
        const userChoise = event.target.id;
        return userChoise;
    });
};

const player1Move = () => {
    const gridEvent = document.getElementById('gameboard');
    gridEvent.addEventListener('click', (event) => {
        const cellDataId = event.target.dataset.id;
        const boardElementId = event.target.id;
        gameBoard[+cellDataId][+boardElementId] = 1;
    });
};

const player2Move = () => {
    const gridEvent = document.getElementById('gameboard');
    gridEvent.addEventListener('click', (event) => {
        const cellDataId = event.target.dataset.id;
        const boardElementId = event.target.id;
        gameBoard[+cellDataId][+boardElementId] = 1;
    });
};
*/
const gameFlow = (() => {
    const gridEvent = document.getElementById('gameboard');
    let playerMove = 0;
    gridEvent.addEventListener('click', (event) => {
        if (playerMove % 2 === 0 && !event.target.classList.contains('user-o')) {
            event.target.classList.add('user-x');
            playerMove += 1;
            // player1Move();
        } else if (!playerMove % 2 === 0 && !event.target.classList.contains('user-x')) {
            event.target.classList.add('user-o');
            playerMove -= 1;
            // player2Move();
        }
    });
})();

const gameBoardUpdate = (() => {
    const gridEvent = document.getElementById('gameboard');
    gridEvent.addEventListener('click', (event) => {
        const cellDataId = event.target.dataset.id;
        const boardElementId = event.target.id;
        if (!event.target.classList.contains('user-o')) {
            gameBoard[+cellDataId][+boardElementId] = 1;
        } else if (!event.target.classList.contains('user-x')) {
            gameBoard[+cellDataId][+boardElementId] = 2;
        }
        checkRow();
        checkColumn();
        checkDiagonal();
    });
})();
