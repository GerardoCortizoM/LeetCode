/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function (n, k, maxPts) {
  if (n >= k + maxPts || k === 0) return 1.0;
  let dp = Array.from({ length: n + 1 }).fill(0);
  dp[0] = 1.0;
  let wSum = 1.0;
  for (let i = 1; i < n + 1; i++) {
    dp[i] = wSum / maxPts;
    if (i < k) wSum += dp[i];
    if (i - maxPts >= 0) wSum -= dp[i - maxPts];
  }
  const sum = dp
    .slice(k, n + 1) 
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
};

console.log(new21Game(10, 1, 10)); //1.0
console.log(new21Game(6, 1, 10)); //0.6
console.log(new21Game(21, 17, 10)); //0.73278

/*
Alice plays the following game, loosely based on the card game "21".

Alice starts with 0 points and draws numbers while she has less than k points. 
    During each draw, she gains an integer number of points randomly from the range [1, maxPts], where maxPts is an integer. 
    Each draw is independent and the outcomes have equal probabilities.

Alice stops drawing numbers when she gets k or more points.

Return the probability that Alice has n or fewer points.

Answers within 10-5 of the actual answer are considered accepted.
*/
