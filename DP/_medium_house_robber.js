/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length < 3) return Math.max(...nums);
  let dp = Array.from({ length: nums.length });
  dp[0] = nums[0];
  dp[1] = nums[1];
  dp[2] = nums[2] + dp[0]
  for (let i = 3; i < nums.length; i++) {
    dp[i] = nums[i] + Math.max(dp[i - 2], dp[i - 3]);
  }
  return Math.max(dp[dp.length - 1], dp[dp.length - 2]);
};

console.log(rob([1, 2, 3, 1])); //4
console.log(rob([2, 7, 9, 3, 1])); //12
console.log(rob([0])); //0
console.log(rob([1,2])); //2
console.log(rob([1])); //1
console.log(rob([2, 1, 1, 2])); //4

/*
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed,
 the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
*/