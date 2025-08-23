/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
    let rows = grid.length, cols = grid[0].length;
    let min_r = rows, max_r = 0, min_c = cols, max_c = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                min_r = Math.min(min_r, i);
                min_c = Math.min(min_c, j);
                max_r = Math.max(max_r, i);
                max_c = Math.max(max_c, j);
            }
        }
    }

    return (max_c - min_c + 1) * (max_r - min_r + 1);
};

let grid = [[0,1,0],[1,0,1]]
console.log(minimumArea(grid)) //6

grid = [[1,0],[0,0]]
console.log(minimumArea(grid)) //1