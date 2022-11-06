import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldsieben = () => {
  return (
    <>
        <div className='box'>
          <h2 style={{paddingRight: "120px"}}>FELD 7</h2>
          <Link className="verlinkung" to="/">FELDÜBERSICHT</Link>
        </div>

        <p style={{ paddingTop: "15px", paddingLeft: "5px", paddingRight:"5px", paddingBottom: "10px"}}>Klicke auf eine Reihe, um die angebauten Pflanzen zu sehen.</p>

        <div className="container">
            <div className="reihe">7a</div>
            <div className="reihe">7b</div>
            <div className="reihe">7c</div>
            <div className="reihe">7d</div>
            <div className="reihe">7e</div>
            <div className="reihe">7f</div>
            <div className="reihe">7g</div>
            <div className="reihe">7h</div>
            <div className="reihe">7i</div>
            <div className="reihe">7j</div>
        </div>
    </>
  )
};

export default Feldsieben;