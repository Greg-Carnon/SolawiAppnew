import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldzehn = () => {
  return (
    <>
      <Link className="verlinkung" to="/">ZUR FELDÜBERSICHT</Link>

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