import {useState} from "react"
export function Input({number}) {

	let safeNumber = number;

 const sanitize = (z) =>
    z
      .replace(/[^A-Za-zÅÄÖåäö\- ]/g, "")
      .replace(/\s+/g, " ")               
      .trim()
      .slice(0, 13);
	
	const [name, setName] = useState("")


	if(typeof(number) !== "number" || number <= 0){
	console.error("Missing number: ${number}.");
		safeNumber = 99;
	}
	

	return <div>
		
		<label htmlFor={`player${safeNumber}`}>Player {`${safeNumber}`}</label>
		<input id={`player${safeNumber}`} type="text" value={name} onChange={(e) => setName(sanitize(e.target.value))} 
		placeholder="Player name"/>

		</div>
} export default Input;
