import s from './Feedback.module.css';

const Feedback = ({ resp, totalFeedback, positivePercentage }) => {
  return (
    <div className={s.feedback}>
      {Object.keys(resp).map((option) => (
        <span key={option} className={s.cap}>
          {option}: {resp[option]}
        </span>
      ))}
      <span>Total: {totalFeedback}</span>
      <span>Positive: {positivePercentage}%</span>
    </div>
  );
};

export default Feedback;
