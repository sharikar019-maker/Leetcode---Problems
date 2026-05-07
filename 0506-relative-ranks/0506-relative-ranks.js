/**
 * @param {number[]} score
 * @return {string[]}
 */
function findRelativeRanks(score) {

        const athletes = score.map((s, index) => [s, index]);

        athletes.sort((a, b) => b[0] - a[0]);

    const result = new Array(score.length);

    for (let i = 0; i < athletes.length; i++) {

        const originalIndex = athletes[i][1];

        if (i === 0) {
            result[originalIndex] = "Gold Medal";
        }
        else if (i === 1) {
            result[originalIndex] = "Silver Medal";
        }
        else if (i === 2) {
            result[originalIndex] = "Bronze Medal";
        }
        else {
            result[originalIndex] = String(i + 1);
        }
    }

    return result;
}