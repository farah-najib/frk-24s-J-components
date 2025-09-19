import { useState } from "react";
import styles from "./input.module.css";

export function Input({ label }) {
  const sanitize = (z) =>
    z
      .replace(/[^A-Za-zÅÄÖåäö\- ]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 13);

  const [name, setName] = useState("");

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <input
        id={{ label }}
        type="text"
        value={name}
        onChange={(e) => setName(sanitize(e.target.value))}
        placeholder="Player name"
        className={styles.input}
      />
    </div>
  );
}
export default Input;
