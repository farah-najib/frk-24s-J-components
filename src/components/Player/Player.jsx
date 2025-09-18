const Player = ({name, number}) => {

	if (typeof(name) !== "string") return <p>fel som fan</p>

	return(
		<p>Player {number}: {name}</p>
	)
}

export default Player
