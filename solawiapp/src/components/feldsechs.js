import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldsechs = () => {
  return (
    <>
      <Link className="verlinkung" to="/">ZUR FELDÜBERSICHT</Link>

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