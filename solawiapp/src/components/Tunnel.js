import Modal from "../Modal.js";
import './Tunnel.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    
    <>
        <div className='box'>
          <h2 style={{paddingRight: "120px"}}>TUNNEL</h2>
          <Link className="verlinkung" to="/">FELDÜBERSICHT</Link>
        </div>

        <div className="containerT">
            <div className="langerT  feldHintergrundT" onClick={() => setIsOpen(true)}>T1</div>
            <div className="feldT">
            <div className="kurzerT  feldHintergrundT" onClick={() => setIsOpen(true)}>T2a</div>
            <div className="kurzerT  feldHintergrundT" onClick={() => setIsOpen(true)}>T2b</div>
            </div>
            <div className="feldT">
            <div className="kurzerT  feldHintergrundT" onClick={() => setIsOpen(true)}>T3a</div>
            <div className="kurzerT  feldHintergrundT" onClick={() => setIsOpen(true)}>T3b</div>
            </div>
            <div className="feldT">
            <div className="kurzerT  feldHintergrundT" onClick={() => setIsOpen(true)}>T4a</div>
            <div className="kurzerT  feldHintergrundT" onClick={() => setIsOpen(true)}>T4b</div>
            </div>
            <div className="langerT  feldHintergrundT" onClick={() => setIsOpen(true)}>T5</div>
        </div>


        <div>
            <p style={{paddingTop: "30px", paddingLeft: "5px", paddingRight: "10px" }}>Diese Pflanzen befinden sich alle im Tunnel. Klicke auf eine Reihe, um genau zu sehen welche Pflanzen dort zu finden sind. Mit Klick auf eine Pflanze erhälst du Beschreibung, Erntetipps & Rezepte dazu.</p>

            <div style={{ paddingLeft: "5px", paddingRight: "10px" }}>
                  <ul >
                      <li>
                          <a style={{color: "blue" }} href="https://www.solawineufarn.de/mairuebe">Mairübe</a>
                      </li>
                      <li>
                          <a style={{color: "blue" }} href="https://www.solawineufarn.de/mairuebe">Mairübe</a>
                      </li>
                      <li>
                          <a style={{color: "blue" }} href="https://www.solawineufarn.de/mairuebe">Mairübe</a>
                      </li>
                      <li>
                          <a style={{color: "blue" }} href="https://www.solawineufarn.de/mairuebe">Mairübe</a>
                      </li>
                      <li>
                          <a style={{color: "blue" }} href="https://www.solawineufarn.de/mairuebe">Mairübe</a>
                      </li>
                  </ul>
            </div>
        </div>

    <Modal open={isOpen} close={() => setIsOpen(false)}>
      <div className="ModalDiv">
        <h2 style={{color: "white", paddingBottom: "10px" }}>Pflanzen in dieser Reihe</h2>
          <ul>
            <li style={{color: "white", padding: "10px" }}>
            <a style={{color: "white" }} href="https://www.solawineufarn.de/mairuebe">Mairübe</a>
            </li>
            <li style={{color: "white", padding: "10px" }}>
            <a style={{color: "white" }} href="https://www.solawineufarn.de/mairuebe">Mairübe</a>
            </li>
            <li style={{color: "white", padding: "10px" }}>
            <a style={{color: "white" }} href="https://www.solawineufarn.de/mairuebe">Mairübe</a>
            </li>
          </ul>
      </div>
    </Modal>


    </>
  );
}

export default App;
