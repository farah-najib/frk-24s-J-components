import styles from "./Cell.module.css";
import { useState, useRef, useEffect } from "react";
import Brick from "../Brick/Brick.jsx";

export default function Cell({
  initialColor = "black",
  isActivated = false,
  onActivate,
  handleCellClick,
  cellIndex,
  brickColor,
}) {
  const safeColor = (() => {
    const x = String(initialColor).toLowerCase();
    if (x === "black" || x === "white") return x;
    console.warn(`Invalid Color:${initialColor}. Defaulting to "black".`);
    return "black";
  })();

  const safeActive =
    typeof isActivated === "boolean"
      ? isActivated
      : (() => {
          console.warn("Is not a boolean");
          return Boolean(isActivated);
        })();

  const [active, setActive] = useState(isActivated);
  const [color, setColor] = useState(safeColor);

  useEffect(() => {
    setActive(safeActive);
  }, [safeActive]);

  useEffect(() => {
    if (!active) setColor(safeColor);
  }, [safeColor]);

  const handleClick = () => {
    if (!active) {
      setActive(true);
      setColor(safeColor);
      handleCellClick();
      onActivate?.(safeColor);
    }

    setTimeout(() => {
      clickLock.current = false;
    }, 0);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => handleCellClick(cellIndex)}
        className={`${styles.cell} ${active && styles.active}`}
      >
        {active && <Brick color={brickColor} aria-pressed={active} />}
      </button>
    </>
  );
}
