var numDistinct = function (s, t) {
  let m = s.length;
  let n = t.length;
  let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
      } else {
        dp[i][j] = dp[i - 1][j];
      }

  return dp[m][n];
};

console.log(numDistinct("rabbbit", "rabbit")); //3
console.log(numDistinct("babgbag", "bag")); //5
console.log(numDistinct("rabbbit", "rabbit")); //3

/*
Given two strings s and t, return the number of distinct subsequences of s which equals t.

The test cases are generated so that the answer fits on a 32-bit signed integer.
*/
