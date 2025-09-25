import styles from './Board.module.css'
import Cell from "../Cell/Cell.jsx"


const Board = ({children, boardTiles, className = ""}) => {
	
	let cellsToRender = [];

	for(let i = 0; i <= boardTiles; i++){
		cellsToRender.push(i);
	}
    return (
			<div className={`${styles.board} ${className}`}>
				<div className={styles.behindCells}>
					{children}

				</div>
				{cellsToRender.map((cell, idx) => (
				<Cell key={idx} />
				))}
				
			</div>
		)
}
export default Board

