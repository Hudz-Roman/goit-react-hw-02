import { useState } from 'react';
//? Components
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
//? CSS
import 'modern-normalize';
import '../index.css';

function App() {
  const [resp, setResp] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setResp((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  return (
    <div>
      <Description />
      <Options handleFeedback={handleFeedback} />
      <Feedback resp={resp} />
    </div>
  );
}

export default App;
