/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0, end = nums.length - 1;
	let mid = 0
	while (start <= end){
		mid = start + Math.floor((end - start) / 2);
		if (nums[mid] === target) return mid;
		if (nums[mid] > target) end = mid - 1;
		else start = mid+1;
	}
	return nums[mid] > target ? mid : mid + 1;
};

let nums = [1,3,5,6], target = 5
console.log(searchInsert(nums, target)); //2

nums = [1,3,5,6], target = 2
console.log(searchInsert(nums, target)); //1

nums = [1,3,5,6], target = 7
console.log(searchInsert(nums, target)); //4

nums = [1,3,5,6], target = 0;
console.log(searchInsert(nums, target)); //0
