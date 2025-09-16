import "./App.css";
import Player from "./components/Player";
import DragMenuBtn from "./components/DragMenuBtn";
import Button from "./components/Button";
import MenuModal from "./components/MenuModal";
import Grid from "./components/Grid";
import { useState } from "react";
function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Grid />
      {/* Draggable menu button */}
      {!showModal && <DragMenuBtn onClick={() => setShowModal(true)} />}
      {showModal && <MenuModal setShowModal={setShowModal} />}
      <br />
      <br />

      {/* Custom reusable button */}
      <Button variant="destructive" onClick={() => alert("hello")}>
        TEST BUTTON
      </Button>
	  <Player />
    </>
  );
}

export default App;
