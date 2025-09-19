import { useState } from "react";
import Input from "../Input/Input.jsx";
import Brick from "../Brick/Brick";
import styles from "./PlayerForm.module.css";

export function PlayerForm() {
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");

  return (
    <>
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
          id="p1"
          label="Player 2"
          value={p2}
          onChange={setP2}
          placeholder="Player 2"
        />
      </div>
    </>
  );
}
export default PlayerForm;
