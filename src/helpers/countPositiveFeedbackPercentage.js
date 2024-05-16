import countTotalFeedback from './countTotalFeedback';

/**
 * Calculates percentage of positive feedbacks to all fedbacks.
 *
 * @param {object} state Object with feedbacks.
 *
 * @returns {number} Percetage of positive feedbacks.
 */
function countPositiveFeedbackPercentage(state) {
  const total = countTotalFeedback(state);
  return Math.floor(total && (100 * state.good) / countTotalFeedback(state));
}

export default countPositiveFeedbackPercentage;
