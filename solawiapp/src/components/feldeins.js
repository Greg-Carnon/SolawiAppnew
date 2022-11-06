import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldeins = () => {
  return (

    <>
        <div className='box'>
          <h2 style={{paddingRight: "120px"}}>FELD 1</h2>
          <Link className="verlinkung" to="/">FELDÜBERSICHT</Link>
        </div>

        <p style={{ paddingTop: "15px", paddingLeft: "5px", paddingRight:"5px", paddingBottom: "10px"}}>Klicke auf eine Reihe, um die angebauten Pflanzen zu sehen.</p>

        <div className="container">
            <div className="reihe">1a</div>
            <div className="reihe">1b</div>
            <div className="reihe">1c</div>
            <div className="reihe">1d</div>
            <div className="reihe">1e</div>
            <div className="reihe">1f</div>
            <div className="reihe">1g</div>
            <div className="reihe">1h</div>
            <div className="reihe">1i</div>
            <div className="reihe">1j</div>
        </div>
    </>
  )
};

export default Feldeins;