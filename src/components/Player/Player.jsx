const Player = ({name, number}) => {

	let safeName = name;
	let safeNumber = number;

	  if(typeof(number) !== "number" || number <= 0){
                console.error(`Invalid number type: ${typeof(number)}. Only positive numbers are allowed.`)
                safeNumber = 99;
		  
        }


	if (typeof(name) !== "string"){
		console.error(`Invalid name type: ${typeof(name)}. Only string is allowed.`)
		safeName = "Guest"

	} else if(!/^[A-Za-z]+$/.test(name)){
		console.error(`Invalid characters in name: ${name}. Only letters allowed.`)
		safeName = "Guest"

	}else if (name.length < 2 || name.length > 15){
		console.error(`Invalid name length: ${name.length}. Should be 2-15 chars.`)
		safeName = "Guest"
	}


	return(
		<p>Player {safeNumber}: {safeName}</p>
)
}

export default Player
