/**
 * @param {number[][]} points
 * @return {number}
 */
function numberOfPairs(points) {
  points.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    return a[0] - b[0];
  });
  let pairCount = 0;
  const n = points.length;

  for (let i = 0; i < n; i++) {
    const upperY = points[i][1];
    let lowerYLimit = Number.MIN_SAFE_INTEGER;

    for (let j = i + 1; j < n; j++) {
      const currentY = points[j][1];
      if (currentY <= upperY && currentY > lowerYLimit) {
        pairCount++;
        lowerYLimit = currentY;
        if (currentY === upperY) break;
      }
    }
  }
  return pairCount;
}

let points = [
  [1, 1],
  [2, 2],
  [3, 3],
];
console.log(numberOfPairs(points)); //0

points = [
  [6, 2],
  [4, 4],
  [2, 6],
];
console.log(numberOfPairs(points)); //2

points = [
  [3, 1],
  [1, 3],
  [1, 1],
];
console.log(numberOfPairs(points)); //2
