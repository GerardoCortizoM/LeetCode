/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let dp = Array.from({ length: rows }, () => Array(cols).fill(0))
    for (let r = 0; r < rows; r++){
      for (let c = 0; c < cols; c++) {
        let idx_to_use = [];
        if (r !== 0) {
          idx_to_use.push(dp[r - 1][c]);
          if (c !== 0) idx_to_use.push(dp[r - 1][c - 1]);
          if (c !== cols - 1) idx_to_use.push(dp[r - 1][c + 1]);
        }
        dp[r][c] = matrix[r][c];
        if (idx_to_use.length > 0) dp[r][c] += Math.min(...idx_to_use);
      }
    }
    return Math.min(...dp[rows-1])
};

console.log(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ])
); //13

console.log(
  minFallingPathSum([
    [-19, 57],
    [-40, -5],
  ])
); //-59

/*
Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or 
    diagonally left/right.
    Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).
*/