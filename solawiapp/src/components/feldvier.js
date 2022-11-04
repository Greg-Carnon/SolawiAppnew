import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldvier = () => {
  return (
    <>
      <Link className="verlinkung" to="/">ZUR FELDÜBERSICHT</Link>

        <div className="container">
            <div className="reihe">4a</div>
            <div className="reihe">4b</div>
            <div className="reihe">4c</div>
            <div className="reihe">4d</div>
            <div className="reihe">4e</div>
            <div className="reihe">4f</div>
            <div className="reihe">4g</div>
            <div className="reihe">4h</div>
            <div className="reihe">4i</div>
            <div className="reihe">4j</div>
        </div>
    </>
  )
};

export default Feldvier;