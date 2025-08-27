/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
    let maxDays = days[days.length - 1] + 1
    let setDays = new Set(days)
    let dp = Array(maxDays).fill(0)
    for (let i = 1; i <= maxDays; i++) {
        if (setDays.has(i)) {
            dp[i] = Math.min(
                dp[i - 1] + costs[0],
                dp[Math.max(i - 7, 0)] + costs[1],
                dp[Math.max(i-30, 0)] + costs[2]
            )
        }
        else {
            dp[i] = dp[i-1]
        }
    }
    return dp[maxDays]
};

let days = [
    1, 2, 3, 4, 6, 8, 9, 10, 13, 14, 16, 17, 19, 21, 24, 26, 27, 28, 29,
  ],
  costs = [3,14,50]
console.log(mincostTickets(days, costs)) //50

// days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]
// console.log(mincostTickets(days, costs)) //17