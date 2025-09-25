import styles from './Board.module.css'
import Cell from "../Cell/Cell.jsx"
import Menu from "../Menu"

const Board = ({playerOrder, boardTiles, className = "", gameStarted = false}) => {
	
	let cellsToRender = [];

	for(let i = 0; i <= boardTiles; i++){
		cellsToRender.push(i);
	}
    return (
			<div className={`${styles.board} ${className}`}>
					{!gameStarted && <Menu />}
				<div className={styles.behindCells}>
					{playerOrder}
				</div>
				
				{cellsToRender.map((cell, idx) => (
				<Cell key={idx} />
				))}
			
			</div>
		)
}
export default Board

