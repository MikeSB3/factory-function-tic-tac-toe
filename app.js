// const board = ['', '', '', '', '', '', '', '', ''];
// const update = () => {
//     const cells = boardContainer.children;
//
//     for (let i = 0; i < board.length; i += 1) {
//         cells[i].innerText = `${board[i]}`;
//     }
// };
// const create = () => {
//     for (let i = 0; i < board.length; i += 1) {
//         const boardCell = document.createElement('p');
//         boardCell.className = 'board-cell';
//         boardCell.dataset.index = i;
//         boardContainer.appendChild(boardCell);
//     }
//     update();
// };
// const placeToken = (target, token) => {
//     board[target] = token;
//     update();
// };


//Modules
const gameBoard = (() => {
    let board = [];




    return {
        board,
    }
})();

const displayController = (() => {

})();

//Factories
const PlayerFactory = (name, gamePiece) => {
    const getName = () => name;
    const getPlayerPiece = () => gamePiece;
    const playerInfo = () => {
        console.log(`Player Name: ${name}\nGame Piece Selection: ${gamePiece}`);
    }
    const selectPosition = () => {
        const boxSelection = document.querySelectorAll('.box');

        boxSelection.forEach((box) => {
            box.addEventListener('click', () => {
                box.textContent = gamePiece;
            });
        });
    }
    return {getName, getPlayerPiece, playerInfo, selectPosition}
}

//Testing
const me = PlayerFactory('Mike', 'YAY!');
me.playerInfo();
me.selectPosition();