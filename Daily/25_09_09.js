/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function (n, delay, forget) {
    const MOD = 1000000007;
    let dp = Array(n + 1).fill(0);
    dp[1] = 1;
    let res = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = i + delay; j < Math.min(i + forget, n + 1); j++) {
            dp[j] += dp[i];
        }
        if (i + forget <= n) dp[i] = 0;
        res += dp[i] % MOD;
    }
    return res % MOD;
};

//let n = 6, delay = 2, forget = 4;
//console.log(peopleAwareOfSecret(n, delay, forget)); //5
//n = 4, delay = 1, forget = 3;
//console.log(peopleAwareOfSecret(n, delay, forget)); //6

n = 684, delay = 18, forget = 496;
console.log(peopleAwareOfSecret(n, delay, forget)); //653668527
/*
On day 1, one person discovers a secret.

You are given an integer delay, which means that each person will share the secret with a new person every day, starting from delay days after discovering the secret. You are also given an integer forget, which means that each person will forget the secret forget days after discovering it. A person cannot share the secret on the same day they forgot it, or on any day afterwards.

Given an integer n, return the number of people who know the secret at the end of day n. Since the answer may be very large, return it modulo 109 + 7.
    */
