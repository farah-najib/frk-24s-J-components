import styles from './ScoreScreen.module.css';
import Button from '../Button/Button'

const ScoreScreen = ({player="Player 1"}) => {

	if (typeof(player) !== "string") {
		return (
			<p>prop player needs to be of type: string</p>
		)
	}

	return (
		<dialog open className={styles.dialog}>
			<h1>{player} wins!</h1>
			<div className={styles.buttonContainer}>
				<Button text="Quit"/>
				<Button text="Play again?" type="primary"/>
			</div>
		</dialog>
	)
}

export default ScoreScreen
