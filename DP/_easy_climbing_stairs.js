/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 3) return n;
    let dp = Array.from({ length: n }).fill(0)
    dp[0] = 1
    dp[1] = 2
    for (let i = 2; i < n; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n - 1];
};

console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(5))

/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/
