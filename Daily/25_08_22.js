/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
    let r = mat.length, c = mat[0].length, ans = 0;
    let h = Array(c).fill(0);
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) h[j] = mat[i][j] ? h[j] + 1 : 0;
        let sum = Array(c).fill(0), st = [];
        for (let j = 0; j < c; j++) {
            while (st.length && h[st[st.length-1]] >= h[j]) st.pop();
            if (st.length) {
                let p = st[st.length-1];
                sum[j] = sum[p] + h[j] * (j - p);
            } else {
                sum[j] = h[j] * (j + 1);
            }
            st.push(j);
            ans += sum[j];
        }
    }
    return ans;
};

console.log(numSubmat([[1,0,1],[1,1,0],[1,1,0]])) //13
console.log(numSubmat([[0,1,1,0],[0,1,1,1],[1,1,1,0]])) //24

/*
Given an m x n binary matrix mat, return the number of submatrices that have all ones.
*/