import Board from "./Board";

export default {
  title: "components/Board",
  component: Board,
};

export const Default = {
  args: {
    boardTiles: 80,
    gameStarted: true,
  },
};

export const Player = {
  render: () => (
    <Board gameStarted={true} boardTiles={80} playerOrder={"Player 1"} />
  ),
};

export const StartMenu = {
  render: () => (
    <Board
      gameStarted={false}
      boardTiles={80}
      playerOrder={"Player 1"}
      largeMenu={false}
    />
  ),
};
export const MidGameMenu = {
  render: () => (
    <Board gameStarted={false} boardTiles={80} playerOrder={"Player 1"} />
  ),
};

export const BreakMyComponent = {};
