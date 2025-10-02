import styles from "./Cell.module.css";
import { useState, useRef, useEffect } from "react";
import Brick from "../Brick/Brick.jsx";

export default function Cell({ handleCellClick, cellIndex, brickColor }) {
  const [active, setActive] = useState(true);

  return (
    <>
      <button
        type="button"
        onClick={() => handleCellClick(cellIndex)}
        className={`${styles.cell} ${active && styles.active}`}
        aria-pressed={active}
      >
        {active && <Brick color={brickColor} />}
      </button>
    </>
  );
}
