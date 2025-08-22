//DP

/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
    pairs.sort((a, b) => a[1] - b[1]);
    let dp = Array.from({ length: pairs.length }).fill(1);
    let maximum = 1;
    for (let i = 1; i < pairs.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            dp[i] = dp[i] <= dp[j] && pairs[i][0] > pairs[j][1] ? dp[j] + 1 : dp[i]
        }
        maximum = maximum < dp[i] ? dp[i] : maximum
    }
    return maximum
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//GREEDY
/**
 * @param {number[][]} pairs
 * @return {number}
 */
// var findLongestChain = function(pairs) {
//     pairs.sort((a, b) => a[1] - b[1]);
    
//     let cur = Number.MIN_SAFE_INTEGER, ans = 0;
    
//     for (const [start, end] of pairs) {
//         if (cur < start) {
//             cur = end;
//             ans++;
//         }
//     }
    
//     return ans;
// };

console.log(findLongestChain([[1,2],[2,3],[3,4]])) //2
console.log(findLongestChain([[1,2],[7,8],[4,5]])) //3

/*
You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.

A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.

Return the length longest chain which can be formed.

You do not need to use up all the given intervals. You can select pairs in any order.
*/