import { motion } from "framer-motion";

const DragMenuBtn = () => (
  <motion.button
    drag
    dragMomentum={false}
    onClick={() => alert("Clicked!")}
    className=""
  >
    Menu
  </motion.button>
);

export default DragMenuBtn;
