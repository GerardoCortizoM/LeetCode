/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
    let dp = {}
    let maximum = 1
    for (let n of arr) {
        if (n - difference in dp) {
            dp[n] = dp[n-difference] + 1
        }
        else {
            dp[n] = 1
        }
        if (maximum < dp[n]) maximum = dp[n]
    }
    return maximum;
};

console.log(longestSubsequence([1, 2, 3, 4], 1)); //4
console.log(longestSubsequence([1, 3, 5, 7], 1)); //1
console.log(longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2)); //4

/*
Given an integer array arr and an integer difference, 
    return the length of the longest subsequence in arr which is an arithmetic sequence such that the difference between adjacent elements in the subsequence equals difference.

A subsequence is a sequence that can be derived from arr by deleting some or no elements without changing the order of the remaining elements.
*/
