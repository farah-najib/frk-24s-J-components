import { useEffect, useState } from "react";
import Input from "../Input/Input.jsx";
import Brick from "../Brick/Brick";
import styles from "./PlayerForm.module.css";

export function PlayerForm({ startGame, children, players, showForm }) {
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

    startGame({ p1, p2 });
    setP2("");
    setP1("");
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        {showForm && (
          <>
            <h2 className={styles.textPlayerTitle}>Players</h2>
            <div className={styles.FormWrapper}>
              <Brick color="black" />
              <Input
                id="p1"
                label="Player 1"
                value={p1}
                onChange={setP1}
                placeholder={players[1].name}
              />
            </div>
            <div className={styles.FormWrapper}>
              <Brick color="white" />
              <Input
                id="p2"
                label="Player 2"
                value={p2}
                onChange={setP2}
                placeholder={players[2].name}
              />
            </div>
          </>
        )}
        {err && <p className={styles.err}>{err}</p>}

        <footer className={styles.footerBtns}>{children}</footer>
      </form>
    </>
  );
}
export default PlayerForm;
