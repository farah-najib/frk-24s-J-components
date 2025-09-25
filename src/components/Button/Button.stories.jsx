import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = {};

export const Text = {
  args: {
    text: "test",
  },
};

export const DraggableButton = {
  args: {
    text: "Primary",
    icon: "▶",
    type: "primary",
    draggable: true,
  },
};

export const Icon = {
  args: {
    icon: "▶",
  },
};

export const Primary = {
  args: {
    text: "Primary",
    icon: "▶",
    type: "primary",
  },
};

export const Secondary = {
  args: {
    text: "Secondary",
    icon: "▶",
    type: "secondary",
  },
};

export const BreakMyComponent = {
  args: {
    text: ["safffa"],
    icon: true,
  },
};
