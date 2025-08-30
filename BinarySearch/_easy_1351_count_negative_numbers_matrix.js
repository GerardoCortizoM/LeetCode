/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
	let rows = grid.length, cols = grid[0].length;
	let res = 0;
	for (let i = 0; i < rows; i++) {
		res += bs(grid[i]);
	}
	return res;
}

var bs = function(nums) {
	let len = nums.length;
	let start = 0, end = len - 1;
	let mid = 0
	while (start < end) {
		mid = start + Math.floor((end - start) / 2);
		if (nums[mid] >= 0) start = mid + 1;
		else end = mid;
	}
	if (end === len - 1 && nums[end] >= 0) return 0
	return len - end
}

let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
console.log(countNegatives(grid)); //8

grid = [[3,2],[1,0]]
console.log(countNegatives(grid)); //0

