import clsx from "clsx";
import styles from "./Feetdback.module.css";
const Feedback = ({ good, neutral, bad, hasFeedback }) => {
  const totalFeedback = good + neutral + bad;

  return (
    <ul className={clsx(styles.feedback_list)}>
      {hasFeedback ? (
        <>
          <li className={clsx(styles.feedback_item)}>Good: {good}</li>
          <li className={clsx(styles.feedback_item)}>Neutral: {neutral}</li>
          <li className={clsx(styles.feedback_item)}>Bad: {bad}</li>
          <li className={clsx(styles.feedback_item)}>Total: {totalFeedback}</li>
          <li className={clsx(styles.feedback_item)}>
            Positive: {Math.round((good / totalFeedback) * 100)}%
          </li>
        </>
      ) : (
        <p className={clsx(styles.feedback_text)}>No feedback yet</p>
      )}
    </ul>
  );
};

export default Feedback;
