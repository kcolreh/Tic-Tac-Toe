const gameBoard = (() => {
    const gameBoard3x3grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    return gameBoard3x3grid;
})();

const winConditions = (() => {
    const conditions = [[
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0],
    ], [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ], [
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1],
    ],
    [
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
    ],
    [
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
    ], [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ], [
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0],
    ],
    ];
    return conditions;
})();

const gameFlow = () => {
    winConditions.forEach((condition) => {
        if ((gameBoard.toString()) === (condition.toString())) {
            console.log('true');
        }
    });
};

const playerSelection = (() => {
    const gridEvent = document.getElementById('gameboard');
    let playerMove = 0;
    gridEvent.addEventListener('click', (event) => {
        if (playerMove === 0 && !event.target.classList.contains('user-o')) {
            event.target.classList.add('user-x');
            playerMove += 1;
        } else if (playerMove === 1 && !event.target.classList.contains('user-x')) {
            event.target.classList.add('user-o');
            playerMove -= 1;
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
            gameBoard[+cellDataId][+boardElementId] = 0;
        } gameFlow();
    });
})();
