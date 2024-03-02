import { useState } from "react";
// import reactLogo from "../../assets/react.svg";
import "./App.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

function App() {
  const clicksData = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [clicks, setClicks] = useState(clicksData);

  const updateFeedback = (feedbackType) => {
    setClicks((clicks) => ({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    }));
    // console.log(clicks);
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const positiveValue = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <div>
        <Description />
        <Options updateFeedback={updateFeedback} totalClicks={totalFeedback} />
        {totalFeedback <= 0 ? (
          <Notification />
        ) : (
          <Feedback
            goodClicks={clicks.good}
            neutralClicks={clicks.neutral}
            badClicks={clicks.bad}
            totalClicks={totalFeedback}
            positiveValue={positiveValue}
          />
        )}
      </div>
    </>
  );
}

export default App;
