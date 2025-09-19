import styles from "./Cell.module.css";
import {useState} from "react" 
import Brick from "../Brick/Brick.jsx"

<<<<<<< HEAD
export default function Cell() {
	const [active, setActive] = useState(false);
	const [color, setColor] = useState("black");

	const handleClick = () =>{
			if(!active){
			setActive(true);
		} else {
			setColor((prevColor) => (prevColor === "black" ? "white" : "black"));
			
		}

	}

	return ( <>
		<div onClick={handleClick} className={`${styles.cell} ${active && styles.active}`}>
		{active && <h1>hello</h1>}
		</div>
		</>
	);
=======
export default function Cell({ value, onClick }) {
	return (
		<div
		className={styles.cell} onClick={onClick}>
		{value === "black" && (
			<img 
			src="/black_brick.png"
			alt="black brick"
			className={styles.brick}
			/>
		)}
		{value === "white" &&(
			<img
			src="/white_brick.png"
			alt="white brick"
			className={styles.brick}
			/>
		)}
		</div>
	
);
>>>>>>> ce343d1 (img added to cell)
}


