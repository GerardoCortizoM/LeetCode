/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    const v = {}, cons = {};
    let maxV = 0, maxC = 0;
    const VOW = "aeiou";
    for (let c of s) {
        if (VOW.includes(c)) {
            if (c in v) v[c]++;
            else v[c] = 1;
            maxV = Math.max(maxV, v[c]);
        } else {
            if (c in cons) cons[c]++;
            else cons[c] = 1;
            maxC = Math.max(maxC, cons[c]);
        }
    }
    return maxV + maxC;
};

let s = "successes";
console.log(maxFreqSum(s)); //6

s = "aeiaeia";
console.log(maxFreqSum(s)); //3
