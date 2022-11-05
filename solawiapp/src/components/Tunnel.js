import Modal from "../Modal.js";
import './Tunnel.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    
    <>
      <Link className="verlinkung" to="/">ZUR FELDÜBERSICHT</Link>

        <div className="containerT">
            <div className="langerT  feldHintergrundT">T1</div>
            <div className="feldT">
            <div className="kurzerT  feldHintergrundT">T2a</div>
            <div className="kurzerT  feldHintergrundT">T2b</div>
            </div>
            <div className="feldT">
            <div className="kurzerT  feldHintergrundT">T3a</div>
            <div className="kurzerT  feldHintergrundT">T3b</div>
            </div>
            <div className="feldT">
            <div className="kurzerT  feldHintergrundT">T4a</div>
            <div className="kurzerT  feldHintergrundT">T4b</div>
            </div>
            <div className="langerT  feldHintergrundT">T5</div>
        </div>


    <Modal open={isOpen} close={() => setIsOpen(false)}>
    <iframe width="500" height="400" src="https://www.solawineufarn.de/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Modal>


    </>
  );
}

export default App;
