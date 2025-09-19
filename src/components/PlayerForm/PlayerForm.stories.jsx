import PlayerForm from "./PlayerForm";

export default {
  title: "components/PlayerForm",
  component: PlayerForm,
	argTypes: { onSubmit: {action: "submitted!"},
	},
};

export const Default = {};

export const ThreeButtons = {
	render: (args) => (
	<PlayerForm
		{...args}
	actions={
	<>
	<button>Quit game</button>
	<button>Restart game</button>
	<button type='submit'>Resume game</button>
		</>
	}
		/>
	),
}

export const BreakMyComponent = {};
