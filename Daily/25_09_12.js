/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
    const v = [];
    for (let c of s) {
        if ("AEIOUaeiou".includes(c)) v.push(c);
    }
    v.sort();

    let res = "";
    let vIdx = 0;
    for (let c of s) {
        if ("AEIOUaeiou".includes(c)) res += v[vIdx++];
        else res += c;
    }
    return res;
};

let s = "lEetcOde";
console.log(sortVowels(s)); //"lEOtcede"

s = "lYmpH";
console.log(sortVowels(s)); //"lYmpH"
