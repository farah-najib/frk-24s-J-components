import styles from './Button.module.css';

const Button = ({text="Click me", icon, type}) => {

	const primaryButton = type === "primary"

	if(typeof(text) !== "string") {
		return(
			<p>text needs to be of type string</p>
		)
	}

	if (primaryButton) {
		return (
			<button className={styles.primary}>{text} {icon}</button>
		)
	} else {
		return (
			<button className={styles.secondary}>{text} {icon}</button>
		)
	}
}

export default Button
