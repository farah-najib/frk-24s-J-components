import { useEffect, useState } from "react";
import Input from "../Input/Input.jsx";
import Brick from "../Brick/Brick";
import styles from "./PlayerForm.module.css";

export function PlayerForm({ onSubmit, children }) {
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [errMsg, setErrMsg] = useState("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrMsg("")
    }, 2000);
  
    return () => {
      clearTimeout(timeout)
    }
  }, [errMsg])
  


  const handleSubmit = (e) => {
	e.preventDefault();
	 if(p1.length <= 0 || p2.length <= 0){
		console.warn("empty strings are not allowed")
		setErrMsg("Please fill in both player fields")
		 return;
	 }
	  
	onSubmit?.({ p1: p1.trim(), p2: p2.trim() })
	}

  return (
 
    <form onSubmit={handleSubmit}>
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
      {errMsg && <p className={styles.errMsg}>{errMsg}</p>}
    <footer className={styles.footerBtns}>
   {children}  </footer> 
    </form>
  );
}
export default PlayerForm;
