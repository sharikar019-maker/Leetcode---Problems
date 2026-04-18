/**
 * @param {number} n
 * @return {number}
 */
function mirrorDistance(n) {
  const reversed = parseInt(n.toString().split('').reverse().join(''));
  return Math.abs(n - reversed);
}