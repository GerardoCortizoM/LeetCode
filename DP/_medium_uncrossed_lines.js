/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    let m = nums1.length + 1;
    let n = nums2.length + 1;
    let dp = Array.from({ length: m }, () => Array(n).fill(0))
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            }
            else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[m-1][n-1]
};

console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4])); //2
console.log(maxUncrossedLines([2,5,1,2,5], [10,5,2,1,5,2])); //3
console.log(maxUncrossedLines([1,3,7,1,7,5], [1,9,2,5,1])); //2

/*
You are given two integer arrays nums1 and nums2. We write the integers of nums1 and nums2 (in the order they are given) on two separate horizontal lines.

We may draw connecting lines: a straight line connecting two numbers nums1[i] and nums2[j] such that:

nums1[i] == nums2[j], and
the line we draw does not intersect any other connecting (non-horizontal) line.
Note that a connecting line cannot intersect even at the endpoints (i.e., each number can only belong to one connecting line).

Return the maximum number of connecting lines we can draw in this way.
*/

//https://leetcode.com/problems/uncrossed-lines/description/?envType=study-plan-v2&envId=dynamic-programming