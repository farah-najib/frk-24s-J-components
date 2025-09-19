import styles from "./Cell.module.css";
import {useState} from "react" 
import Brick from "../Brick/Brick.jsx"

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
		{active && <Brick color={color}/>}
		</div>
		</>
	);
}


