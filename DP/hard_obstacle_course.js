var binarySearch = function (obstacles, ) {

}

/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function (obstacles) {
  let dp = Array.from({ length: obstacles.length }).fill(1);
  for (let i = 1; i < obstacles.length; i++) {
    let j = binarySearch(obstacles.slice(0, i), obstacles[i])
    dp[i] = dp[j] + 1;
  }
  return dp;
};

console.log(longestObstacleCourseAtEachPosition([1, 2, 3, 2])); //[1,2,3,3]
console.log(longestObstacleCourseAtEachPosition([2, 2, 1])); //[1,2,1]
console.log(longestObstacleCourseAtEachPosition([3, 1, 5, 6, 4, 2])); //[1,1,2,3,2,2]
