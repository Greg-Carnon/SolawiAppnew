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
            <div className="langerT  feldHintergrundT" onClick={() => setIsOpen(true)}>T1</div>
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
      <div className="ModalDiv">
        <h2>Pflanzen im Fled T1</h2>
          <ul>
            <li>
            <a href="https://www.solawineufarn.de/mairuebe">Mairübe</a>
            </li>
            <li>
            <a href="https://www.solawineufarn.de/mairuebe">Mairübe</a>
            </li>
            <li>
            <a href="https://www.solawineufarn.de/mairuebe">Mairübe</a>
            </li>
          </ul>
      </div>
    
    </Modal>


    </>
  );
}

export default App;
