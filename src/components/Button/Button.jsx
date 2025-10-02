import styles from "./Button.module.css";
import { motion } from "framer-motion";
import { useRef } from "react";

const Button = ({
  text = "Click me",
  icon,
  type,
  draggable = false,
  handleClick,
}) => {
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
          setTimeout(() => (dragged.current = false), 1000);
        },
      }
    : {};

  const safeClick = (e) => {
    if (dragged.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    handleClick?.(e);
  };

  return (
    <Element
      type={type}
      className={`
        ${primaryButton ? styles.primary : styles.secondary}
        ${draggable ? styles.draggable : ""}
        `}
      {...dragProps}
      onClick={safeClick}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </Element>
  );
};

export default Button;
