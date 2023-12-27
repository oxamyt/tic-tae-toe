// Selectors
const gameboard = document.querySelector(".gameboard");
const status = document.querySelector(".status");
const cell = document.querySelector(".cell");
const startBtn = document.querySelector(".start");
const resBtn = document.querySelector(".restartbtn");

// Create the game GameBoard
const GameBoard = (() => {
  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  // Get Board Function
  const getBoard = () => board;

  // Reset Board Function
  const resetBoard = () => {
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  };

  return {
    getBoard,
    resetBoard,
  };
})();

// Create player factory function
const Player = (() => {
  function createPlayer(name, marker) {
    return {
      name,
      marker,
    };
  }

  return {
    createPlayer,
  };
})();

// Game controller
const gameController = (() => {
  const players = [
    Player.createPlayer("Player One", "O"),
    Player.createPlayer("Player Two", "X"),
  ];

  // Active player variable
  let activePlayer = players[0].marker;

  // Is end variable
  let isEnd = false;

  // Turn function
  const switchPlayerTurn = () => {
    activePlayer =
      activePlayer === players[0].marker
        ? players[1].marker
        : players[0].marker;
    return activePlayer;
  };

  // Place the player's mark
  const placeMark = (row, col) => {
    if (isEnd) return;
    const board = GameBoard.getBoard();
    if (board[row][col].length === 0) {
      board[row][col] = switchPlayerTurn();
      render();
      checkWinner();
    }
  };

  // Check for a winner
  const checkWinner = () => {
    const board = GameBoard.getBoard();
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] == "X" &&
        board[i][1] == board[i][0] &&
        board[i][1] == board[i][2]
      ) {
        status.innerText = "Player Two Wins!";
        isEnd = true;
      } else if (
        board[i][0] == "O" &&
        board[i][1] == board[i][0] &&
        board[i][1] == board[i][2]
      ) {
        status.innerText = "Player One Wins!";
        isEnd = true;
      }
      if (
        board[0][i] == "X" &&
        board[1][i] == board[0][i] &&
        board[1][i] == board[2][i]
      ) {
        status.innerText = "Player Two Wins!";
        isEnd = true;
      } else if (
        board[0][i] == "O" &&
        board[1][i] == board[0][i] &&
        board[1][i] == board[2][i]
      ) {
        status.innerText = "Player One Wins!";
        isEnd = true;
      }
    }
    if (
      board[0][0] == "X" &&
      board[1][1] == board[0][0] &&
      board[2][2] == board[1][1]
    ) {
      status.innerText = "Player Two Wins!";
      isEnd = true;
    }
    if (
      board[0][2] == "X" &&
      board[1][1] == board[0][2] &&
      board[2][0] == board[1][1]
    ) {
      status.innerText = "Player Two Wins!";
      isEnd = true;
    }
    if (
      board[0][0] == "O" &&
      board[1][1] == board[0][0] &&
      board[2][2] == board[1][1]
    ) {
      status.innerText = "Player One Wins!";
      isEnd = true;
    }
    if (
      board[0][2] == "O" &&
      board[1][1] == board[0][2] &&
      board[2][0] == board[1][1]
    ) {
      status.innerText = "Player One Wins!";
      isEnd = true;
    }
    if (
      board[0][0] !== "" &&
      board[0][1] !== "" &&
      board[0][2] !== "" &&
      board[1][0] !== "" &&
      board[1][1] !== "" &&
      board[1][2] !== "" &&
      board[2][0] !== "" &&
      board[2][1] !== "" &&
      board[2][2] !== ""
    ) {
      status.innerText = "Draw!";
      isEnd = true;
    }
  };

  // Render Function
  function render() {
    if (isEnd) return;
    const board = GameBoard.getBoard();
    startBtn.style.display = "none";
    gameboard.innerHTML = "";
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        let cellMark = board[i][j];
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
  const restart = () => {
    isEnd = false;
    status.innerText = "";
    GameBoard.resetBoard();
    activePlayer = players[0].marker;
    render();
  };

  return {
    placeMark,
    restart,
    render,
  };
})();

// Event listeners
startBtn.addEventListener("click", gameController.render);
gameboard.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) return;
  const i = e.target.getAttribute("data-i");
  const j = e.target.getAttribute("data-j");
  gameController.placeMark(i, j);
});
resBtn.addEventListener("click", gameController.restart);
