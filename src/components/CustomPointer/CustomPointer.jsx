import { useEffect, useState } from "react";
import "./CustomPointer.module.css";

export default function CustomPointer({ playerTurn = 1, enabled = true }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className={`cursor ${playerTurn === 1 ? "black" : "white"}`}
      style={{ left: pos.x, top: pos.y }}
      aria-hidden
    />
  );
}
