import { useState, useEffect } from "react";

export default function Timer({ initialTime = 120, onTimeUp }) {
	const [timeLeft, setTimeLeft] = useState(initialTime);

	useEffect(() => {
		if (timeLeft <= 0) {
			onTimeUp?.();
			return;
		}
	const timeId= setInterval(() => {
		setTimeLeft((prev) => prev -1);
	}, 1000);
	
	return () => clearInterval(timerId);
	}, [timeLeft]);

	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;

	const timerClass = `${styles.timer} ${timerLeft <= 10 ? styles.warning : ""}`;


	return(
		<div style={{ fontSize: "24px", color: "white" }}>
		{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
		</div>
	);
}
