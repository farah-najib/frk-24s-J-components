import { useEffect, useState } from "react";
import Input from "../Input/Input.jsx";
import Brick from "../Brick/Brick";
import styles from "./PlayerForm.module.css";
import Button from "../Button/Button.jsx";

export function PlayerForm({ gameState, toggleModal, startGame }) {
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErr("");
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [err]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name1 = p1.trim();
    const name2 = p2.trim();

    if (!name1 || !name2) return setErr("Please fill in both player fields");

    startGame({ p1: name1, p2: name2 });
  };

  return (
    <form>
      <div className={styles.FormWrapper}>
        <Brick color="black" />
        <Input
          id="p1"
          label="Player 1"
          value={p1}
          onChange={setP1}
          placeholder="Player 1"
        />
      </div>
      <div className={styles.FormWrapper}>
        <Brick color="white" />
        <Input
          id="p2"
          label="Player 2"
          value={p2}
          onChange={setP2}
          placeholder="Player 2"
        />
      </div>
      {err && <p className={styles.err}>{err}</p>}
      {gameState === "menu" && (
        <Button type="submit" text="Play game" handleClick={handleSubmit}>
          Play Game
        </Button>
      )}
      {gameState === "playing" && (
        <footer className={styles.footerBtns}>
          <Button text="quit" icon="▶|" />
          <Button text="restart" icon="⟳" />
          <Button
            text="resume"
            icon="▶"
            type="primary"
            onClick={toggleModal}
          />{" "}
        </footer>
      )}
    </form>
  );
}
export default PlayerForm;
