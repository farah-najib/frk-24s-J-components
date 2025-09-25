import styles from './Board.module.css'
import Cell from "../Cell/Cell.jsx"


const Board = ({children, boardTiles}) => {
	
	let cellsToRender = [];

	for(let i = 0; i <= boardTiles; i++){
		cellsToRender.push(i);
	}
    return (
			<div className={styles.board}>
				{cellsToRender.map((cell, idx) => (
				<Cell key={idx} />
				))}
				{children}
			</div>
		)
}
export default Board

