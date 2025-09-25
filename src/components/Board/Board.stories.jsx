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

export const Player = {
    render: (args) => (

    <Board boardTiles={80} playerOrder={"Player 1"}/>
      
    ),
}

export const StartMenu = {
    render: (args) => (

    <Board boardTiles={80} playerOrder={"Player 1"}/>
      
    ),
}


export const BreakMyComponent = {}

