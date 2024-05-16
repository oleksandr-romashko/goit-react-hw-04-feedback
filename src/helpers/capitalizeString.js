/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} string Input string.
 * @returns {string} Resulting string with first capitalized letter.
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default capitalizeFirstLetter;
