/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let r = 0,
    c = 0;
  let rows = mat.length,
    cols = mat[0].length;
  let dir = 1;
  let res = Array(rows * cols);
  for (let i = 0; i < res.length; i++) {
    res[i] = mat[r][c];
    if (dir === 1) {
      if (c === cols - 1) {
        r++;
        dir = 0;
      } else if (r === 0) {
        c++;
        dir = 0;
      } else {
        c++;
        r--;
      }
    } else {
      if (r === rows - 1) {
        c++;
        dir = 1;
      } else if (c === 0) {
        r++;
        dir = 1;
      } else {
        r++;
        c--;
      }
    }
  }
  return res;
};

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(
  findDiagonalOrder(mat) == [1, 2, 4, 7, 5, 3, 6, 8, 9] ? "Success!" : "Fail"
);

mat = [
  [1, 2],
  [3, 4],
];
console.log(findDiagonalOrder(mat) == [1, 2, 3, 4] ? "Success!" : "Fail");

/*
Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.
*/
