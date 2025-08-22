/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function (n, x) {
    let availableNumbers = []
    let counter = 1
    while (Math.pow(counter, x) <= n) {
        availableNumbers.push(Math.pow(counter, x))
        counter++;
    }
    console.log(availableNumbers)
    let dp = Array.from({ length: n+1 }).fill(0)
    dp[0] = 1
    for (const p of availableNumbers) {
        for (let s = n; s >= p; --s){
            console.log(s)
            console.table(dp)
            dp[s] = (dp[s] + dp[s-p]) % 1000000007
        }
    }
    return dp[n]
};

// 1 <= n <= 300
// 2 <= x <= 5

console.log(numberOfWays(10, 2)) //1
console.log(numberOfWays(4, 1)) //2

/*
Given two positive integers n and x.

Return the number of ways n can be expressed as the sum of the xth power of unique positive integers, in other words, the number of sets of unique integers [n1, n2, ..., nk] where n = n1x + n2x + ... + nkx.

Since the result can be very large, return it modulo 109 + 7.

For example, if n = 160 and x = 3, one way to express n is n = 23 + 33 + 53.
*/