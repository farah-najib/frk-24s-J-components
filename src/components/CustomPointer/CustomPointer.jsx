import styles from "./CustomPointer.module.css";

export default function CustomPointer({ color = "black" }) {
  return (
    <div
      className={`${styles.circle} ${
        color === "black" ? styles.black : styles.white
      }`}
    />
  );
}
