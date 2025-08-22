/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let cost_matrix = Array.from({ length: rows }, () => Array(cols).fill(0))
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++) {
          cost_matrix[i][j] = grid[i][j];
            if (i - 1 >= 0 && j - 1 >= 0) {
                cost_matrix[i][j] += Math.min(cost_matrix[i - 1][j], cost_matrix[i][j - 1]);
            } else if (i - 1 >= 0) {
                cost_matrix[i][j] += cost_matrix[i - 1][j];
            } else if (j - 1 >= 0) { cost_matrix[i][j] += cost_matrix[i][j - 1] };
        }
    }
    return cost_matrix[rows-1][cols-1]
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
); //7

/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, 
which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/