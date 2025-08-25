/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let len = nums.length
  let totalCount = 0,
    currCount = 0,
    res = 0;
  for (let num of nums) {
    if (num === 1) {
      currCount++;
      totalCount++;
      continue;
    }
    if (totalCount === currCount) {
      currCount = 0;
      continue;
    }
    res = Math.max(res, totalCount);
    totalCount = currCount;
    currCount = 0;
  }
  res = Math.max(res, totalCount);
  return res === len ? res - 1 : res;
};

let nums = [1, 1, 0, 1];
console.log(longestSubarray(nums) === 3 ? "Success!" : "Failure :(");

nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];
console.log(longestSubarray(nums) === 5 ? "Success!" : "Failure :(");

nums = [1, 1, 1];
console.log(longestSubarray(nums) === 2 ? "Success!" : "Failure :(");

/*
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.
*/
