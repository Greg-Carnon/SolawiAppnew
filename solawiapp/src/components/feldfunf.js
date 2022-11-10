import React, { useState } from "react";
import Modal from "../Modal.js";
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldfunf = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
              <div className='box'>
          <h2 style={{paddingRight: "120px"}}>FELD 5</h2>
          <Link className="verlinkung" to="/">FELDÜBERSICHT</Link>
        </div>


        <div className="container">
            <div className="reihe" onClick={() => setIsOpen(true)}>5a</div>
            <div className="reihe" onClick={() => setIsOpen(true)}>5b</div>
            <div className="reihe" onClick={() => setIsOpen(true)}>5c</div>
            <div className="reihe" onClick={() => setIsOpen(true)}>5d</div>
            <div className="reihe" onClick={() => setIsOpen(true)}>5e</div>
            <div className="reihe" onClick={() => setIsOpen(true)}>5f</div>
            <div className="reihe" onClick={() => setIsOpen(true)}>5g</div>
            <div className="reihe" onClick={() => setIsOpen(true)}>5h</div>
            <div className="reihe" onClick={() => setIsOpen(true)}>5i</div>
            <div className="reihe" onClick={() => setIsOpen(true)}>5j</div>
        </div>

        <div>
            <p style={{paddingTop: "30px", paddingLeft: "5px", paddingRight: "10px" }}>Diese Pflanzen befinden sich alle im Feld. Klicke auf eine Reihe, um genau zu sehen welche Pflanzen dort zu finden sind. Mit Klick auf eine Pflanze erhälst du Beschreibung, Erntetipps & Rezepte dazu.</p>

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
  )
};

export default Feldfunf;