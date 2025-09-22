import styles from './Board.module.css'
import Cell from "../Cell/Cell.jsx"


const boardTiles = 30;

const Board = () => {
		
		
		
	let cellsToRender = [];

	for(let i = 0; i <= 80; i++){
		cellsToRender.push(i);
	}




    return <div className={styles.board}>
		{cellsToRender.map((cell, idx) => (
			
		<Cell key={idx} />

		))}


		</div>
}
export default Board

