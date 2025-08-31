/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    const rows = checkRow(board, i);
    if (!rows) return false;
  }

  for (let j = 0; j < 9; j++) {
    const cols = checkCol(board, j);
    if (!cols) return false;
  }

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const square = checkSquare(board, i, j);
      if (!square) return false;
    }
  }
  return true;
};

function checkRow(board, r) {
  const rowSet = new Set();
  for (element of board[r]) {
    if (element !== "." && rowSet.has(element)) return false;
    rowSet.add(element);
  }
  return true;
}

function checkCol(board, c) {
  const colSet = new Set();
  for (row of board) {
    if (row[c] !== "." && colSet.has(row[c])) return false;
    colSet.add(row[c]);
  }
  return true;
}

function checkSquare(board, i, j) {
  const squareSet = new Set();
  for (let r = i; r < i + 3; r++) {
    for (let c = j; c < j + 3; c++) {
      if (board[r][c] !== "." && squareSet.has(board[r][c])) return false;
      squareSet.add(board[r][c]);
    }
  }
  return true;
}

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board)); //true

board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board)); //false

/*
 Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.*/
