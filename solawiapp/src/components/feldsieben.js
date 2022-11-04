import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldsieben = () => {
  return (
    <>
      <Link className="verlinkung" to="/">ZUR FELDÜBERSICHT</Link>

        <div className="container">
            <div className="reihe">7a</div>
            <div className="reihe">7b</div>
            <div className="reihe">7c</div>
            <div className="reihe">7d</div>
            <div className="reihe">7e</div>
            <div className="reihe">7f</div>
            <div className="reihe">7g</div>
            <div className="reihe">7h</div>
            <div className="reihe">7i</div>
            <div className="reihe">7j</div>
        </div>
    </>
  )
};

export default Feldsieben;