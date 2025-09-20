import Board from '../components/Board/Board.jsx'
import Menu from '../components/Menu/Menu.jsx'
export default function HomePage() {
    // You can manage game-level state here if needed
    const BOARD_SIZE = 8

    return (
        <div>
            <h1>Gumuko Game</h1>
            {/* <Menu/> */}
            <Board boardSize={BOARD_SIZE} />
        </div>
    )
}
