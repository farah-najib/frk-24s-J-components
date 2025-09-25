import styles from "./Board.module.css";
import Cell from "../Cell/Cell.jsx";
import Menu from "../Menu";
import VictoryScreen from "../VictoryScreen";

const Board = ({
  playerOrder,
  boardTiles,
  className = "",
  gameStarted = false,
  largeMenu = true,
  gameEnded = false,
}) => {
  let cellsToRender = [];

  for (let i = 0; i <= boardTiles; i++) {
    cellsToRender.push(i);
  }
  return (
    <div className={`${styles.board} ${className}`}>
      {/* Player story - text behind cells */}
      <div className={styles.playerOverlay}>{playerOrder}</div>

      <div className={styles.cells}>
        {cellsToRender.map((_, idx) => (
          <Cell key={idx} disabled={!gameStarted} />
        ))}
      </div>

      {/* Mid Game Menu story */}
      {!gameStarted && !gameEnded && (
        <div className={styles.menu}>
          <Menu startGame={largeMenu} />{" "}
        </div>
      )}

      {/* Victory Screen story */}
      {gameEnded && gameStarted && (
        <div className={styles.scoreScreen}>
          <VictoryScreen />
        </div>
      )}
    </div>
  );
};
export default Board;
