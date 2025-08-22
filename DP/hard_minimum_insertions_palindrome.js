/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  let len = s.length;
  let dp = Array.from({ length: len }).fill(0);
    for (let i = 1; i < len; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (s[i] === s[j]) {
                dp[i] = dp[j] + dp[i-1]
            }
            else {
                dp[i] = dp[i-1] + 1
            }
        }
    }
  console.table(dp);
};

console.log(minInsertions("zzazz")); //0
console.log(minInsertions("mbadm")); //2
console.log(minInsertions("leetcode")); //5

/*
Given a string s. In one step you can insert any character at any index of the string.

Return the minimum number of steps to make s palindrome.

A Palindrome String is one that reads the same backward as well as forward.
*/
