import s from './Options.module.css';

const Options = ({ resp, updateFeedback, handleReset, totalFeedback }) => {
  return (
    <div className={s.options}>
      {Object.keys(resp).map((option) => (
        <button
          key={option}
          className={s.cap}
          onClick={() => updateFeedback(option)}
        >
          {option}
        </button>
      ))}
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};
export default Options;
