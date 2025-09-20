import styles from "./Cell.module.css";
import {useState, useMemo, useEffect} from "react"
import Brick from "../Brick/Brick.jsx"


export default function Cell({initialColor = "black", isActivated = false, onActivate}) {

	const safeColor = useMemo(() => {
                const x = String(initialColor).toLowerCase();
                if(x === "black" || x === "white") return x;
                console.warn(`Invalid Color:${initialColor}. Defaulting to "black".`)
                return "black";
        }, [initialColor]);


	const safeActive = typeof isActivated === "boolean" ? isActivated :
		(() => {
			console.warn("Is not a boolean");
			return Boolean(isActivated)
		})();


	const [active, setActive] = useState(isActivated);
	const [color, setColor] = useState(safeColor);

	useEffect(() => {setActive(safeActive)}, [safeActive])
	useEffect(() => {setColor(safeColor)}, [safeColor])

	console.log(`activated: ${active}. Color: ${color}`)


	const handleClick = () =>{

			if(active)return console.error("Button has already been used.")

			if(!active){

			setActive(true);
			setColor(safeColor);

			onActivate?.(color)

		}

	}



	return ( <>
		<button type="button" onClick={handleClick} className={`${styles.cell} ${active && styles.active}` }
		disabled={active}>
            
		{active && <Brick color={safeColor} aria-pressed={active}/>}


		</button>
		</>
	);

}
