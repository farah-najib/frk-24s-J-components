import styles from "./Board.module.css";
import Cell from "../Cell/Cell.jsx";
import Menu from "../Menu";

const Board = ({
  playerOrder,
  boardTiles,
  className = "",
  gameStarted = false,
  largeMenu = true,
}) => {
  let cellsToRender = [];

  for (let i = 0; i <= boardTiles; i++) {
    cellsToRender.push(i);
  }
  return (
    <div className={`${styles.board} ${className}`}>
      {/* Player story - text behind cells */}
      <div className={styles.overlay}>{playerOrder}</div>

      <div className={styles.cells}>
        {cellsToRender.map((_, idx) => (
          <Cell key={idx} disabled={!gameStarted} />
        ))}
      </div>

      {/* Mid Game Menu story */}
      {!gameStarted && (
        <div className={styles.menu}>
          <Menu startGame={largeMenu} />{" "}
        </div>
      )}
    </div>
  );
};
export default Board;
