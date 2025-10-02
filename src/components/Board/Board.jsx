import styles from "./Board.module.css";
import Cell from "../Cell/Cell.jsx";
import Menu from "../Menu";
import VictoryScreen from "../VictoryScreen";

const Board = ({
  playerTurn,
  handleCellClick,
  boardTiles,
  className = "",
  gameStarted = true,
  brickColor,
}) => {
  const cellsToRender = new Array(boardTiles).fill(null);

  const currentColor = playerTurn === 1 ? "black" : "white";

  return (
    <div className={styles.boardWrapper}>
      <div className={`${styles.board} ${className}`}>
        <div className={styles.cells}>
          {cellsToRender.map((_, idx) => (
            <Cell
              key={idx}
              cellIndex={idx}
              disabled={!gameStarted}
              initialColor={currentColor}
              handleCellClick={handleCellClick}
              brickColor={brickColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Board;
