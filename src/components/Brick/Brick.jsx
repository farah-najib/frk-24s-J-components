import styles from "./brick.module.css";

export const Brick = ({ color = "black" }) => {
  const allowedColors = ["black", "white"];

  if (!allowedColors.includes(color)) {
    console.error(`Brick recieved invalid color: ${color}`);

    return <div className={`${styles.brick} ${styles.black}`} />;
  }

  return (
    <div
      className={`${styles.brick} ${
        color === "black" ? styles.black : styles.white
      }`}
    >
      {" "}
    </div>
  );
};
export default Brick;
