import clsx from "clsx";
import styles from "./Feedback.module.css";
const Feedback = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <ul className={clsx(styles.feedback_list)}>
      <li className={clsx(styles.feedback_item)}>Good: {good}</li>
      <li className={clsx(styles.feedback_item)}>Neutral: {neutral}</li>
      <li className={clsx(styles.feedback_item)}>Bad: {bad}</li>
      <li className={clsx(styles.feedback_item)}>Total: {totalFeedback}</li>
      <li className={clsx(styles.feedback_item)}>
        Positive: {positivePercentage}%
      </li>
    </ul>
  );
};

export default Feedback;