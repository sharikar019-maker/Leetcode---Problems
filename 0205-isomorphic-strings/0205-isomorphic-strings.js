/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map1 = new Map();
    const map2 = new Map();

    for (let i = 0; i < s.length; i++) {
        const a = s[i];
        const b = t[i];

        if (
            (map1.has(a) && map1.get(a) !== b) ||
            (map2.has(b) && map2.get(b) !== a)
        ) {
            return false;
        }

        map1.set(a, b);
        map2.set(b, a);
    }

    return true;
};