import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldacht = () => {
  return (
    <>
              <div className='box'>
          <h2 style={{paddingRight: "120px"}}>FELD 8</h2>
          <Link className="verlinkung" to="/">FELDÜBERSICHT</Link>
        </div>

        <p style={{ paddingTop: "15px", paddingLeft: "5px", paddingRight:"5px", paddingBottom: "10px"}}>Klicke auf eine Reihe, um die angebauten Pflanzen zu sehen.</p>

        <div className="container">
            <div className="reihe">8a</div>
            <div className="reihe">8b</div>
            <div className="reihe">8c</div>
            <div className="reihe">8d</div>
            <div className="reihe">8e</div>
            <div className="reihe">8f</div>
            <div className="reihe">8g</div>
            <div className="reihe">8h</div>
            <div className="reihe">8i</div>
            <div className="reihe">8j</div>
        </div>
    </>
  )
};

export default Feldacht;