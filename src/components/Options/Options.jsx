import css from "./Options.module.css";

const Options = ({ updateFeedback, totalClicks, resetFeedback }) => {
  return (
    <ul className={css.optionList}>
      <li>
        <button
          onClick={() => {
            updateFeedback("good");
          }}
          type="buttton"
        >
          Good
        </button>
      </li>
      <li>
        <button onClick={() => updateFeedback("neutral")} type="buttton">
          Neutral
        </button>
      </li>
      <li>
        <button onClick={() => updateFeedback("bad")} type="buttton">
          Bad
        </button>
      </li>
      {totalClicks > 0 && (
        <li>
          <button onClick={() => resetFeedback()} type="buttton">
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
