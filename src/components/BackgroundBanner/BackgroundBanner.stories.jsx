import BackgroundBanner from "./BackgroundBanner";

export default {
  title: "components/BackgroundBanner",
  component: BackgroundBanner,
};

export const Default = {};

export const Winner = {
  args: { text: "WINNER" },
};

export const White = {
  args: { text: "WHITE", playerTurn: 2 },
};

export const Black = {
  args: { text: "BLACK", playerTurn: 1 },
};

export const Error404 = {
  args: { text: "404" },
};

export const BreakMyComponent = {
  args: { text: "12345" },
};
