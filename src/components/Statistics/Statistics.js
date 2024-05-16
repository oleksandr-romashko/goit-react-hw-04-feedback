import { StatisticsList, StatisticsItem } from './Statistics.styled';
import PropTypes from 'prop-types';

/**
 * A component to display feedback statistics.
 * @param {number} props.good Number of positive feedbacks.
 * @param {number} props.good Number of neutral feedbacks.
 * @param {number} props.good Number of bad feedbacks.
 * @param {number} props.total Total number of all feedbacks.
 * @param {number} props.positivePercentage Percentage number of positive feedbacks to all feedbacks.
 * @returns {React.Component} Statistics component.
 */
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsList>
    <StatisticsItem key="good">Good: {good}</StatisticsItem>
    <StatisticsItem key="neutral">Neutral: {neutral}</StatisticsItem>
    <StatisticsItem key="bad">Bad: {bad}</StatisticsItem>
    <StatisticsItem key="total">Total: {total}</StatisticsItem>
    <StatisticsItem key="posfeedback">
      Positive feedback: {positivePercentage}%
    </StatisticsItem>
  </StatisticsList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
