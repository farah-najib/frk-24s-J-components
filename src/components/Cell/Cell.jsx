import styles from "./Cell.module.css";

export default function Cell({ value, onClick }) {
	return (
		<div
		className={`${styles.cell} ${
			value === "black" ? styles.black : value === "white" ? styles.white : "" }`}
		onClick={onClick}
		/>
	);
}


