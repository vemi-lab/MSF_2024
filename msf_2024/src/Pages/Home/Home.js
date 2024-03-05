import React from "react";
import vemiLogo from "../../assets/VEMI-Logo-2020-1024x430.png";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  function startExperience() {
    console.log("Starting experience");
    // navigate to the next page
  }
  return (
    <div className="container">
      <img src={vemiLogo} alt="VEMI Logo" />
      <h2>Welcome to Duck Chase!</h2>
      <p>
        Search around the area for hiddens CODES gain points and win a PRIZE!
      </p>
      <Link to="/game">
        <button className="button">Start</button>
      </Link>
    </div>
  );
}
