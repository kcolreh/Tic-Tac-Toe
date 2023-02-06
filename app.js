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
        console.log(playerMove);
        if (playerMove === 0 && !event.target.classList.contains('user-o')) {
            event.target.classList.add('user-x');
            playerMove += 1;
        } else if (playerMove === 1 && !event.target.classList.contains('user-x')) {
            event.target.classList.add('user-o');
            playerMove -= 1;
        }
    });
})();

const ticTacToeGame = (player1, player2) => {

};
