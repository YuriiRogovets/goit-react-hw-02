const Options = ({ updateFeedback, totalClicks }) => {
  return (
    <ul>
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
          <button type="buttton">Reset</button>
        </li>
      )}
    </ul>
  );
};

export default Options;