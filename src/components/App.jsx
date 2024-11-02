import { useState } from 'react';
//? Components
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';
//? CSS
import 'modern-normalize';
import '../index.css';

function App() {
  const [resp, setResp] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = resp.good + resp.neutral + resp.bad;

  const positivePercentage =
    Math.round((resp.good / totalFeedback) * 100) || null;

  const updateFeedback = (feedbackType) => {
    setResp((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setResp({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          resp={resp}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
          handleReset={handleReset}
        />
      ) : (
        <Notification message='No feedback yet' />
      )}
    </div>
  );
}

export default App;
