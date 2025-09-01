/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  let start = 0,
    end = nums.length - 1;
  let mid = 0;
  while (start < end) {
    mid = start + Math.floor((end - start) / 2);
    if (nums[mid] <= nums[end]) {
      if (nums[mid] === nums[end] && nums[mid] === nums[start]) {
        start++;
        end--;
      } else end = mid;
    } else {
      start = mid + 1;
    }
  }
  return nums[end];
};

let nums = [1, 3, 5];
console.log(findMin(nums)); //1

nums = [2, 2, 2, 0, 1];
console.log(findMin(nums)); //0

nums = [1, 1, 1, 1, 1];
console.log(findMin(nums)); //1

nums = [3, 1, 2];
console.log(findMin(nums)); //1

nums = [3, 1, 1, 2];
console.log(findMin(nums)); //1

nums = [4, 4, 1, 4];
console.log(findMin(nums)); //1

/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:

[4,5,6,7,0,1,4] if it was rotated 4 times.
[0,1,4,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.

You must decrease the overall operation steps as much as possible.
*/
