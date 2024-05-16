import { Component } from 'react';

import { WidgetWrapper } from './FeedbackWidget.styled';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Statistics from 'components/Statistics/Statistics';

import countTotalFeedback from 'helpers/countTotalFeedback';
import countPosFeedbackPercentage from 'helpers/countPositiveFeedbackPercentage';

/**
 * Feedback widget to collect fedbacks as customers reviews.
 *
 * Collects feedback for various categories.
 *
 * Displays statistic for each category.
 */
class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  /**
   * Adds feedback to a specific feedback category.
   * @param {object} evt React crossbrowser SyntheticEvent that wraps the native Event.
   */
  onLeaveFeedback = evt => {
    const category = evt.target.dataset.category;
    category && this.setState(prev => ({ [category]: prev[category] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbackCount = countTotalFeedback({ ...this.state });
    return (
      <WidgetWrapper>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedbackCount === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbackCount}
              positivePercentage={countPosFeedbackPercentage({ ...this.state })}
            />
          )}
        </Section>
      </WidgetWrapper>
    );
  }
}

export default FeedbackWidget;
