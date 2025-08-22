/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 1; i < m + 1; i++) {
        dp[i][0] = i;
    }
    for (let j = 1; j < n + 1; j++) {
        dp[0][j] = j;
    }
    console.table(dp)

    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            console.log("i: " + i + " | j: " + j)
            console.table(dp)
            if (word1[i-1] === word2[j-1]) dp[i][j] = dp[i-1][j-1]
            else dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) + 1
        }
    }
    console.table(dp)
    return dp[m][n]
};

console.log(minDistance("horse", "ros")); //3
// console.log(minDistance("intention", "execution")); //5

/*
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character
*/