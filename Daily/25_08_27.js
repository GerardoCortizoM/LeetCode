/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
  let currArea = 0;
  let maxDiag = 0;
  for (let i = 0; i < dimensions.length; i++) {
    let currDiag = calculateDiagonal(dimensions[i][0], dimensions[i][1]);
    if (maxDiag <= currDiag) {
      if (maxDiag < currDiag) {
        maxDiag = currDiag;
		currArea = dimensions[i][0] * dimensions[i][1]
      }
	  else currArea = Math.max(currArea, dimensions[i][0] * dimensions[i][1]);
    }
  }
  return currArea;
};

var calculateDiagonal = function (a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

// let dimensions = [
//   [9, 3],
//   [8, 6],
// ];
// console.log(areaOfMaxDiagonal(dimensions)); //48

// dimensions = [
//   [3, 4],
//   [4, 3],
// ];
// console.log(areaOfMaxDiagonal(dimensions)); //12

dimensions = [
  [6, 5],
  [8, 6],
  [2, 10],
  [8, 1],
  [9, 2],
  [3, 5],
  [3, 5],
];
console.log(areaOfMaxDiagonal(dimensions)); //20
