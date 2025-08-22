/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function (n, queries) {
  let decimal = n.toString(2).split("").reverse();
  let pows = [];
  for (let i = 0; i < decimal.length; i++) {
    if (decimal[i] === "1") pows.push(Math.pow(2, i));
  }
  let res = Array.from({ length: queries.length }).fill(1);
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      res[i] *= pows[j];
    }
    res[i] = res[i] % 1000000007;
  }
  return res;
};

console.log(
  productQueries(15, [
    [0, 1],
    [2, 2],
    [0, 3],
  ])
); //[2,4,64]
console.log(productQueries(2, [[0, 0]]));
console.log(
  productQueries(919, [
    [5, 5],
    [4, 4],
    [0, 1],
    [1, 5],
    [4, 6],
    [6, 6],
    [5, 6],
    [0, 3],
    [5, 5],
    [5, 6],
    [1, 2],
    [3, 5],
    [3, 6],
    [5, 5],
    [4, 4],
    [1, 1],
    [2, 4],
    [4, 5],
    [4, 4],
    [5, 6],
    [0, 4],
    [3, 3],
    [0, 4],
    [0, 5],
    [4, 4],
    [5, 5],
    [4, 6],
    [4, 5],
    [0, 4],
    [6, 6],
    [6, 6],
    [6, 6],
    [2, 2],
    [0, 5],
    [1, 4],
    [0, 3],
    [2, 4],
    [5, 5],
    [6, 6],
    [2, 2],
    [2, 3],
    [5, 5],
    [0, 6],
    [3, 3],
    [6, 6],
    [4, 4],
    [0, 0],
    [0, 2],
    [6, 6],
    [6, 6],
    [3, 6],
    [0, 4],
    [6, 6],
    [2, 2],
    [4, 6],
  ])
);

/*
Given a positive integer n, there exists a 0-indexed array called powers, 
    composed of the minimum number of powers of 2 that sum to n. 
    The array is sorted in non-decreasing order, and there is only one way to form the array.

You are also given a 0-indexed 2D integer array queries, 
    where queries[i] = [lefti, righti]. 
    Each queries[i] represents a query where you have to find the product of all powers[j] with lefti <= j <= righti.

Return an array answers, equal in length to queries, where answers[i] is the answer to the ith query. 
    Since the answer to the ith query may be too large, each answers[i] should be returned modulo 109 + 7.
*/
