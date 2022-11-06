import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Felddrei = () => {
  return (
    <>
              <div className='box'>
          <h2 style={{paddingRight: "120px"}}>FELD 3</h2>
          <Link className="verlinkung" to="/">FELDÜBERSICHT</Link>
        </div>

        <p style={{ paddingTop: "15px", paddingLeft: "5px", paddingRight:"5px", paddingBottom: "10px"}}>Klicke auf eine Reihe, um die angebauten Pflanzen zu sehen.</p>

        <div className="container">
            <div className="reihe">3a</div>
            <div className="reihe">3b</div>
            <div className="reihe">3c</div>
            <div className="reihe">3d</div>
            <div className="reihe">3e</div>
            <div className="reihe">3f</div>
            <div className="reihe">3g</div>
            <div className="reihe">3h</div>
            <div className="reihe">3i</div>
            <div className="reihe">3j</div>
        </div>
    </>
  )
};

export default Felddrei;