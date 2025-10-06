import styles from './VictoryScreen.module.css';
import Button from '../Button/Button'

const VictoryScreen = ({player, onEnter}) => {

	if (typeof(player) !== "string") {
		return (
			<p>prop player needs to be of type: string</p>
		)
	}

	const name = player.toUpperCase()

	return (
		<div className={styles.backdrop} onMouseEnter={onEnter(true)}>
			<dialog open className={styles.dialog}>
				<h1>{name} wins!</h1>
				<div className={styles.buttonContainer}>
					<Button text="Quit"/>
					<Button text="Play again?" style="primary"/>
				</div>
			</dialog>
		</div>
	)
}

export default VictoryScreen;
