/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    let log = Math.log2(n);
    return Math.ceil(log) === Math.floor(log) && log % 2 === 0
};

console.log(isPowerOfFour(-16)) //false
console.log(isPowerOfFour(0)) //false
console.log(isPowerOfFour(1)) //true
console.log(isPowerOfFour(16)) //true
console.log(isPowerOfFour(8)) //false

/*
Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.
*/