import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Felddrei = () => {
  return (
    <>
      <Link className="verlinkung" to="/">ZUR FELDÜBERSICHT</Link>

        <div className="container">
            <div className="reihe">3a</div>
            <div className="reihe">3b</div>
            <div className="reihe">3c</div>
            <div className="reihe">3d</div>
            <div className="reihe">3e</div>
            <div className="reihe">3f</div>
            <div className="reihe">3g</div>
            <div className="reihe">3h</div>
            <div className="reihe">3i</div>
            <div className="reihe">3j</div>
        </div>
    </>
  )
};

export default Felddrei;