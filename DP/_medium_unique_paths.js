/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const matrix = Array.from({ length: m }, () => Array(n).fill(0));;
    matrix[0][0] = 1;
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if (i + 1 < m) {
                matrix[i + 1][j] += matrix[i][j]; 
            }
            if (j + 1 < n) {
                matrix[i][j + 1] += matrix[i][j]; 
            }
        }
    }
    return matrix[m-1][n-1]
};

console.log(uniquePaths(3, 7)) // 28

/*
There is a robot on an m x n grid.
    The robot is initially located at the top-left corner (i.e., grid[0][0]).
    The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). 
    The robot can only move either down or right at any point in time.

Given the two integers m and n, 
    return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.
*/