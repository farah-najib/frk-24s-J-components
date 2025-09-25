import Board from './Board'

export default {
    title:'components/Board',
    component: Board,
}

export const Default = {
    args: {
        boardTiles: 80,
        
    }
}

export const StartGame = {
    render: (args) => (

    <Board{...args}>
    <h1>Play Game</h1>
    </Board>
    ),
}

export const BreakMyComponent = {}

