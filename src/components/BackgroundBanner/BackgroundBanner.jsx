import styles from "./BackgroundBanner.module.css";

const BackgroundBanner = ({ text = "GOMOKU", className = "" }) => {
  return (
    <div className={`${styles.banner} ${className}`}>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default BackgroundBanner;
