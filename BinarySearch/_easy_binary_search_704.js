/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0, end = nums.length - 1;
	while (start <= end) {
		let mid = start + Math.floor((end - start) / 2);
		if (nums[mid] === target) return mid;
		if (nums[mid] > target) end = mid - 1;
		else start = mid + 1;
	}
	return -1
};

let nums = [-1,0,3,5,9,12], target = 9
console.log(search(nums, target)); //4

nums = [-1,0,3,5,9,12], target = 2
console.log(search(nums, target)); //-1

/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
 * */
