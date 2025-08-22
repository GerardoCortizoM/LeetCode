/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n < 1) return false
    let curr = 1;
    while (curr <= n) {
        if (curr === n) return true;
        curr *= 3;
    }
    return false
};

console.log(isPowerOfThree(27)) //true
console.log(isPowerOfThree(0)) //false
console.log(isPowerOfThree(-1)) //false

/*
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.
*/