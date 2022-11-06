import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldneun = () => {
  return (
    <>
              <div className='box'>
          <h2 style={{paddingRight: "120px"}}>FELD 9</h2>
          <Link className="verlinkung" to="/">FELDÜBERSICHT</Link>
        </div>

        <p style={{ paddingTop: "15px", paddingLeft: "5px", paddingRight:"5px", paddingBottom: "10px"}}>Klicke auf eine Reihe, um die angebauten Pflanzen zu sehen.</p>

        <div className="container">
            <div className="reihe">9a</div>
            <div className="reihe">9b</div>
            <div className="reihe">9c</div>
            <div className="reihe">9d</div>
            <div className="reihe">9e</div>
            <div className="reihe">9f</div>
            <div className="reihe">9g</div>
            <div className="reihe">9h</div>
            <div className="reihe">9i</div>
            <div className="reihe">9j</div>
        </div>
    </>
  )
};

export default Feldneun;