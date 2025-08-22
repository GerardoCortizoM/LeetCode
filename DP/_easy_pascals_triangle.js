/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let dp = Array.from({ length: numRows })
    dp[0] = [1]
    for (let i = 1; i < numRows; i++){
        dp[i] = Array.from({ length: dp[i-1].length + 1}).fill(1)
        for (let j = 1; j < dp[i].length - 1; j++){
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
    }
    return dp;
};

console.log(generate(1))
console.log(generate(2))
console.log(generate(3))
console.log(generate(6))

/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/