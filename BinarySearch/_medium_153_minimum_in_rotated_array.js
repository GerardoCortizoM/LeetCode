/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let start = 0,
    end = nums.length - 1;
  let mid = 0;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if (nums[mid] < nums[end]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return nums[mid];
};

let nums = [3, 4, 5, 1, 2];
console.log(findMin(nums)); //1

nums = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(nums)); //0

nums = [11, 13, 15, 17];
console.log(findMin(nums)); //11

nums = [5, 1, 2, 3, 4];
console.log(findMin(nums)); //1

nums = [3, 1, 2];
console.log(findMin(nums)); //1
