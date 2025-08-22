/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let dp = Array.from({ length: m }, () => Array(n).fill(0));
    let ans = 0

    for (let i = 0; i < m; i++) {
        dp[i][0] = matrix[i][0]
        ans += dp[i][0]
    }
    for (let j = 1; j < n; j++) {
        dp[0][j] = matrix[0][j]
        ans += dp[0][j]
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 1) {
                dp[i][j] = 1 + Math.min(
                    dp[i-1][j],
                    dp[i][j-1],
                    dp[i-1][j-1]
                )
                ans += dp[i][j]
            }
        }
    }
    console.table(dp)
    return ans;
};

console.log(countSquares([
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
])) //15
console.log(countSquares([
  [1,0,1],
  [1,1,0],
  [1,1,0]
])) //7

/*
Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.
*/