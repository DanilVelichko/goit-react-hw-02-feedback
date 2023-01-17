import React from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export class Counter extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

   positivePercentage = 0;
    
    handleGood = (e) => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            }
        });
    };
    
    handleNeutral = (e) => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            }
        });  
    };

    handleBad = (e) => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            }
        });
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        if (this.state.neutral + this.state.bad + this.state.good === 0) { return this.positivePercentage = '0' }
        if (this.state.neutral + this.state.bad + this.state.good > 0) {
            return this.positivePercentage = Math.round(((this.state.good / (this.state.neutral + this.state.bad + this.state.good))) * 100);
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
            /></Section>
                
                {(this.state.good + this.state.neutral + this.state.bad > 0
                    ?
                    <Section title="Statistics">
                <Statistics
               countTotalFeedback={this.countTotalFeedback}
               countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
               state={this.state}
               positivePercentage ={this.positivePercentage}/></Section>       
                    :
                    <Section title="Statistics">
                    <Notification
                        message="There is no feedback"  /></Section> 
                )}
  
           
           </>
           
           
        )

    }
}


