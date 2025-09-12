import { motion } from "framer-motion";

const DragMenuBtn = ({ onClick }) => (
  <motion.button
    drag
    dragMomentum={false}
    onClick={onClick}
    className=""
    type="button"
    aria-label="Open menu"
    title="Open menu"
  >
    Drag me
  </motion.button>
);

export default DragMenuBtn;
