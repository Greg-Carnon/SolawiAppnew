import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldzwei = () => {
  return (
    <>
        <div className='box'>
          <h2 style={{paddingRight: "120px"}}>FELD 2</h2>
          <Link className="verlinkung" to="/">FELDÜBERSICHT</Link>
        </div>

        <p style={{ paddingTop: "15px", paddingLeft: "5px", paddingRight:"5px", paddingBottom: "10px"}}>Klicke auf eine Reihe, um die angebauten Pflanzen zu sehen.</p>

        <div className="container">
            <div className="reihe">2a</div>
            <div className="reihe">2b</div>
            <div className="reihe">2c</div>
            <div className="reihe">2d</div>
            <div className="reihe">2e</div>
            <div className="reihe">2f</div>
            <div className="reihe">2g</div>
            <div className="reihe">2h</div>
            <div className="reihe">2i</div>
            <div className="reihe">2j</div>
        </div>
    </>
  )
};

export default Feldzwei;