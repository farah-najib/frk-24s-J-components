import styles from "./VictoryScreen.module.css";

const VictoryScreen = ({ player = "Player 1", children }) => {
  if (typeof player !== "string") {
    return <p>prop player needs to be of type: string</p>;
  }

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     playAgain();
  //   };

  const name = player.toUpperCase();

  return (
    <div className={styles.backdrop}>
      <dialog open className={styles.dialog}>
        {/* <form action="submit" onSubmit={handleSubmit}> */}
        <h1 style={{ textAlign: "center" }}>{name} wins!</h1>

        <div className={styles.buttonContainer}>{children}</div>
        {/* CHILDREN IS HERE */}

        {/* </form> */}
        {/* form wtf? */}
      </dialog>
    </div>
  );
};

export default VictoryScreen;
