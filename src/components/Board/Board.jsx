import styles from './Board.module.css'
import { useState } from 'react'
import Cell from '../Cell/Cell.jsx'

const Board = ({ boardSize = 10 }) => {
    // 2D board: null = empty, "black" or "white" = stone
    const [board, setBoard] = useState(
        Array(boardSize)
            .fill(null)
            .map(() => Array(boardSize).fill(null))
    )
    const [turn, setTurn] = useState('black')
    const [winner, setWinner] = useState(null)

    const handleActivate = (row, col) => {
        if (winner) return // stop if game already ended
        if (board[row][col] !== null) return // already taken

        const newBoard = board.map((r, ri) =>
            r.map((c, ci) => (ri === row && ci === col ? turn : c))
        )

        setBoard(newBoard)

        // Check if current player wins
        if (checkWin(newBoard, row, col, turn)) {
            setWinner(turn)
            return
        }

        // Switch turn
        setTurn((prev) => (prev === 'black' ? 'white' : 'black'))
    }

    // Check 5-in-a-row
    const checkWin = (board, row, col, player) => {
        const directions = [
            [1, 0], // vertical
            [0, 1], // horizontal
            [1, 1], // diagonal down-right
            [1, -1] // diagonal down-left
        ]

        const inBounds = (r, c) =>
            r >= 0 && r < board.length && c >= 0 && c < board.length

        for (let [dr, dc] of directions) {
            let count = 1

            // forward direction
            let r = row + dr,
                c = col + dc
            while (inBounds(r, c) && board[r][c] === player) {
                count++
                r += dr
                c += dc
            }

            // backward direction
            r = row - dr
            c = col - dc
            while (inBounds(r, c) && board[r][c] === player) {
                count++
                r -= dr
                c -= dc
            }

            if (count >= 5) return true
        }

        return false
    }

    // Render cells
    const cells = []
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            cells.push(
                <Cell
                    key={`${row}-${col}`}
                    color={board[row][col]}
                    onActivate={() => handleActivate(row, col)}
                />
            )
        }
    }

    return (
        <div className={styles.board}>
            {cells}
            <div className={styles.turnIndicator}>
                {winner ? `Winner: ${winner}` : `Turn: ${turn}`}
            </div>
        </div>
    )
}

export default Board
