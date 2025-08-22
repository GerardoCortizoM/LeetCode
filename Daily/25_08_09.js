/**
 * @param {number} n
 * @return {number}
 */
let soupServings = function (n) {
  if (n > 5000) return 1.0;
  const units = Math.ceil(n / 25);
  const cache = Array.from({ length: units + 1 }, () =>
    Array(units + 1).fill(null)
  );

  const calculateProb = (a, b) => {
    if (a <= 0 && b <= 0) return 0.5;
    if (a <= 0) return 1.0;
    if (b <= 0) return 0.0;

    if (cache[a][b] !== null) return cache[a][b];

    let prob =
      0.25 *
      (calculateProb(a - 4, b) +
        calculateProb(a - 3, b - 1) +
        calculateProb(a - 2, b - 2) +
        calculateProb(a - 1, b - 3));

    cache[a][b] = prob;
    return prob;
  };

  return calculateProb(units, units);
};

console.log(soupServings(50)); //0.62500
console.log(soupServings(100)); //0.71875
console.log(soupServings(5001)); //1.0

/*
You have two soups, A and B, each starting with n mL. On every turn, one of the following four serving operations is chosen at random, each with probability 0.25 independent of all previous turns:

pour 100 mL from type A and 0 mL from type B
pour 75 mL from type A and 25 mL from type B
pour 50 mL from type A and 50 mL from type B
pour 25 mL from type A and 75 mL from type B
Note:

There is no operation that pours 0 mL from A and 100 mL from B.
The amounts from A and B are poured simultaneously during the turn.
If an operation asks you to pour more than you have left of a soup, pour all that remains of that soup.
The process stops immediately after any turn in which one of the soups is used up.

Return the probability that A is used up before B, plus half the probability that both soups are used up in the same turn. Answers within 10-5 of the actual answer will be accepted.
*/
