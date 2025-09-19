import styles from './Button.module.css';

const Button = ({text="Click me", icon, type}) => {

	const primaryButton = type === "primary"

	if(typeof(text) !== "string") {
		return(
			<p>text needs to be of type string</p>
		)
	}

	return(
		<button className={primaryButton ? `${styles.primary}` : `${styles.secondary}`}>
			{icon && <span>{icon}</span>}
			<span>{text}</span>
		</button>
	)
}

export default Button
