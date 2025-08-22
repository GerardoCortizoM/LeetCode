/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let dp = Array.from({ length: text1.length+1 }, () => Array(text2.length + 1).fill(0))
    for (let i = 1; i < text1.length+1; i++) {
        for (let j = 1; j < text2.length+1; j++) {
            dp[i][j] = text1[i-1] === text2[j-1] ? (dp[i-1][j-1]||0) + 1 : Math.max(dp[i-1][j], dp[i][j-1])
        }
    }
    return dp[text1.length][text2.length]
};

console.log(longestCommonSubsequence("abcde", "ace")) //3
console.log(longestCommonSubsequence("abc", "abc")); //3
console.log(longestCommonSubsequence("abc", "def")) //0

/*
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.
*/