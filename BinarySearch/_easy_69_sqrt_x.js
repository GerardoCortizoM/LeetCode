/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let start = 0,
    end = x;
  let mid = 0;
  while (start < end) {
    mid = start + Math.ceil((end - start) / 2);
    if (mid * mid > x) end = mid - 1;
    else if (mid * mid <= x) start = mid;
    else return mid;
  }
  return start;
};

let x = 4;
console.log(mySqrt(x)); // 2

x = 8;
console.log(mySqrt(x)); // 2

x = 101;
console.log(mySqrt(x)); // 10
