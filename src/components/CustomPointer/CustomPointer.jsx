import styles from "./CustomPointer.module.css";

export default function CustomPointer({ playerTurn = 1 }) {
  const color = playerTurn === 1 ? "black" : "white";

  return (
    <div
      className={`${styles.circle} ${
        color === "black" ? styles.black : styles.white
      }`}
    />
  );
}
