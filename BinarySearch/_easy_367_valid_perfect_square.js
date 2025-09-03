/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let start = 1,
    end = num;
  let mid = 1;
  while (start < end) {
    mid = start + Math.floor((end - start) / 2);
    if (mid * mid > num) end = mid;
    else if (mid * mid < num) start = mid + 1;
    else return true;
  }
  return mid * mid === num ? true : false;
};

let num = 16;
console.log(isPerfectSquare(num)); //true

num = 14;
console.log(isPerfectSquare(14)); //false

num = 1;
console.log(isPerfectSquare(num)); //true

console.log(isPerfectSquare(num)); //true
