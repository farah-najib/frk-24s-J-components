import {motion} from "framer-motion"
import {useRef} from "react"

const DraggableButton = () => {

	const dragged = useRef(false)

	return (
		<motion.button drag whileDrag={{ scale: 0.9}} dragMomentum={false} onDragStart={() => (dragged.current = true)} onDragEnd={() => { setTimeout(() => (dragged.current = false), 0)}} onClick={() => { if(!dragged.current){ alert("good enough?")}
		}}>Test</motion.button>	)
}

export default DraggableButton








