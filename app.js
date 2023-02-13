const userChoise = (weapon) => {
    const userWeapon = weapon;
    return userWeapon;
};

let chooseWeapon = (() => {
    const choiseX = document.getElementById('choise-x');
    const choiseO = document.getElementById('choise-o');
    const choiseContainer = document.getElementById('x-o-choise-btns-container');
    const enemyChoiseContainer = document.getElementById('enemy-choise-container');

    choiseX.addEventListener('click', () => {
        choiseContainer.classList.add('x-o-choise-btns-container-invisible');
        enemyChoiseContainer.classList.remove('enemy-choise-container-inivisble');
        const userChooseX = userChoise('x');
        chooseWeapon = userChooseX;
        return chooseWeapon;
    });
    choiseO.addEventListener('click', () => {
        choiseContainer.classList.add('x-o-choise-btns-container-invisible');
        enemyChoiseContainer.classList.remove('enemy-choise-container-inivisble');
        const userChooseO = userChoise('o');
        chooseWeapon = userChooseO;
        return chooseWeapon;
    });
})();

const chooseEnemy = (() => {
    const choiseHuman = document.getElementById('choise-human');
    const choiseAi = document.getElementById('choise-ai');
    const enemyChoiseContainer = document.getElementById('enemy-choise-container');
    const gameboard = document.getElementById('gameboard');
    choiseHuman.addEventListener('click', () => {
        enemyChoiseContainer.classList.add('enemy-choise-container-inivisble');
        gameboard.classList.remove('invisible-gameboard');
    });
    choiseAi.addEventListener('click', () => {
        enemyChoiseContainer.classList.add('enemy-choise-container-inivisble');
        gameboard.classList.remove('invisible-gameboard');
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

const gameFlow = (() => {
    const gridEvent = document.getElementById('gameboard');
    let moveCount = 0;
    gridEvent.addEventListener('click', (event) => {
        if (chooseWeapon.includes('x')) {
            event.target.classList.add('user-x');
            chooseWeapon = '';
            moveCount += 1;
        } else if (chooseWeapon.includes('o')) {
            event.target.classList.add('user-o');
            chooseWeapon = '';
        } else if (moveCount % 2 === 0 && !event.target.classList.contains('user-o')) {
            event.target.classList.add('user-x');
            moveCount += 1;
            console.log(moveCount);
        } else if (!moveCount % 2 === 0 && !event.target.classList.contains('user-x')) {
            event.target.classList.add('user-o');
            moveCount += 1;
            console.log(moveCount);
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
