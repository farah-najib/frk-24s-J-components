import styles from './Cell.module.css'
import Brick from '../Brick/Brick.jsx'

export default function Cell({ color, onActivate }) {
    const handleClick = () => {
        if (!color) {
            onActivate()
        }
    }

    return (
        <div className={styles.quadrants} onClick={handleClick}>
            {color ? (
                <Brick color={color} />
            ) : (
                <button type="button" className={styles.cellButton}></button>
            )}
        </div>
    )
}
