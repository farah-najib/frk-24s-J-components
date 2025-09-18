const Player = ({name, number}) => {

	let fallbackName = name;
	let fallbackNumber = number;

	  if(typeof(number) !== "number" || number <= 0){
                console.error(`Invalid number type: ${typeof(number)}. Only positive numbers are allowed.`)
                fallbackNumber = 99;
        }


	if (typeof(name) !== "string"){
		console.error(`Invalid name type: ${typeof(name)}. Only string is allowed.`)
		fallbackName = "Guest"

	} else if(!/^[A-Za-z]+$/.test(name)){
		console.error(`Invalid characters in name: ${name}. Only letters allowed.`)
		fallbackName = "Guest"

	}else if (name.length < 2 || name.length > 15){
		console.error(`Invalid name length: ${name.length}. Should be 2-15 chars.`)
		fallbackName = "Guest"
	}


	return(
		<p>Player {fallbackNumber}: {fallbackName}</p>
)
}

export default Player
