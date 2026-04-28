/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
function findPoisonedDuration(timeSeries, duration) {
  let total = 0;

  for (let i = 0; i < timeSeries.length - 1; i++) {
    let gap = timeSeries[i + 1] - timeSeries[i];
    total += Math.min(duration, gap);
  }
    return total + duration;
}