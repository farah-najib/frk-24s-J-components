import Player from './Player';

export default {
	title: "Components/Player",
	component: Player,
}

export const Default = {
	args: {
		name: "jan",
		number: 123,
	}	
}

export const BreakMyComponent = {
	args: {
		name: [123, 123, 123, 123],
		number: () => {}
	}

}



