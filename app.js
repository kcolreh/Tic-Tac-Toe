const gameBoard = (() => {
    const gameBoard3x3grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    return gameBoard3x3grid;
})();

const gameGrid = (() => {
    const grid = (() => {
        const mainGrid = document.createElement('div');
        mainGrid.classList.add('main-grid');
        mainGrid.id = 'main-grid';
        for (let index = 0; index < 9; index += 1) {
            const gridElements = document.createElement('div');
            gridElements.classList.add('inner-grid');
            gridElements.id = `gridElement-${index}`;
            mainGrid.appendChild(gridElements);
        }
        return mainGrid;
    })();
    const gridContainer = document.getElementById('grid-container'); gridContainer.appendChild(grid);
    return grid;
})();

const gameFactory = (choise, position) => {
    const displayChoise = () => document.getElementById(position);
    const addChoiseToGameArr = () => gameBoard.push(choise);
    console.log(position, choise);
    return { displayChoise, addChoiseToGameArr };
};

const playerSelection = (() => {
    const choiseOne = 'x';
    const choiseTwo = 'o';
    const gridEvent = document.getElementById('main-grid');
    gridEvent.addEventListener('click', (event) => {
        event.target.classList.add('user-selection');
        const playerMove = gameFactory(choiseOne, event.target);
        playerMove.displayChoise();
        playerMove.addChoiseToGameArr();
        console.log(gameBoard);
    });
})();

const playerFactory = (name) => {
    const player1Displayed = () => document.getElementById('player-1').innerHTML = name;
    const player2Displayed = () => document.getElementById('player-2').innerHTML = name;
    return { player1Displayed, player2Displayed };
};

const player1 = playerFactory('john');
const player2 = playerFactory('Adams');
player1.player1Displayed();
player2.player2Displayed();

// next to figure out is how to add the choise to the specific index of an array
