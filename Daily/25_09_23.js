/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let res = 0;
    const v1Arr = version1.split("."), v2Arr = version2.split(".");
    const v1l = v1Arr.length, v2l = v2Arr.length;
    let restArr = [], r = 0;
    for (let i = 0; i < Math.max(v1Arr.length, v2Arr.length); i++) {
        if (i < v1l && i < v2l) {
            if (Number(v1Arr[i]) < Number(v2Arr[i])) return -1;
            if (Number(v1Arr[i]) > Number(v2Arr[i])) return 1;
        } else {
            if (i < v1l) restArr = v1Arr, r = 1;
            else restArr = v2Arr, r = -1;
            if (Number(restArr[i]) !== 0) return r;
        }
    }
    return res;
};

let version1 = "1.2", version2 = "1.10";
console.log(compareVersion(version1, version2)); //-1

version1 = "1.01", version2 = "1.001";
console.log(compareVersion(version1, version2)); //0

version1 = "1.0", version2 = "1.0.0.0";
console.log(compareVersion(version1, version2)); //0

version1 = "1.0.1", version2 = "1";
console.log(compareVersion(version1, version2)); //0
