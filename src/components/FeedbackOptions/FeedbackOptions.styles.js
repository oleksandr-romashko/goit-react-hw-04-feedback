import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Styled wrapper for feedback options.
 */
export const OptionsWrapper = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  gap: 8px;
`;

/**
 * Styled feedback option button.
 *
 * @param {string} props.data-category - Feedback category.
 *
 * @returns {React.Component} Styled feedback option button.
 */
export const FeedbackButton = styled.button`
  display: inline-flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;

  font-family: inherit;
  font-size: 22px;
  font-weight: 500;
  line-height: 22px;
  /* prevent text selection */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  border-radius: 6px;
  border: 1px solid #d0d0d0;
  background-color: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);

  &:active {
    border: 1px solid #2764bb;
    background: linear-gradient(180deg, #4a94fc 0%, #0a67e3 100%);
  }
`;

FeedbackButton.propTypes = {
  'data-category': PropTypes.string.isRequired,
};
