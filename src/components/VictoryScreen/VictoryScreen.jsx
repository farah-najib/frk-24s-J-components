import styles from './VictoryScreen.module.css';
import Button from '../Button/Button'

const VictoryScreen = ({player, playAgain}) => {

	if (typeof(player) !== "string") {
		return (
			<p>prop player needs to be of type: string</p>
		)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		playAgain()
	}

	const name = player.toUpperCase()

	return (
		<div className={styles.backdrop}>
			<dialog open className={styles.dialog}>
				<form action="submit" onSubmit={handleSubmit}>
					<h1>{name} wins!</h1>
					<div className={styles.buttonContainer}>
						<Button text="Quit"/>
						<Button text="Play again?" style="primary" type="submit"/>
					</div>
				</form>
			</dialog>
		</div>
	)
}

export default VictoryScreen;
