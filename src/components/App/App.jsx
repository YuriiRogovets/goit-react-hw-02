import { useState, useEffect } from "react";
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

  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");

    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    } else {
      return clicksData;
    }
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    setClicks((clicks) => ({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setClicks(clicksData);
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const positiveValue = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <div>
        <Description />
        <Options
          updateFeedback={updateFeedback}
          totalClicks={totalFeedback}
          resetFeedback={resetFeedback}
        />
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
