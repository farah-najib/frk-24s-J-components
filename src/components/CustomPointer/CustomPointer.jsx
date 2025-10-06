import { useEffect, useState } from "react";
import styles from "./CustomPointer.module.css";

export default function CustomPointer({ playerTurn = 1 }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const color = playerTurn === 1 ? "black" : "white";

  useEffect(() => {
    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className={`${styles.circle} ${styles[color]}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}
