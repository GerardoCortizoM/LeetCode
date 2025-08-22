/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let curr = 0;
    let res = 0
    for (let num of nums) {
        if (num === 0) curr++;
        else {
            res += (curr * (curr + 1)) / 2
            curr = 0;
        }
    }
    return curr !== 0 ? res += (curr * (curr + 1)) / 2 : res
};

console.log(zeroFilledSubarray([1,3,0,0,2,0,0,4])) //6
console.log(zeroFilledSubarray([0,0,0,2,0,0])) //9
console.log(zeroFilledSubarray([2,10,2019])) //0

/*
Given an integer array nums, return the number of subarrays filled with 0.

A subarray is a contiguous non-empty sequence of elements within an array.
*/