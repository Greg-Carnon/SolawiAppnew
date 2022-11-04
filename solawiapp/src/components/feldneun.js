import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldneun = () => {
  return (
    <>
      <Link className="verlinkung" to="/">ZUR FELDÜBERSICHT</Link>

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