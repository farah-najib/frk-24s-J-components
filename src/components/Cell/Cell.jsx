import styles from "./Cell.module.css";
import { useState, useRef, useEffect } from "react";
import Brick from "../Brick/Brick.jsx";

export default function Cell({ handleCellClick, cellIndex, moveColor }) {
  const [active, setActive] = useState(false);
  const [placedBrickColor, setPlacedBrickColor] = useState(null);

  const onClick = () => {
    if (active) return;
    setActive(true);
    setPlacedBrickColor(moveColor);
    handleCellClick(cellIndex);
  };

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={`${styles.cell} ${active && styles.active}`}
        aria-pressed={active}
      >
        {active && <Brick color={placedBrickColor} />}
      </button>
    </>
  );
}
