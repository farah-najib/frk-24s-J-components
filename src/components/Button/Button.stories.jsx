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
// skapa stories till Button(Quit game, Resume, Menu, Play Game)
export const QuitGame = {
  args: {
    text: "Quit Game",
    type: "secondary",
    icon: "❌",
  },
};

export const Resume = {
  args: {
    text: "Resume",
    type: "primary",
    icon: "⏯",
  },
};

export const Menu = {
  args: {
    text: "Menu",
    type: "secondary",
    icon: "📋",
  },
};

export const PlayGame = {
  args: {
    text: "Play Game",
    type: "primary",
    icon: "▶",
  },
};
