import styles from "./BackgroundBanner.module.css";

const BackgroundBanner = ({
  text = "GOMOKU",
  className = "",
  playerTurn,
  useTurnText = false,
}) => {
  const isValidTurn = playerTurn === 1 || playerTurn === 2;
  const isP1 = playerTurn === 1;

  const label =
    useTurnText && isValidTurn ? (isP1 ? "BLACK" : "WHITE") : text ?? "GOMOKU";

  const inlineStyle = isValidTurn ? { color: isP1 ? "black" : "white" } : {};

  return (
    <div className={`${styles.banner} ${className}`}>
      <span className={styles.text} style={inlineStyle}>
        {label}
      </span>
    </div>
  );
};

export default BackgroundBanner;
