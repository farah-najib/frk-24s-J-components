import styles from "./Cell.module.css";
import { useState } from "react";
import Brick from "../Brick/Brick.jsx";

export default function Cell({ placeMove, cellIndex, moveColor, gameState }) {
  const [active, setActive] = useState(false);
  const [placedBrickColor, setPlacedBrickColor] = useState(null);

  const onClick = () => {
    if (gameState !== "playing") return;
    if (active) return;
    setActive(true);
    setPlacedBrickColor(moveColor);
    placeMove(cellIndex);
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
