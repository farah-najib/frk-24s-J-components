import styles from "./Board.module.css";
import Cell from "../Cell/Cell.jsx";
import Menu from "../Menu";
import VictoryScreen from "../VictoryScreen";


const Board = ({ gameConfig, handleCellClick, playerTurn }) => {
  
  const {
  boardTiles,
  className = "",
  gameStarted,
  largeMenu,
  gameEnded
} = gameConfig

  
  
  let cellsToRender = [];

  for (let i = 0; i <= boardTiles; i++) {
    cellsToRender.push(i);
  }

  const currentColor = playerTurn === 1 ? "black" : "white";

  return (
    <div className={`${styles.board} ${className}`} onClick={handleCellClick}>
      {/* Player story - text behind cells */}
      {!gameEnded && (
        <div className={styles.playerOverlay}>Player {playerTurn}</div>
      )}

      <div className={styles.cells}>
        {cellsToRender.map((_, idx) => (
          <Cell key={idx} disabled={!gameStarted} initialColor={currentColor} />
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