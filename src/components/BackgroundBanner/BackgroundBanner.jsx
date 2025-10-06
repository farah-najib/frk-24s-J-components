import styles from "./BackgroundBanner.module.css";

const BackgroundBanner = ({
  text = "GOMOKU",
  playerTurn,
  useTurnText = false,
  players
}) => {
  const isValidTurn = playerTurn === 1 || playerTurn === 2;
  const isP1 = playerTurn === 1;

  const p1Name = players[1].name.toUpperCase()
  const p2Name = players[2].name.toUpperCase()

  const label =
    useTurnText && isValidTurn ? (isP1 ? p1Name || "BLACK" :  p2Name || "WHITE") : text ?? "GOMOKU";

  const inlineStyle = isValidTurn ? { color: isP1 ? "black" : "white" } : {};

  return (
    <div className={`${styles.banner}`}>
      <span className={styles.text} style={inlineStyle}>
        {label}
      </span>
    </div>
  );
};

export default BackgroundBanner;
