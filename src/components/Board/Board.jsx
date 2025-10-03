import styles from "./Board.module.css";
import Cell from "../Cell/Cell.jsx";
import Menu from "../Menu";
import VictoryScreen from "../VictoryScreen";
import Timer from "../Timer/Timer.jsx";

const Board = ({
  gameState,
  playerTurn,
  placeMove,
  boardTiles,
}) => {
  const cellsToRender = new Array(boardTiles).fill(null);

  const currentColor = playerTurn === 1 ? "black" : "white";

  return (
    <div className={styles.boardWrapper}>
	{/* <div className={styles.topBard}>
	  <Timer initialTime={120} onTimeUp={() => {
		  alert("Time is up! Restarting game...")
		  window.location.reload();
	  }}
	  />
	  </div> */}

	<div className={styles.board}>
        <div className={styles.cells}>
          {cellsToRender.map((_, idx) => (
            <Cell
              key={idx}
              cellIndex={idx}
              placeMove={placeMove}
              moveColor={currentColor}
              gameState={gameState}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Board;
