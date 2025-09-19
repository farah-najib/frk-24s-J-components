import Cell from "./Cell";

export default {
	title: "components/Cell",
	component: Cell,
	argTypes:{
		initialColor: { 
			control: {type: "inline-radio"}, 
			options: ["black", "white"], },
		isActivated: {control: "boolean"},

		onActivate: {action: "activated"},

	},
};


export const Default = {}

export const Black = {
	args: {initialColor: "black", isActivated: true}
}

export const White = {
	args: {initialColor: "white", isActivated: true}
}


export const BreakMyComponent = {
	args: {initialColor: 2124, isActivated: "fff"}
}




