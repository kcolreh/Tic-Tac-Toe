const gameDisplay = (() => {
    const gameBoard = ['', '', '', '', '', '', '', '', ''];
    const gameGrid = (() => {
        const grid = document.createElement('div');
        grid.classList.add('main-grid');
        grid.id = 'main-grid';
        for (let index = 0; index < 9; index += 1) {
            const gridElements = document.createElement('div');
            gridElements.classList.add('inner-grid');
            gridElements.id = `gridElement-${index}`;
            grid.appendChild(gridElements);
        } return grid;
    })(); const gridContainer = document.getElementById('grid-container'); gridContainer.appendChild(gameGrid);
    return gameBoard;
})();

const playerSelection = (() => {
    const gameGrid = document.getElementById('main-grid');
    gameGrid.addEventListener('click', (event) => {
        event.target.classList.add('user-selection');
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
