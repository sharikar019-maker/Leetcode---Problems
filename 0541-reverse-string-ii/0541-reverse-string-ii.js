/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let result = "";

    for (let i = 0; i < s.length; i += 2 * k) {
        let firstPart = s
            .slice(i, i + k)
            .split("")
            .reverse()
            .join("");

        let secondPart = s.slice(i + k, i + 2 * k);

        result += firstPart + secondPart;
    }

    return result;
};