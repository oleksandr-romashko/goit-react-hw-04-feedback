import { OptionsWrapper, FeedbackButton } from './FeedbackOptions.styles';
import capitalizeFirstLetter from 'helpers/capitalizeString';
import PropTypes from 'prop-types';

/**
 * A container for feedback options.
 *
 * @param {string[]} props.options Feedback options.
 * @param {callback} props.onLeaveFeedback Callback function that handles feedback leave.
 *
 * @returns {React.Component} Feedback options container component.
 */
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionsWrapper>
    {options.map(el => (
      <FeedbackButton
        key={`option-${el}`}
        data-category={el}
        onClick={onLeaveFeedback}
      >
        {capitalizeFirstLetter(el)}
      </FeedbackButton>
    ))}
  </OptionsWrapper>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
