const Feedback = ({ resp }) => {
  const { good, neutral, bad } = resp;
  const totalFeedback = good + neutral + bad;
  const positivePercentage = Math.round((good / totalFeedback) * 100);

  return (
    <div>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {totalFeedback}</span>
      <span>Positive: {positivePercentage}%</span>
    </div>
  );
};

export default Feedback;
