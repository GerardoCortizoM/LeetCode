/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = Array(n+1).fill(0)
    dp[0] = 1
    for (let i = 1; i <= n; i++) {
        for (let j = i; j >= 1; j--) {
            dp[i] += dp[i-j] * dp[j-1]
        }
    }
    return dp[n]
};

console.log(numTrees(1)) //1
console.log(numTrees(2)) //2
console.log(numTrees(3)) //5
console.log(numTrees(4)) //14