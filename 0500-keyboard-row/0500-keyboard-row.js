/**
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(words) {

    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");

    const result = [];

    for (let word of words) {

        const lowerWord = word.toLowerCase();

              let row;

        if (row1.has(lowerWord[0])) {
            row = row1;
        } 
        else if (row2.has(lowerWord[0])) {
            row = row2;
        } 
        else {
            row = row3;
        }

        let valid = true;
        
        for (let char of lowerWord) {

            if (!row.has(char)) {
                valid = false;
                break;
            }
        }

        if (valid) {
            result.push(word);
        }
    }

    return result;
}