/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
  let i = 0, j = 0;

  for (let cmd of commands) {
    if (cmd === "UP") i--;
    else if (cmd === "DOWN") i++;
    else if (cmd === "LEFT") j--;
    else if (cmd === "RIGHT") j++;
  }

  return i * n + j;
};