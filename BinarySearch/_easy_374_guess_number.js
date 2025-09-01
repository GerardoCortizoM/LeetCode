/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let start = 1,
    end = n;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (guess(mid) === 1) start = mid + 1;
    else if (guess(mid) === -1) end = mid - 1;
    else return mid;
  }
};
