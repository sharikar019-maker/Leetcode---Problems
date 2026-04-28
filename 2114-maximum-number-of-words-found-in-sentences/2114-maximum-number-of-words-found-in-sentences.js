/**
 * @param {string[]} sentences
 * @return {number}
 */
function mostWordsFound(sentences) {
  let maxWords = 0;

  for (let sentence of sentences) {
    let wordCount = 1; 

    for (let char of sentence) {
      if (char === " ") {
        wordCount++;
      }
    }

    if (wordCount > maxWords) {
      maxWords = wordCount;
    }
  }

  return maxWords;
}