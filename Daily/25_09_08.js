/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
    for (let i = 1; i <= Math.ceil(n / 2); i++) {
        if (isNoZeroInteger(i) && isNoZeroInteger(n - i)) return [i, n - i];
    }
};

const isNoZeroInteger = function (n) {
    const s = n.toString();
    return !s.includes("0");
};

let n = 2;
console.log(getNoZeroIntegers(n)); //[1, 1]
n = 11;
console.log(getNoZeroIntegers(n)); //[2, 9]
