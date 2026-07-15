/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
    const vowels = new Set("aeiouAEIOU");

    let chars = s.split("");
    let arr = [];

    for (let ch of chars) {
        if (vowels.has(ch)) {
            arr.push(ch);
        }
    }

    for (let i = 0; i < chars.length; i++) {
        if (vowels.has(chars[i])) {
            chars[i] = arr.pop();
        }
    }

    return chars.join("");
}