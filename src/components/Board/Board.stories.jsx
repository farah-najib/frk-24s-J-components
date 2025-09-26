import Board from "./Board";

export default {
  title: "components/Board",
  component: Board,
};

export const Default = {
  args: {
    gameConfig: {
      boardTiles: 80,
      gameStarted: true,
    }
  },
};

export const Player = {
  render: () => (
    <Board gameConfig={{
      gameStarted: true,
      boardTiles: 80,
      playerOrder: "Player 1"
    }} />
  ),
};

export const StartMenu = {
  render: () => (
    <Board gameConfig={{
      gameStarted: false,
      boardTiles: 80,
      playerOrder: "Player 1",
      largeMenu: false
    }} 
    />
  ),
};
export const MidGameMenu = {
  render: () => (
    <Board gameConfig={{
      gameStarted: false,
      boardTiles: 80,
      playerOrder: "Player 1"
    }} />
  ),
};

export const GameOver = {
  render: () => (
    <Board gameConfig={{
      gameStarted: true,
      boardTiles: 80,
      playerOrder: "Player 1",
      gameEnded: true
    }}
    />
  ),
};

export const BreakMyComponent = {};
