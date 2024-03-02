const Feedback = ({
  goodClicks,
  neutralClicks,
  badClicks,
  totalClicks,
  positiveValue,
}) => {
  return (
    <ul>
      <li>
        Good: <span>{goodClicks}</span>
      </li>
      <li>
        Neutral: <span>{neutralClicks}</span>
      </li>
      <li>
        Bad: <span>{badClicks}</span>
      </li>
      <li>
        Total: <span>{totalClicks}</span>
      </li>
      <li>
        Positive: <span>{positiveValue}%</span>
      </li>
    </ul>
  );
};

export default Feedback;
