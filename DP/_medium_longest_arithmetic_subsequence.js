/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
  let dp = {};
  let maximum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (dp[i] == null) dp[i] = {};
      for (let j = 0; j < i; j++) {
          let difference = nums[i] - nums[j];
          dp[i][difference] = 1 + (dp[j][difference] || 1);
          if (maximum < dp[i][difference]) maximum = dp[i][difference]
    }
  }
  return maximum;
};

// {
//   idx: {
//     diff: len;
//   }
// }

console.log(longestArithSeqLength([3, 6, 9, 12])); //4
console.log(longestArithSeqLength([9, 4, 7, 2, 10])); //3
console.log(longestArithSeqLength([20, 1, 15, 3, 10, 5, 8])); //4
console.log(longestArithSeqLength([83, 20, 17, 43, 52, 78, 68, 45])); //2
console.log(
  longestArithSeqLength([
    44, 46, 22, 68, 45, 66, 43, 9, 37, 30, 50, 67, 32, 47, 44, 11, 15, 4, 11, 6,
    20, 64, 54, 54, 61, 63, 23, 43, 3, 12, 51, 61, 16, 57, 14, 12, 55, 17, 18,
    25, 19, 28, 45, 56, 29, 39, 52, 8, 1, 21, 17, 21, 23, 70, 51, 61, 21, 52,
    25, 28,
  ]) //6
);

/*
Given an array nums of integers, return the length of the longest arithmetic subsequence in nums.

Note that:

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
A sequence seq is arithmetic if seq[i + 1] - seq[i] are all the same value (for 0 <= i < seq.length - 1).
*/
