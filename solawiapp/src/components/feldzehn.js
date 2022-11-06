import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldzehn = () => {
  return (
    <>
        <div className='box'>
          <h2 style={{paddingRight: "120px"}}>FELD 10</h2>
          <Link className="verlinkung" to="/">FELDÜBERSICHT</Link>
        </div>

        <p style={{ paddingTop: "15px", paddingLeft: "5px", paddingRight:"5px", paddingBottom: "10px"}}>Klicke auf eine Reihe, um die angebauten Pflanzen zu sehen.</p>

        <div className="container">
            <div className="reihe">10a</div>
            <div className="reihe">10b</div>
            <div className="reihe">10c</div>
            <div className="reihe">10d</div>
            <div className="reihe">10e</div>
            <div className="reihe">10f</div>
            <div className="reihe">10g</div>
            <div className="reihe">10h</div>
            <div className="reihe">10i</div>
            <div className="reihe">10j</div>
        </div>
    </>
  )
};

export default Feldzehn;