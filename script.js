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

// Display the game boardFunction
function displayBoard() {
  console.clear(); // Clear the console for a clean display
  for (let i = 0; i < 3; i++) {
    console.log("-----------");
    console.log(
      " | " +
        boardFunction[i][0] +
        " | " +
        boardFunction[i][1] +
        " | " +
        boardFunction[i][2] +
        " | "
    );
  }
}

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
function placeMark() {
  let row = prompt("Which row?");
  let col = prompt("Which column?");
  if (boardFunction[row][col].length === 0) {
    boardFunction[row][col] = mark = switchPlayerTurn();
    displayBoard();
    render();
    checkWinner();
  } else {
    alert("It`s occupied");
    render()
  }
}

// Check for a winner
function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (boardFunction[i][0] != "")
      if (
        boardFunction[i][0] == "X" &&
        boardFunction[i][1] == boardFunction[i][0] &&
        boardFunction[i][1] == boardFunction[i][2]
      ) {
        alert(`Player Two Won!`);
      } else if (
        boardFunction[i][0] == "O" &&
        boardFunction[i][1] == boardFunction[i][0] &&
        boardFunction[i][1] == boardFunction[i][2]
      ) {
        alert(`Player One Won!`);
      }
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
    alert(`Draw!`);
  }
}

function render(){
  const gameboard = document.querySelector('.gameboard');
  gameboard.innerHTML = '';
  for(let i = 0; i < boardFunction.length; i++){
    let cellMark = boardFunction[0][i];
    let cell = document.createElement ('div');
    cell.innerHTML = `<div class='cell'>${cellMark}</div>`
    gameboard.appendChild(cell);
  }
  for(let i = 0; i < boardFunction.length; i++){
    let cellMark = boardFunction[1][i];
    let cell = document.createElement ('div');
    cell.innerHTML = `<div class='cell'>${cellMark}</div>`
    gameboard.appendChild(cell);
  }
  for(let i = 0; i < boardFunction.length; i++){
    let cellMark = boardFunction[2][i];
    let cell = document.createElement ('div');
    cell.innerHTML = `<div class='cell'>${cellMark}</div>`
    gameboard.appendChild(cell);
  }
}


const btn = document.querySelector(".s");
btn.addEventListener("click", placeMark);
