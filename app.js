const gameDisplay = (() => {
    const gameBoard = ['', '', '', '', '', '', '', '', ''];
    const gameGrid = (() => {
        const grid = document.createElement('div');
        grid.classList.add('main-grid');
        for (let i = 0; i < 9; i += 1) {
            const gridElements = document.createElement('div');
            gridElements.classList.add('inner-grid');
            gridElements.id = `gridElement-${i}`;
            grid.appendChild(gridElements);
        } return grid;
    })(); const gridContainer = document.getElementById('grid-container'); gridContainer.appendChild(gameGrid);
    return gameBoard;
})();
console.log(gameDisplay);
const playerFactory = (player1, player2) => {
    const sayHello = () => console.log('hello');
    return { player1, player2, sayHello };
};

const humanPlayer = playerFactory('1', '2');
humanPlayer.sayHello();
