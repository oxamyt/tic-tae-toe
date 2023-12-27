// My problem is to make responsible tic tac toe game, where two players mark empty  cells with O and X and then when 3 across is same(like O-O-O or 0) then player wins.
// 0
// 0
// Plan
// My game must include user interface where players can click on empty cell and fill it with their mark.
// I will get user input from clicks.
// Desired output is to be able to fill empty cells and check weather a player has won.
// 1. When the user clicks on empty cell
// 2. Check if he`s playerOne or playerTwo
// 3. Fill in mark of playerOne or playerTwo.
// 4. Check if player won and if not give turn to other player and repeat from step 2.
// Start from making boardFunction
// Make game control
// Make player input feature.

// Create the game boardFunction
const boardFunction = (function () {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  return board;
})();


function createPlayer(name, marker) {
  return {
    name: name,
    marker: marker,
  };
}

const playerOne = createPlayer("PlayerOne", "O");
const playerTwo = createPlayer("PlayerTwo", "X");

const players = [playerOne, playerTwo];

let activePlayer = players[0].marker;

const switchPlayerTurn = function () {
  activePlayer =
    activePlayer === players[0].marker ? players[1].marker : players[0].marker;
  return activePlayer;
};
// Place the player's mark
function placeMark(row, col) {
  if (boardFunction[row][col].length === 0) {
    boardFunction[row][col] = mark = switchPlayerTurn();
    render();
    checkWinner();
  }
}

// Check for a winner
function checkWinner() {
  const status = document.querySelector('.status');
  for (let i = 0; i < 3; i++) {
    if (
      boardFunction[i][0] == "X" &&
      boardFunction[i][1] == boardFunction[i][0] &&
      boardFunction[i][1] == boardFunction[i][2]
    ) {
      status.innerText = 'Player Two Wins!';
    } else if (
      boardFunction[i][0] == "O" &&
      boardFunction[i][1] == boardFunction[i][0] &&
      boardFunction[i][1] == boardFunction[i][2]
    ) {
      status.innerText = 'Player One Wins!';
    }
    if (
      boardFunction[0][i] == "X" &&
      boardFunction[1][i] == boardFunction[0][i] &&
      boardFunction[1][i] == boardFunction[2][i]
    ) {
      status.innerText = 'Player Two Wins!';
    } else if (
      boardFunction[0][i] == "O" &&
      boardFunction[1][i] == boardFunction[0][i] &&
      boardFunction[1][i] == boardFunction[2][i]
    ) {
      status.innerText = 'Player One Wins!';
    }
  }
  if (
    boardFunction[0][0] == "X" &&
    boardFunction[1][1] == boardFunction[0][0] &&
    boardFunction[2][2] == boardFunction[1][1]
  ) {
    status.innerText = 'Player Two Wins!';
  }
  if (
    boardFunction[0][2] == "X" &&
    boardFunction[1][1] == boardFunction[0][2] &&
    boardFunction[2][0] == boardFunction[1][1]
  ) {
    status.innerText = 'Player Two Wins!';
  }
  if (
    boardFunction[0][0] == "O" &&
    boardFunction[1][1] == boardFunction[0][0] &&
    boardFunction[2][2] == boardFunction[1][1]
  ) {
    status.innerText = 'Player One Wins!';
  }
  if (
    boardFunction[0][2] == "O" &&
    boardFunction[1][1] == boardFunction[0][2] &&
    boardFunction[2][0] == boardFunction[1][1]
  ) {
    status.innerText = 'Player One Wins!';
  }
  if (
    boardFunction[0][0] !== "" &&
    boardFunction[0][1] !== "" &&
    boardFunction[0][2] !== "" &&
    boardFunction[1][0] !== "" &&
    boardFunction[1][1] !== "" &&
    boardFunction[1][2] !== "" &&
    boardFunction[2][0] !== "" &&
    boardFunction[2][1] !== "" &&
    boardFunction[2][2] !== ""
  ) {
    status.innerText = 'Draw!';
  }
}
function render() {
  startBtn.style.display = 'none';
  const gameboard = document.querySelector(".gameboard");
  gameboard.innerHTML = "";
  for (let i = 0; i < boardFunction.length; i++) {
    for (let j = 0; j < boardFunction.length; j++) {
      let cellMark = boardFunction[i][j];
      let cell = document.createElement("div");
      cell.setAttribute("data-i", i);
      cell.setAttribute("data-j", j);
      cell.classList.add("cell");
      cell.innerText = cellMark;
      gameboard.appendChild(cell);
    }
    gameboard.addEventListener("click", (e) => {
      if (e.target == e.currentTarget) return;
      const i = e.target.getAttribute("data-i");
      const j = e.target.getAttribute("data-j");
      placeMark(i, j);
    });
  }
}

const cell = document.querySelector(".cell");
const startBtn = document.querySelector('.start')
startBtn.addEventListener('click', render);

