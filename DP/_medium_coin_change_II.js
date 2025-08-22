/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    if (amount === 0) return 1
    let dp = Array.from({ length: amount + 1 }).fill(0)
    for (let coin of coins) {
        dp[coin] += 1
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i-coin]
        }
    }
    return dp[amount]
};

let amount = 5,
    coins = [1, 2, 5];

console.log(change(amount, coins)) //4

amount = 3, coins = [2]
console.log(change(amount, coins)) //0

amount = 10, coins = [10]
console.log(change(amount, coins)) //1


/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.
*/