import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldfunf = () => {
  return (
    <>
      <Link className="verlinkung" to="/">ZUR FELDÜBERSICHT</Link>

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