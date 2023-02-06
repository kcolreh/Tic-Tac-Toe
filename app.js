const gameBoard = (() => {
    const gameBoard3x3grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    return gameBoard3x3grid;
})();

const playerSelection = (() => {
    const gridEvent = document.getElementById('gameboard');
    let playerMove = 0;
    gridEvent.addEventListener('click', (event) => {
        const boardElementId = event.target.id;
        console.log(gameBoard);
        if (playerMove === 0 && !event.target.classList.contains('user-o')) {
            gameBoard[boardElementId] = 'x'; // Board element id corresponds to the location of the gameBoard index
            event.target.classList.add('user-x');
            playerMove += 1;
        } else if (playerMove === 1 && !event.target.classList.contains('user-x')) {
            gameBoard[boardElementId] = 'o'; // Board element id corresponds to the location of the gameBoard index
            event.target.classList.add('user-o');
            playerMove -= 1;
        }
    });
})();
