import styles from "./input.module.css";

export function Input({ 
	label,
	id,
	value = "",
	onChange = () => {},
	placeholder = "",
}) {
  const sanitize = (z) =>
    z
      .replace(/[^A-Za-zÅÄÖåäö\- ]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 13);

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={ label }
        type="text"
        value={value}
        onChange={(e) => onChange(sanitize(e.target.value))}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}
export default Input;
