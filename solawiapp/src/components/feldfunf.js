import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldfunf = () => {
  return (
    <>
              <div className='box'>
          <h2 style={{paddingRight: "120px"}}>FELD 5</h2>
          <Link className="verlinkung" to="/">FELDÜBERSICHT</Link>
        </div>

        <p style={{ paddingTop: "15px", paddingLeft: "5px", paddingRight:"5px", paddingBottom: "10px"}}>Klicke auf eine Reihe, um die angebauten Pflanzen zu sehen.</p>

        <div className="container">
            <div className="reihe">5a</div>
            <div className="reihe">5b</div>
            <div className="reihe">5c</div>
            <div className="reihe">5d</div>
            <div className="reihe">5e</div>
            <div className="reihe">5f</div>
            <div className="reihe">5g</div>
            <div className="reihe">5h</div>
            <div className="reihe">5i</div>
            <div className="reihe">5j</div>
        </div>
    </>
  )
};

export default Feldfunf;