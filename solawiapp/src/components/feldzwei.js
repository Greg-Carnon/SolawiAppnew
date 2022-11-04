import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldzwei = () => {
  return (
    <>
      <Link className="verlinkung" to="/">ZUR FELDÜBERSICHT</Link>

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