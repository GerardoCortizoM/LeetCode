/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {};

console.log(
  maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
); //4

console.log(
  maximalSquare([
    ["0", "1"],
    ["1", "0"],
  ])
); //1

console.log(maximalSquare([["0"]])); //0

/*
Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
*/