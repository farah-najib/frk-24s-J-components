// CustomPointer.stories.jsx
import CustomPointer from "./CustomPointer";

const meta = {
  title: "components/CustomPointer",
  component: CustomPointer,
  argTypes: {
    playerTurn: { control: { type: "radio" }, options: [1, 2] },
    enabled: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div className="sb-cursor-scope" style={{ minHeight: 300 }}>
        <Story />
        {/* stor yta att röra musen i */}
      </div>
    ),
  ],
};
export default meta;

export const Black = { args: { playerTurn: 1, enabled: true } };
export const White = { args: { playerTurn: 2, enabled: true } };
export const Disabled = { args: { enabled: false } };
