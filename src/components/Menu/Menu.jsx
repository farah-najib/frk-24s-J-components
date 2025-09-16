import styles from "./Menu.module.css";
const Menu = () => {
  return (
    <section className={styles.menu}>
      <h1 className={styles.textHeader}>Gomoku</h1>
      <h2 className={styles.sectionTitle}>about</h2>
      <p className={styles.textParagraph}>
        Gomoku (五目並べ) means “five in a row” and has its origins in China
        over 1000 years ago. It became very popular in Japan in the 1600s and
        later spread worldwide.
      </p>
      <h2 className={styles.sectionTitle}>how to play</h2>
      <ul className={styles.textParagraph}>
        <li>Two players take turns placing stones ( Black goes first).</li>
        <li>
          The goal is to be the first to get five in a row – horizontally,
          vertically, or diagonally.{" "}
        </li>
        <li>Stones cannot be moved or removed once placed.</li>
        <li>If the board is full with no winner, the game ends in a draw.</li>
      </ul>
      <h2 className={styles.textPlayerTitle}>Players</h2>
      <form className={styles.playerForm}>
        <div className={styles.playerIconPosition}>
          <div title="icon">O</div>
          <div className={styles.playFormLayout}>
            {" "}
            <span className={styles.miniPlayerText}>Player 1</span>
            <input
              type="text"
              placeholder="Gabriels Ferrari                      x"
            />
          </div>
        </div>
        <div className={styles.playerIconPosition}>
          <div title="icon">O</div>
          <div className={styles.playFormLayout}>
            {" "}
            <span className={styles.miniPlayerText}>Player 2</span>
            <input
              type="text"
              placeholder="Johnny Pang Pang                  x"
            />
          </div>
        </div>
      </form>
      <footer className={styles.footerBtns}>
        <button>quit game</button>
        <button>restart</button>
        <button
          style={{
            background: "#ff9500",
            color: "black",
            borderColor: "black",
          }}
        >
          resume
        </button>
      </footer>
    </section>
  );
};
export default Menu;
