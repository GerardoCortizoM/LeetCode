/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
  return Math.abs(x - z) > Math.abs(y - z)
    ? 2
    : Math.abs(y - z) === Math.abs(x - z)
      ? 0
      : 1;
};

let x = 2,
  y = 7,
  z = 4;
console.log(findClosest(x, y, z));

((x = 2), (y = 5), (z = 6));
console.log(findClosest(x, y, z));

((x = 1), (y = 5), (z = 3));
console.log(findClosest(x, y, z));
