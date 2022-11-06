import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldvier = () => {
  return (
    <>
        <div className='box'>
          <h2 style={{paddingRight: "120px"}}>FELD 4</h2>
          <Link className="verlinkung" to="/">FELDÜBERSICHT</Link>
        </div>

        <p style={{ paddingTop: "15px", paddingLeft: "5px", paddingRight:"5px", paddingBottom: "10px"}}>Klicke auf eine Reihe, um die angebauten Pflanzen zu sehen.</p>

        <div className="container">
            <div className="reihe">4a</div>
            <div className="reihe">4b</div>
            <div className="reihe">4c</div>
            <div className="reihe">4d</div>
            <div className="reihe">4e</div>
            <div className="reihe">4f</div>
            <div className="reihe">4g</div>
            <div className="reihe">4h</div>
            <div className="reihe">4i</div>
            <div className="reihe">4j</div>
        </div>
    </>
  )
};

export default Feldvier;