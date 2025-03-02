import clsx from "clsx";
import styles from "./Notification.module.css"
const Notification = () => {
return <p className={clsx(styles.notification_text)}>No feedback yet</p>;
}
export default Notification;