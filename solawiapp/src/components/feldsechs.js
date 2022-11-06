import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldsechs = () => {
  return (
    <>
        <div className='box'>
          <h2 style={{paddingRight: "120px"}}>FELD 6</h2>
          <Link className="verlinkung" to="/">FELDÜBERSICHT</Link>
        </div>

        <p style={{ paddingTop: "15px", paddingLeft: "5px", paddingRight:"5px", paddingBottom: "10px"}}>Klicke auf eine Reihe, um die angebauten Pflanzen zu sehen.</p>

        <div className="container">
            <div className="reihe">6a</div>
            <div className="reihe">6b</div>
            <div className="reihe">6c</div>
            <div className="reihe">6d</div>
            <div className="reihe">6e</div>
            <div className="reihe">6f</div>
            <div className="reihe">6g</div>
            <div className="reihe">6h</div>
            <div className="reihe">6i</div>
            <div className="reihe">6j</div>
        </div>
    </>
  )
};

export default Feldsechs;