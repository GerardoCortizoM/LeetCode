/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) return mid;
    if (nums[start] <= nums[mid]) {
      if (nums[mid] > target && nums[start] <= target) end = mid - 1;
      else start = mid + 1;
    } else {
      if (nums[mid] < target && nums[end] >= target) start = mid + 1;
      else end = mid - 1;
    }
  }
  return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
console.log(search(nums, target)); //4

((nums = [4, 5, 6, 7, 0, 1, 2]), (target = 3));
console.log(search(nums, target)); //-1

((nums = [1]), (target = 0));
console.log(search(nums, target)); //-1

((nums = [5, 1, 3]), (target = 5));
console.log(search(nums, target)); //0
console.log(search([3, 1], 1)); //1

/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
 */
