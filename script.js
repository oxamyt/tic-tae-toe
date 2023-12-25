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
// Start from making board
// Make game control
// Make player input feature.








// Create the game board
const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// Display the game board
function displayBoard() {
  console.clear(); // Clear the console for a clean display
  for (let i = 0; i < 3; i++) {
    console.log("-----------");
    console.log(
      " | " + board[i][0] + " | " + board[i][1] + " | " + board[i][2] + " | "
    );
  }
}


// Place the player's mark
function placeMark() {
  const players = [
    {
      name: 'playerOne',
      marker: 'O',
    },
    {
      name: 'playerTwo',
      marker: 'X',
    },
  ];

let activePlayer = players[0].marker;

const switchPlayerTurn = function() {
  activePlayer = activePlayer === players[0].marker ? players[1].marker : players[0].marker;
  return activePlayer
};
  let row = prompt("Which row?");
  let col = prompt("Which column?");
  if (board[row][col].length === 0){
  let mark = switchPlayerTurn()
  board[row][col] = mark;
  displayBoard()
  checkWinner()
  }
  else { alert('It`s occupied')}
}




// Check for a winner
function checkWinner() {
  if (board[0][0] == 'X'&& board[0][1] == 'X' && board[0][2] == 'X' ){
    alert('You won!')
  }
  else if (board[1][0] == 'X'&& board[1][1] == 'X' && board[1][2] == 'X' ){
    alert('You won!')
  }
  else if (board[2][0] == 'X'&& board[2][1] == 'X' && board[2][2] == 'X' ){
    alert('You won!')
  }
  else if (board[0][0] == 'X'&& board[1][0] == 'X' && board[2][0] == 'X' ){
    alert('You won!')
  }
  else if (board[0][1] == 'X'&& board[1][1] == 'X' && board[2][1] == 'X' ){
    alert('You won!')
  }
  else if (board[0][2] == 'X'&& board[1][2] == 'X' && board[2][2] == 'X' ){
    alert('You won!')
  }
  else if (board[0][0] == 'O'&& board[0][1] == 'O' && board[0][2] == 'O' ){
    alert('You won!')
  }
  else if (board[1][0] == 'O'&& board[1][1] == 'O' && board[1][2] == 'O' ){
    alert('You won!')
  }
  else if (board[2][0] == 'O'&& board[2][1] == 'O' && board[2][2] == 'O' ){
    alert('You won!')
  }
  else if (board[0][0] == 'O'&& board[1][0] == 'O' && board[2][0] == 'O' ){
    alert('You won!')
  }
  else if (board[0][1] == 'O'&& board[1][1] == 'O' && board[2][1] == 'O' ){
    alert('You won!')
  }
  else if (board[0][2] == 'O'&& board[1][2] == 'O' && board[2][2] == 'O' ){
    alert('You won!')
  }
  else if (board[0][0] !== ''&& board[0][1] !== '' && board[0][2] !== '' && board[1][0] !== ''
           && board[1][1] !== '' && board[1][2] !== '' && board[2][0] !== '' && board[2][1] !== ''
           && board[2][2] !== '' ){
    alert("Draw!")
  }
}

const btn = document.querySelector('.s');
btn.addEventListener('click', placeMark)
