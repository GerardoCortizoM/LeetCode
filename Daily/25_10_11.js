/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function(energy, k) {
    const len = energy.length;
    const dp = Array(len).fill(0);
    let max = -Infinity;
    for (let i = len - 1; i >= 0; i--) {
        dp[i] = energy[i] + ((i + k) < len ? dp[i + k] : 0);
        if (dp[i] > max) max = dp[i];
    }
    return max;
};

let energy = [5, 2, -10, -5, 1], k = 3;
console.log(maximumEnergy(energy, k));

energy = [-2, -3, -1], k = 2;
console.log(maximumEnergy(energy, k));
