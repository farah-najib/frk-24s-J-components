import BackgroundBanner from "./BackgroundBanner";

export default {
  title: "components/BackgroundBanner",
  component: BackgroundBanner,
  args: { text: "GOMOKU", playerTurn: undefined, useTurnText: false },
  argTypes: {
    playerTurn: { control: { type: "radio" }, options: [1, 2] },
    useTurnText: { control: "boolean" },
  },
};

export const Default = {
  args:{
    playerTurn:2
  }
};

export const Winner = { args: { text: "WINNER" } };

export const TurnBlack = { args: { playerTurn: 1, useTurnText: true } };
export const TurnWhite = { args: { playerTurn: 2, useTurnText: true } };

export const White = { args: { text: "WHITE", playerTurn: 2 } };
export const Black = { args: { text: "BLACK", playerTurn: 1 } };

export const Error404 = { args: { text: "404" } };
export const BreakMyComponent = { args: { text: "12345" } };
