import PropTypes from 'prop-types';

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default function Statistics({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) {
  if (totalFeedback === 0) {
    return <p>no feedback yet</p>;
  }
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedback}%</p>
    </div>
  );
}

// class Statistics extends Component {
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
//   totalFeedback: 0,
//   positivePercentage: 0,
// };

//   //
//   handleStats = event => {
//     // console.log(event.target.innerHTML);
//     switch (event.target.innerHTML) {
//       case 'Good':
//         this.setState(state => {
//           return {
//             good: state.good + 1,
//           };
//         });
//         break;
//       case 'Neutral':
//         this.setState(state => {
//           return {
//             neutral: state.neutral + 1,
//           };
//         });
//         break;
//       case 'Bad':
//         this.setState(state => {
//           return {
//             bad: state.bad + 1,
//           };
//         });
//         break;

//       default:
//         console.log('default');
//     }
//     this.countTotalFeedback();
//     this.countPositiveFeedbackPercentage();
//   };

//   countTotalFeedback = () => {
//     this.setState(state => {
//       return {
//         totalFeedback: state.good + state.neutral + state.bad,
//       };
//     });
//   };

//   countPositiveFeedbackPercentage = () => {
//     this.setState(state => {
//       return {
//         positivePercentage: Math.round(
//           (state.good / state.totalFeedback) * 100
//         ),
//       };
//     });
//   };

//   render() {
//     const { good, neutral, bad, totalFeedback, positivePercentage } =
//       this.state;
//     return (
//       <div>
//         <div>
//           <button type="button" onClick={this.handleStats}>
//             Good
//           </button>
//           <button type="button" onClick={this.handleStats}>
//             Neutral
//           </button>
//           <button type="button" onClick={this.handleStats}>
//             Bad
//           </button>
//         </div>
//         <div>
//           <h4>STATISTICS</h4>

//           <div>Good: {good}</div>
//           <div>Neutral: {neutral}</div>
//           <div>Bad: {bad}</div>
//           <div>Total: {totalFeedback}</div>
//           <div>Positives: {positivePercentage}%</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Statistics;
