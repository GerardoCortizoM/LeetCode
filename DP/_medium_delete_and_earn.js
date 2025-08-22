/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let values = Array.from({ length: 10001 }).fill(0)
    for (num of nums) {
        values[num] += num;
    }
    let take = 0;
    let skip = 0;
    for (let i = 0; i < 10001; i++){
        let take_i = values[i] + skip;
        let skip_i = Math.max(skip, take);
        take = take_i;
        skip = skip_i;
    }
    return Math.max(take, skip)
};

console.log(deleteAndEarn([3, 4, 2])); //6
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4])); //9

/*
You are given an integer array nums. 
You want to maximize the number of points you get by performing the following operation any number of times:

Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
Return the maximum number of points you can earn by applying the above operation some number of times.
*/