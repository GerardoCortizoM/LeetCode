/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let curr_row = [1]
    for (let i = 1; i <= rowIndex; i++){
        let new_row = Array.from({length: i+1}).fill(1)
        for (let j = 1; j < curr_row.length; j++){
            new_row[j] = curr_row[j-1] + curr_row[j]
        }
        curr_row = new_row;
    }
    return curr_row;
};

console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(5));

/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/