/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    const broken = new Set([...brokenLetters]);
    let res = 0;
    const words = text.split(" ");
    for (word of words) {
        for (let i = 0; i < word.length; i++) {
            if (broken.has(word[i])) break;
            if (i === word.length - 1) res++;
        }
    }
    return res;
};

let text = "hello world", brokenLetters = "ad";
console.log(canBeTypedWords(text, brokenLetters)); //1
text = "leet code", brokenLetters = "lt";
console.log(canBeTypedWords(text, brokenLetters)); //1
text = "leet code", brokenLetters = "e";
console.log(canBeTypedWords(text, brokenLetters)); //0

/*
There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.
*/
