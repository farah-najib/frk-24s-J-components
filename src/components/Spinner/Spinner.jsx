
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.mult4}>
      <div className={`${styles.mul4stripe} ${styles.mul4stripe1}`}></div>
      <div className={`${styles.mul4stripe} ${styles.mul4stripe2}`}></div>
      <div className={`${styles.mul4stripe} ${styles.mul4stripe3}`}></div>
      <div className={`${styles.mul4stripe} ${styles.mul4stripe4}`}></div>
    </div>
  );
};

export default Spinner;
