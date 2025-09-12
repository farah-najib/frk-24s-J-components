import Button from "./Button";

const MenuModal = ({ setShowModal }) => {
  return (
    <section
      style={{ backgroundColor: "white", color: "black", height: "300px" }}
    >
      <h1>Player1</h1>
      <h1>Player2</h1>
      <p>How To</p>
      <p>You are suppose to get 5 in a row etc.</p>
      <Button variant="primary" onClick={() => setShowModal(false)}>
        Resume Game
      </Button>
    </section>
  );
};

export default MenuModal;
