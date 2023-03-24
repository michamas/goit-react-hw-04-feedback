// import Alltogether from './Alltogether.jsx';
import Statistics from './Statistics.jsx';
import Section from './Section.jsx';
import './App.css';
import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions.jsx';
import Test from './Test.jsx';

// const INITIALSTATE = {
//   good: 0,
//   neutal: 0,
//   bad: 0,
// };

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    totalFeedback: 0,
    positiveFeedback: 0,
  };

  // props = {
  //   totalFeedback: 0,
  //   positiveFeedback: 0,
  // };

  handleStats = event => {
    switch (event.target.innerHTML) {
      case 'Good':
        this.setState(state => {
          return {
            good: state.good + 1,
          };
        });
        break;
      case 'Neutral':
        this.setState(state => {
          return {
            neutral: state.neutral + 1,
          };
        });
        break;
      case 'Bad':
        this.setState(state => {
          return {
            bad: state.bad + 1,
          };
        });
        break;

      default:
        console.log('default');
    }
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(state => {
      return {
        totalFeedback: state.good + state.neutral + state.bad,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(state => {
      return {
        positiveFeedback: Math.round((state.good / state.totalFeedback) * 100),
      };
    });
  };

  render() {
    const { good, neutral, bad, totalFeedback, positiveFeedback } = this.state;

    return (
      <div className="app">
        <Section title={'Please Leave feedback'}></Section>
        <FeedbackOptions onLeaveFeedback={this.handleStats} />
        <Section title={'Statistics'}>
          <Test />
        </Section>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      </div>
    );
  }
}
