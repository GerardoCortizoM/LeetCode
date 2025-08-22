/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0
    let rows = obstacleGrid.length;
    let cols = obstacleGrid[0].length;
    let dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    dp[0][0] = 1
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (obstacleGrid[i][j] === 1) continue;
        if (i - 1 >= 0) {
          dp[i][j] += dp[i - 1][j];
        }
        if (j - 1 >= 0) {
          dp[i][j] += dp[i][j-1];
        }
      }
    }
    return dp[rows-1][cols-1]
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
); //2
console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ])
); //1

console.log(uniquePathsWithObstacles([[1]]));
/*
You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to 2 * 109.
*/