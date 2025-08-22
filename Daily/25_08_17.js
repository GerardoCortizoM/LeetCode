/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    return Number(num.toString().replace("6", "9"))
};

console.log(maximum69Number(9669)); //9969
console.log(maximum69Number(9996)); //9999
console.log(maximum69Number(9999)); //9999

/*
You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
*/