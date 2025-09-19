import Input from "./Input"
import {useState} from "react"

export default {
	title: 'Components/Input',
	component: Input,

}

export const Default = {
	args: { id: "name", label: "Name", placeholder: "Enter name"}
}

export const Controlled = {
	render: (args) => {
	const [textInput, setTextInput] = useState("");
	return <Input {...args} id={"name"} 
		label={"Name"}
		placeholder={"Enter name"}
		value={textInput} onChange={setTextInput} />
	}
}

export const BreakMyComponent = {

	args: { number: "kvargsauce"}
}
