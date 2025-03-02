import clsx from "clsx"
import styles from "./Description.module.css"

const Description = () => {
return (
  <div className={clsx(styles.container)}>
    <h1 className={clsx(styles.title)}>Sip Happens Café</h1>
    <p>
      Please leave your feedback about our service by selecting one of the
      options below.
    </p>
  </div>
);
}

export default Description;