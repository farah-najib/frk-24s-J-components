import { useState, useEffect } from "react";
import styles from "./Timer.module.css";

export default function Timer({ initialTime = 300, onTimeUp }) {
	const [timeLeft, setTimeLeft] = useState(initialTime);

	useEffect(() => {
		if (timeLeft <= 0) {
			onTimeUp?.();
			return;
		}
	const timerId= setInterval(() => {
		setTimeLeft((prev) => prev -1);
	}, 1000);
	
	return () => clearInterval(timerId);
	}, [timeLeft]);

	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;

	const timerClass = `${styles.timer} ${timeLeft <= 10 ? styles.warning : ""}`;


	return(
		<div style={{ fontSize: "24px", color: "black" }}>
		{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
		</div>
	);
}
