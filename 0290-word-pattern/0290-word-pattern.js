/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ")
    
    if (pattern.length !== words.length) return false;

    const map1 = new Map()
    const map2 = new Map()

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i]
        const word = words[i]

        if (map1.get(char) !== undefined && map1.get(char) !== word) {
            return false
        }

        if (map2.get(word) !== undefined && map2.get(word) !== char) {
            return false
        }

        map1.set(char, word)
        map2.set(word, char)
    }

    return true
};