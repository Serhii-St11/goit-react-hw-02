import { useState, useEffect } from "react";
import Description from "./components/description/Description";
import Variants from "./components/variants/Variants";
import Feedback from "./components/feetdback/Feetdback";
import "./App.css";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (key) => {
    setFeedback({ ...feedback, [key]: feedback[key] + 1 });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const hasFeedback =
    feedback.good > 0 || feedback.neutral > 0 || feedback.bad > 0;

  return (
    <>
      <div>
        <Description />
        <Variants
          updateFeedback={updateFeedback}
          resetFeedback={resetFeedback}
          hasFeedback={hasFeedback}
        />
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          hasFeedback={hasFeedback}
        />
      </div>
    </>
  );
}
