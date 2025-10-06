import styles from "./Menu.module.css";
import PlayerForm from "../PlayerForm/PlayerForm";
import Button from "../Button/Button";

const Menu = ({
  className,
  toggleModal,
  openModal,
  gameState,

  children,
}) => {
  return (
    <>
      {openModal && (
        <div
          className={styles.backdrop}
          onClick={gameState !== "playing" ? undefined : toggleModal}
        >
          <dialog
            open
            className={`${styles.menu} ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className={styles.textHeader}>Gomoku</h1>

            <h2 className={styles.sectionTitle}>about</h2>

            <p className={styles.textParagraph}>
              <b>Gomoku (五目並べ)</b> means “five in a row” and has its origins
              in China over 1000 years ago. It became very popular in Japan in
              the 1600s and later spread worldwide.
            </p>

            <h2 className={styles.sectionTitle}>how to play</h2>

            <ul className={styles.textParagraph}>
              <li>
                Two players take turns placing stones ( Black goes first).
              </li>
              <li>
                The goal is to be the first to get five in a row – horizontally,
                vertically, or diagonally.{" "}
              </li>
              <li>Stones cannot be moved or removed once placed.</li>
              <li>
                If the board is full with no winner, the game ends in a draw.
              </li>
            </ul>

            <h2 className={styles.textPlayerTitle}>Players</h2>

            {children}
          </dialog>
        </div>
      )}
    </>
  );
};
export default Menu;
