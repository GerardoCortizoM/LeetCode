/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  let dp = {};
  let max = 1;
  for (let i = 0; i < envelopes.length; i++) {
    if (!(i in dp)) dp[i] = [];
    for (let j = i + 1; j < envelopes.length; j++) {
      if (!(j in dp)) dp[j] = [];
      if (
        envelopes[j][0] < envelopes[i][0] &&
        envelopes[j][1] < envelopes[i][1] &&
        !dp[i].some((item) => item.every((val, x) => val === envelopes[j][x]))
      ) {
        dp[i].push(envelopes[j]);
        if (dp[i].length >= max) max = dp[i].length + 1;
      }
      if (
        envelopes[i][0] < envelopes[j][0] &&
        envelopes[i][1] < envelopes[j][1] &&
        !dp[j].some((item) => item.every((val, x) => val === envelopes[i][x]))
      ) {
        dp[j] = [...dp[i], envelopes[i]];
        if (dp[j].length >= max) max = dp[j].length + 1;
      }
    }
  }
  console.log(dp);
  return max;
};
var maxEnvelopes = function(E) {
    E.sort((a,b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
    let len = E.length, dp = []
    for (let i = 0; i < len; i++) {
        let height = E[i][1], left = 0, right = dp.length   
        while (left < right) {
            let mid = (left + right) >> 1
            if (dp[mid] < height) left = mid + 1
            else right = mid
        }
        dp[left] = height
    }
    return dp.length
};
// console.log(
//   maxEnvelopes([
//     [5, 4],
//     [6, 4],
//     [6, 7],
//     [2, 3],
//   ])
// ); //3
// console.log(
//   maxEnvelopes([
//     [1, 1],
//     [1, 1],
//     [1, 1],
//   ])
// ); //1
// console.log(
//   maxEnvelopes([
//     [4, 5],
//     [4, 6],
//     [6, 7],
//     [2, 3],
//     [1, 1],
//     [1, 1],
//   ])
// ); //4
console.log(
  maxEnvelopes([
    [30, 50],
    [12, 2],
    [3, 4],
    [12, 15],
  ])
); //3

/*
You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.

One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).

Note: You cannot rotate an envelope.
*/
