import clsx from "clsx";
import styles from "./Variants.module.css";
const Variants = ({ updateFeedback, resetFeedback, hasFeedback }) => {
  return (
    <div className={clsx(styles.container)}>
      <button
        className={clsx(styles.button)}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={clsx(styles.button)}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={clsx(styles.button)}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {hasFeedback && (
        <button className={clsx(styles.button)} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Variants;
