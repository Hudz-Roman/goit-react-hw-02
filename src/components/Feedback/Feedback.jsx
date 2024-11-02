import s from './Feedback.module.css';

const Feedback = ({ resp, totalFeedback, positivePercentage }) => {
  const { good, neutral, bad } = resp;
  return (
    <div className={s.feedback}>
      <span>Good: {good}</span> <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span> <span>Total: {totalFeedback}</span>
      <span>Positive: {positivePercentage}%</span>
    </div>
  );
};

export default Feedback;
