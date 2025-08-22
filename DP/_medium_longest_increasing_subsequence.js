/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = Array.from({ length: nums.length }).fill(1)
    let maximum = 1;
    for (let i = 1; i < nums.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] > nums[j]) dp[i] = dp[i] <= dp[j] ? dp[j] + 1 : dp[i]
        }
        maximum = maximum < dp[i] ? dp[i] : maximum
    }
    return maximum
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18])) //4
console.log(lengthOfLIS([0,1,0,3,2,3])) //4
console.log(lengthOfLIS([7,7,7,7,7,7,7])) //1

/*
Given an integer array nums, return the length of the longest strictly increasing subsequence.
*/