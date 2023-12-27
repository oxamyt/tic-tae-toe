// Selectors
const gameboard = document.querySelector(".gameboard");
const status = document.querySelector(".status");
const cell = document.querySelector(".cell");
const startBtn = document.querySelector(".start");
const resBtn = document.querySelector(".restartbtn");


// Create the game boardFunction
const boardFunction = (function () {
  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  return board;
})();

// Create player factory function
function createPlayer(name, marker) {
  return {
    name: name,
    marker: marker,
  };
}

// Creating players
const playerOne = createPlayer("PlayerOne", "O");
const playerTwo = createPlayer("PlayerTwo", "X");
const players = [playerOne, playerTwo];

let activePlayer = players[0].marker;

// Is end variable
let isEnd = false;

// Turn function
const switchPlayerTurn = function () {
  activePlayer =
    activePlayer === players[0].marker ? players[1].marker : players[0].marker;
  return activePlayer;
};
// Place the player's mark
function placeMark(row, col) {
  if (isEnd) return;
  if (boardFunction[row][col].length === 0) {
    boardFunction[row][col] = mark = switchPlayerTurn();
    render();
    checkWinner();
  }
}

// Check for a winner
function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      boardFunction[i][0] == "X" &&
      boardFunction[i][1] == boardFunction[i][0] &&
      boardFunction[i][1] == boardFunction[i][2]
    ) {
      status.innerText = "Player Two Wins!";
      isEnd = true;
    } else if (
      boardFunction[i][0] == "O" &&
      boardFunction[i][1] == boardFunction[i][0] &&
      boardFunction[i][1] == boardFunction[i][2]
    ) {
      status.innerText = "Player One Wins!";
      isEnd = true;
    }
    if (
      boardFunction[0][i] == "X" &&
      boardFunction[1][i] == boardFunction[0][i] &&
      boardFunction[1][i] == boardFunction[2][i]
    ) {
      status.innerText = "Player Two Wins!";
      isEnd = true;
    } else if (
      boardFunction[0][i] == "O" &&
      boardFunction[1][i] == boardFunction[0][i] &&
      boardFunction[1][i] == boardFunction[2][i]
    ) {
      status.innerText = "Player One Wins!";
      isEnd = true;
    }
  }
  if (
    boardFunction[0][0] == "X" &&
    boardFunction[1][1] == boardFunction[0][0] &&
    boardFunction[2][2] == boardFunction[1][1]
  ) {
    status.innerText = "Player Two Wins!";
    isEnd = true;
  }
  if (
    boardFunction[0][2] == "X" &&
    boardFunction[1][1] == boardFunction[0][2] &&
    boardFunction[2][0] == boardFunction[1][1]
  ) {
    status.innerText = "Player Two Wins!";
    isEnd = true;
  }
  if (
    boardFunction[0][0] == "O" &&
    boardFunction[1][1] == boardFunction[0][0] &&
    boardFunction[2][2] == boardFunction[1][1]
  ) {
    status.innerText = "Player One Wins!";
    isEnd = true;
  }
  if (
    boardFunction[0][2] == "O" &&
    boardFunction[1][1] == boardFunction[0][2] &&
    boardFunction[2][0] == boardFunction[1][1]
  ) {
    status.innerText = "Player One Wins!";
    isEnd = true;
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
    status.innerText = "Draw!";
    isEnd = true;
  }
}

function render() {
  if (isEnd) return;
  startBtn.style.display = "none";
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
  }
}

// Restart function
function restart() {
  isEnd = false;
  status.innerText = "";
  for (let i = 0; i < boardFunction.length; i++) {
    for (let j = 0; j < boardFunction.length; j++) {
      boardFunction[i][j] = "";
    }
  }
  activePlayer = players[0].marker;
  render();
}

// Event listeners
startBtn.addEventListener("click", render);
gameboard.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) return;
  const i = e.target.getAttribute("data-i");
  const j = e.target.getAttribute("data-j");
  placeMark(i, j);
});
resBtn.addEventListener("click", restart);
