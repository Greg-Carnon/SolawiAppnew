import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldacht = () => {
  return (
    <>
      <Link className="verlinkung" to="/">ZUR FELDÜBERSICHT</Link>

        <div className="container">
            <div className="reihe">8a</div>
            <div className="reihe">8b</div>
            <div className="reihe">8c</div>
            <div className="reihe">8d</div>
            <div className="reihe">8e</div>
            <div className="reihe">8f</div>
            <div className="reihe">8g</div>
            <div className="reihe">8h</div>
            <div className="reihe">8i</div>
            <div className="reihe">8j</div>
        </div>
    </>
  )
};

export default Feldacht;