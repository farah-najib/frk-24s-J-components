import styles from './ScoreScreen.module.css';

const ScoreScreen = ({player}) => {

	if (typeof(player) !== "string") {
		return (
			<p>prop player needs to be of type: string</p>
		)
	}

	return (
		<dialog open className={styles.dialog}>
			<h1>{player} wins!</h1>
		</dialog>
	)
}

export default ScoreScreen
