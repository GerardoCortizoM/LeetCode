/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  let dp = Array.from({ length: nums.length }).fill(1);
  let curr_count = 0;
  for (let i = 1; i < nums.length; i++) {
    let curr_max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        if (dp[j] > curr_max) {
          curr_max = dp[j];
          curr_count = 1;
        } else if (dp[j] === curr_max) {
          curr_count++;
        }
      }
    }
    dp[i] = curr_max + 1;
    curr_max++;
  }
  console.log(dp)
  return curr_count;
};

console.log(findNumberOfLIS([1, 3, 5, 4, 7])); //2
console.log(findNumberOfLIS([2, 2, 2, 2, 2])); //5

/*
Given an integer array nums, return the number of longest increasing subsequences.

Notice that the sequence has to be strictly increasing.
*/
