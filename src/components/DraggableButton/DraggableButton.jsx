import {motion} from "framer-motion"

const DraggableButton = () => {
	return (
		<motion.button drag whileDrag={{ scale: 0.9}} dragMomentum={false} onClick={() => alert("good enough?")}>Test</motion.button>	)
}

export default DraggableButton








