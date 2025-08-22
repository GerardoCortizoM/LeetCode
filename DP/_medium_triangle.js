/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let prev_line = [triangle[0]];
    for (let i = 0; i < triangle.length; i++){
        let curr_line = []
        for (let j = 0; j < triangle[i].length; j++){
            curr_line.push(triangle[i][j])
            if (i === 0) continue;
            if (j === 0) curr_line[j] += prev_line[j]
            else if (j === triangle[i].length - 1) curr_line[j] += prev_line[j - 1];
            else curr_line[j] += Math.min(prev_line[j - 1], prev_line[j]);
        }
        prev_line = curr_line;
    }
    return Math.min(...prev_line)
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])); //11
console.log(minimumTotal([[-10]])); //11

/*
Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. 
    More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
*/