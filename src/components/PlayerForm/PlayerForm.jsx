import {useState} from "react";
import Input from "../Input/Input.jsx"

export function PlayerForm({initial = {p1: "", p2: ""}}) {

	const [p1, setP1] = useState(initial.p1)
	const [p2, setP2] = useState(initial.p2)


return <>
		<Input id="p1" label="Player 1" value={p1} onChange={setP1} placeholder="Player 1"/>
		<Input id="p1" label="Player 2" value={p2} onChange={setP2} placeholder="Player 2"/>

		</>

} export default PlayerForm;
