import styles from "./brick.module.css"
export const Brick = ({color="black"}) => {
	 
	const allowedColors = ["black", "white"];

	if(!allowedColors.includes(color)){return <>invalid color</>}
	
	return <div className={`${styles.brick} ${color === "black" ? styles.black : styles.white}`}> </div>}; export default Brick;
