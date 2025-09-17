import Cell from "./Cell";

export default {
	title: "Gomoku/Cell",
	component: Cell,
};

export const Empty = () => <Cell value={null} onClick={() => {}} />;
export const Black = () => <Cell value="black" onClick={() => {}} />;
export const White = () => <Cell value="white" onClick={() => {}} />;

