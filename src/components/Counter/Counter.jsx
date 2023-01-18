import React from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  positivePercentage = 0;
  total = 0;

  handleGood = e => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handleNeutral = e => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleBad = e => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    this.total = this.state.good + this.state.neutral + this.state.bad;
    return this.total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.total === 0) {
      return (this.positivePercentage = '0');
    }
    if (this.total > 0) {
      return (this.positivePercentage = Math.round(
        (this.state.good / this.total) * 100
      ));
    }
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleGood={this.handleGood}
            handleNeutral={this.handleNeutral}
            handleBad={this.handleBad}
          />
        </Section>

        <Section title="Statistics">
          {this.state.good + this.state.neutral + this.state.bad > 0 ? (
            <Statistics
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
              state={this.state}
              positivePercentage={this.positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
export default Counter;