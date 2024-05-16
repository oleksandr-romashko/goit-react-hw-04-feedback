/**
 * Summarize all provided numbers.
 *
 * @param {object} numbers Object with number values.
 *
 * @returns {number} Total sum of numbers.
 */
function countTotalFeedback(numbers) {
  let total = 0;
  for (const number in numbers) {
    total += numbers[number];
  }
  return total;
}

export default countTotalFeedback;
