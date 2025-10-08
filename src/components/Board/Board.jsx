import styles from './Board.module.css';
import Cell from '../Cell/Cell.jsx';

const Board = ({ gameState, playerTurn, placeMove, boardRows, boardCols }) => {
  const cols = Array.from({ length: boardCols }, (_, i) => i);
  const rows = Array.from({ length: boardRows }, (_, i) => i);

  const currentColor = playerTurn === 1 ? 'black' : 'white';

  return (
    <div className={styles.boardWrapper}>
      {/* <div className={styles.topBar}>
	  <Timer initialTime={300} onTimeUp={() => {
		  alert("Time is up! Restarting game...")
		  window.location.reload();
	  }}
	  />
	  </div>  */}

      <div className={styles.board}>
        <div className={styles.cells}>
          {rows.map((_, row) =>
            cols.map((_, col) => (
              <Cell
                key={`${col}-${row}`}
                cellIndex={{
                  col: col,
                  row: row,
                }}
                placeMove={placeMove}
                moveColor={currentColor}
                gameState={gameState}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Board;
