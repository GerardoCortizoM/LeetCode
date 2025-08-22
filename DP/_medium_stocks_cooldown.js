/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = Array.from({ length: prices.length }).fill(0);
  for (let i = 0; i < prices.length; i++) {
    let j = i + 1;
      while (j < prices.length) {
    }
  }
};

console.log(maxProfit([1, 2, 3, 0, 2])); //3
console.log(maxProfit([1])); //0

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
*/
