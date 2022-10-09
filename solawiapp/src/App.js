import Modal from "./Modal.js";
import './App.css';
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">

        <div className="tunnelt1" onClick={() => setIsOpen(true)}>T1</div>
        <div className="tunnelt2a">T2A</div>
        <div className="tunnelt2b">T2B</div>
        <div className="tunnelt3a">T3A</div>
        <div className="tunnelt3b">T3B</div>
        <div className="tunnelt4a">T4A</div>
        <div className="tunnelt4b">T4B</div>
        <div className="tunnelt5">T5</div>

    <Modal open={isOpen} close={() => setIsOpen(false)}>
    <iframe width="500" height="400" src="https://www.solawineufarn.de/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Modal>


    </div>
  );
}

export default App;
