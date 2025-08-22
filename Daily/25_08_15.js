/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    if (num.length < 3) return ""
    let start = 0;
    let end = 2;
    let curr_max = -1;
    while (end < num.length) {
        if (num[start] === num[start + 1] && num[start] === num[end] && Number(num[start] + num[start + 1] + num[end]) > curr_max) {
            curr_max = Number(num[start] + num[start + 1] + num[end])
        }
        start++;
        end++;
    }
    res = curr_max.toString();
    if (res === "-1") return ""
    if (res.length < 3) return "000"
    return res
};

console.log(largestGoodInteger("6777133339")); //"777"
console.log(largestGoodInteger("230001")); //"000"
console.log(largestGoodInteger("42352338")); //""

/*
You are given a string num representing a large integer. An integer is good if it meets the following conditions:

It is a substring of num with length 3.
It consists of only one unique digit.
Return the maximum good integer as a string or an empty string "" if no such integer exists.

Note:

A substring is a contiguous sequence of characters within a string.
There may be leading zeroes in num or a good integer.
*/