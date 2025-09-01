/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let row = 0,
    len = matrix[0].length - 1;
  let start = 0,
    end = matrix.length - 1;
  while (start < end) {
    row = start + Math.floor((end - start) / 2);
    if (matrix[row][len] > target) end = row;
    else if (matrix[row][len] < target) start = row + 1;
    else return true;
  }
  row = end;
  ((start = 0), (end = len));
  while (start <= end) {
    let col = start + Math.floor((end - start) / 2);
    if (matrix[row][col] > target) end = col - 1;
    else if (matrix[row][col] < target) start = col + 1;
    else return true;
  }
  return false;
};

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;
console.log(searchMatrix(matrix, target)); //true

console.log("-----------------------------------------------------");

((matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
]),
  (target = 13));
console.log(searchMatrix(matrix, target)); //false
