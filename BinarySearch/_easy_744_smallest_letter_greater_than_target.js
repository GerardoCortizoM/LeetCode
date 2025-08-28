/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
	if (letters[letters.length - 1] <= target) return letters[0]
	let start = 0, end = letters.length - 1;
	let mid = 0;
	while (start <= end) {
		mid = start + Math.floor((end - start) / 2);
		if (letters[mid] <= target) start = mid + 1
		else end = mid - 1;
	}
	return letters[start];
}

let letters = ["c","f","j"], target = "a"
console.log(nextGreatestLetter(letters, target)); //'c'

letters = ["c","f","j"], target = "c"
console.log(nextGreatestLetter(letters, target)); //'f'

letters = ["x","x","y","y"], target = "z"
console.log(nextGreatestLetter(letters, target)); //'x'

/*

You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

*/
