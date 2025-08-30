/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
	/*
	 * 1. Iterate through intervals
	 * 2. Create a copy of intervals sorted by end
	 * 3. for each interval, binary search the copy to find the first element with 
	 * 	start[i] >= end[copy].
	 * 4. Insert len - i into res
	 * 5. return res.
	 */
	const sortedIntervals = intervals.toSorted((a, b) => a[0] - b[0]);
	console.log(sortedIntervals);
	const len = intervals.length;
	let res = Array(len).fill(-1)
	for (let i = 0; i < len; i++) {
		let idx = bs(sortedIntervals, intervals[i][1], len - 1)
		console.log(idx)
		if (idx < len - 1 || (idx === len - 1 && intervals[i][1] <= sortedIntervals[len - 1][0])) res[i] = len - idx;
	}
	return res
};

var bs = function(intervals, target, len) {
	let start = 0, end = len;
	while (start < end) {
		let mid = start + Math.floor((end - start) / 2);
		if (intervals[mid][0] >= target) end = mid;
		else start = mid + 1;
	}
	return end;
}

//let intervals = [[1,2]]
//console.log(findRightInterval(intervals)); //[-1]

intervals = [[3,4],[2,3],[1,2]]
console.log(findRightInterval(intervals)); //[-1,0,1]

//intervals = [[1,4],[2,3],[3,4]]
//console.log(findRightInterval(intervals)); //[-1,2,-1]

/*
You are given an array of intervals, where intervals[i] = [starti, endi] and each starti is unique.

The right interval for an interval i is an interval j such that startj >= endi and startj is minimized. Note that i may equal j.

Return an array of right interval indices for each interval i. If no right interval exists for interval i, then put -1 at index i.
*/
