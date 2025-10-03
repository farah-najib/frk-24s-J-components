import CustomPointer from "./CustomPointer";

export default {
  title: "components/CustomPointer",
  component: CustomPointer,
  argTypes: {
    playerTurn: {
      control: { type: "radio" },
      options: [1, 2],
    },
  },
};

export const Player1 = {
  args: { playerTurn: 1 },
};

export const Player2 = {
  args: { playerTurn: 2 },
};

export const BreakMyComponent = {
  args: { playerTurn: 99 }, // ogiltigt värde för att testa fallback
};
