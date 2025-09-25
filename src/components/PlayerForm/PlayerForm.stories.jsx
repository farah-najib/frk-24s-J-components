import PlayerForm from "./PlayerForm";

export default {
  title: "components/PlayerForm",
  component: PlayerForm,
	argTypes: { onSubmit: {action: "submitted!"},
	},
};

export const Default = {};

export const StartGame = {
	render: (args) => (
	<PlayerForm{...args}>
	<button>Play Game</button>
	</PlayerForm>
	),
}

export const MainMenu = {
	render: (args) => (
	<PlayerForm{...args}>
	<button>quit game</button>
	<button>restart</button>
	<button>resume</button>
	</PlayerForm>
	),
}

export const BreakMyComponent = {};
