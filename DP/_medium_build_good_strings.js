/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
  const MOD = 1e9 + 7;
  let dp = Array(high + Math.max(zero, one)).fill(0);
  dp[zero]++;
  dp[one]++;
  let sum = 0;
  for (let i = 1; i < high + 1; i++) {
    if (dp[i] !== 0) {
      dp[i + zero] = (dp[i + zero] + dp[i]) % MOD;
      dp[i + one] = (dp[i + one] + dp[i]) % MOD;
    }
    if (i >= low) sum = (sum + dp[i]) % MOD;
  }
  return sum;
};

let low = 3,
  high = 3,
  zero = 1,
  one = 1;
console.log(
  countGoodStrings(low, high, zero, one) === 8 ? "Success!" : "Failure :("
); //8

(low = 2), (high = 3), (zero = 1), (one = 2);
console.log(
  countGoodStrings(low, high, zero, one) === 5 ? "Success!" : "Failure :("
); //5

(low = 500), (high = 500), (zero = 5), (one = 2);
console.log(
  countGoodStrings(low, high, zero, one) === 873327137
    ? "Success!"
    : "Failure :("
); //764262396

/*
Given the integers zero, one, low, and high, we can construct a string by starting with an empty string, and then at each step perform either of the following:

Append the character '0' zero times.
Append the character '1' one times.
This can be performed any number of times.

A good string is a string constructed by the above process having a length between low and high (inclusive).

Return the number of different good strings that can be constructed satisfying these properties. Since the answer can be large, return it modulo 109 + 7.
*/
