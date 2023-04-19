// import Alltogether from './Alltogether.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Section from './Section/Section.jsx';
import './App.css';
import { useEffect, useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  const handleStats = event => {
    switch (event.target.innerHTML) {
      case 'Good':
        setGood(good + 1);
        break;
      case 'Neutral':
        setNeutral(neutral + 1);
        break;
      case 'Bad':
        setBad(bad + 1);
        break;
      default:
        console.log('default');
    }
  };

  useEffect(() => {
    countTotalFeedback();
    console.log('hw4');
  }, [good, bad, neutral]);

  useEffect(() => {
    countPositiveFeedbackPercentage();
  }, [good, totalFeedback]);

  const countTotalFeedback = () => {
    setTotalFeedback(good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    setPositiveFeedback(Math.round((good / totalFeedback) * 100));
    console.log('hw4');
  };

  return (
    <div className="app">
      <Section title={'Please Leave feedback in HW4'}>
        <FeedbackOptions onLeaveFeedback={handleStats} />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      </Section>
    </div>
  );
};
