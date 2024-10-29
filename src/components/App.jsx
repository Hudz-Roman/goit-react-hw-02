//? Components
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
//? CSS
import 'modern-normalize';
import '../index.css';

function App() {
  // const responce = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  return (
    <div>
      <Description />
      <Options />
      <Feedback />
    </div>
  );
}

export default App;
