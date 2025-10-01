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
  largeMenu = true,
  gameEnded = false,
}) => {
  let cellsToRender = [];

  for (let i = 0; i <= boardTiles; i++) {
    cellsToRender.push(i);
  }

  const currentColor = playerTurn === 1 ? "black" : "white";

  return (
    <div className={styles.boardWrapper}>
      <div className={`${styles.board} ${className}`} onClick={handleCellClick}>

        <div className={styles.cells}>
          {cellsToRender.map((_, idx) => (
            <Cell
              key={idx}
              disabled={!gameStarted}
              initialColor={currentColor}
            />
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
    </div>
  );
};
export default Board;
