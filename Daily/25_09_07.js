/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    const res = [];
    if (n % 2 !== 0) res.push(0);
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        res.push(i);
        res.push(-1 * i);
    }
    return res;
};

let n = 5;
console.log(sumZero(n)); //[-7,-1,1,3,4]

n = 3;
console.log(sumZero(n));

n = 1;
console.log(sumZero(n));
n = 4;
console.log(sumZero(n));
n = 2;
console.log(sumZero(n));
