var reorderedPowerOf2 = function (N) {
    let sorted_s = N.toString().split("").sort().join("");
    for (let i = 0; i < 30; i++){
        if (Math.pow(2, i).toString().split("").sort().join("") === sorted_s) return true;
    }
    return false;
};

console.log(reorderedPowerOf2(1)); //true
console.log(reorderedPowerOf2(46)); //true
console.log(reorderedPowerOf2(10)); //false
console.log(reorderedPowerOf2(23)); //true
console.log(reorderedPowerOf2(1124)); //true
console.log(reorderedPowerOf2(63536)); //true
/*
You are given an integer n. We reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this so that the resulting number is a power of two.
*/
