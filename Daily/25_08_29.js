/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(grid) {
	let rows = grid.length, cols = grid[0].length;
	let sortedMatrix = Array.from({ length: rows }, () => Array(cols).fill(0))
	for (let i = 0; i < rows; i++) {
		let diag = [];
		let r = i, c = 0;
		while (r < rows) {
			diag.push(grid[r][c]);
			++r;
			++c;
		}
		diag.sort((a, b) => b - a);
		r = i, c = 0
		while (r < rows) {
			sortedMatrix[r][c] = diag[0];
			diag.shift()
			++r;
			++c;
		}
	}
	for (let j = 1; j < cols; j++) {
		let diag = [];
		let r = 0, c = j;
		while (c < cols) {
			diag.push(grid[r][c]);
			++r;
			++c;
		}
		diag.sort((a, b) => a - b);
		r = 0, c = j
		while (c < cols) {
			sortedMatrix[r][c] = diag[0];
			diag.shift()
			++r;
			++c;
		}
	}
	return sortedMatrix;
};

let grid = [[1,7,3],[9,8,2],[4,5,6]];
console.log(sortMatrix(grid)) //[[8,2,3],[9,6,7],[4,5,1]]

grid = [[0,1],[1,2]]
console.log(sortMatrix(grid)) //[[2,1],[1,0]]

grid = [[1]]
console.log(sortMatrix(grid)) //[[1]]

/*
You are given an n x n square matrix of integers grid. Return the matrix such that:

The diagonals in the bottom-left triangle (including the middle diagonal) are sorted in non-increasing order.
The diagonals in the top-right triangle are sorted in non-decreasing order.
*/
