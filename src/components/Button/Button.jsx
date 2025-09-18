const Button = ({text="Click me", icon}) => {

	if(typeof(text) !== "string") {
		return(
			<p>text needs to be of type string</p>
		)
	}

	return (
		<><button>{text} {icon}</button></>
	)	
}

export default Button
