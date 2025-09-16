// Board.stories.js
import Board from './Board'

export default {
    title: 'components/Board',
    component: Board
}

// A basic story
export const DefaultBoard = () => <Board />

// Another story, for testing variations
export const BreakMyComponent = () => <Board />
