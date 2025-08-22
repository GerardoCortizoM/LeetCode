// var deleteWord = function (word, wordDict, reduced_words) {
//     if (wordDict.includes(word)) {
//         let reduced_word = wordDict.replace(word, "_");
//         if (reduced_word === "_") return false
//         reduced_words.push(reduced_word);
//         return deleteWord(word, reduced_word, reduced_words)
//     }
//     return reduced_words
// }

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function (s, wordDict) {
//   const dp = Array.from({ length: wordDict.length + 1 }, () => Array());
//   dp[0].push(s);
//   for (let i = 0; i < wordDict.length; i++) {
//     for (word of dp[i]) {
//       dp[i + 1].push(word);
//       let reduced_words = deleteWord(wordDict[i], word, []);
//       if (reduced_words === false) return true;
//       if (reduced_words.length > 0) {
//         dp[i + 1] = [...dp[i + 1], ...reduced_words];
//       }
//     console.log(dp);
//     }
//   }
//   return false;
// };
//==========================================================================================================================

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let n = s.length;
    let dp = new Array(n + 1).fill(false);
    dp[0] = true;
    let max_len = Math.max(...wordDict.map(word => word.length));

    for (let i = 1; i <= n; i++) {
        for (let j = i - 1; j >= Math.max(i - max_len - 1, 0); j--) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
};

console.log(wordBreak("leetcode", ["leet", "code"])); //true
console.log(wordBreak("applepenapple", ["apple","pen"])); //true
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])); //false
console.log(wordBreak("ccbb", ["bc", "cb"])); //false

/*
Given a string s and a dictionary of strings wordDict, 
    return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/