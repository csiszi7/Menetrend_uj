import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    // A home-kontener-nek továbbra is szüksége van magasságra és position: relative-re!
    <div className="home-kontener">
      {/* Az üdvözlő doboz a form stílusát kapja, és inline stílussal középre kerül */}
      <div
        className="welcome-box"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1 className="welcome-title-style">Szép napot!</h1>
        <p className="welcome-text-style">
          Itt mindent megtalálsz, amire a kényelmes utazáshoz szükséged van.
          <br />
          Kezdésként nézz szét a &nbsp;
          <Link to="/menetrend" className="text-highlight">
            Menetrend
          </Link>
          &nbsp; menüpontban!
        </p>
      </div>
    </div>
  );
};

export default Home;