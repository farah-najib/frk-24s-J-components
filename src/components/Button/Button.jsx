import styles from "./Button.module.css";
import { motion } from "framer-motion";
import { useRef } from "react";

const Button = ({ text = "Click me", icon, type, draggable = false }) => {
  if (typeof text !== "string") {
    return <p>text needs to be of type string</p>;
  }
  const dragged = useRef(false);

  const primaryButton = type === "primary";

  const Element = draggable ? motion.button : "button";

  const dragProps = draggable
    ? {
        drag: true,
        whileDrag: { scale: 0.7 },
        dragMomentum: false,
        // Dra utan att den ska registrera en klick
        onDragStart: () => (dragged.current = true),
        onDragEnd: () => {
          setTimeout(() => (dragged.current = false), 0);
        },
      }
    : {};

  const handleClick = (e) => {
    if (draggable && dragged.current) return;

    alert("Hello gomoku");
  };

  return (
    <Element
      className={primaryButton ? `${styles.primary}` : `${styles.secondary}`}
      {...dragProps}
      onClick={handleClick}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </Element>
  );
};

export default Button;
