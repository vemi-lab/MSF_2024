import React from "react";
import vemiLogo from "../../assets/VEMI-Logo-2020-1024x430.png";
import { Link } from "react-router-dom";
import "./Home.css";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "darkblue",
};

export default function Home() {
  function startExperience() {
    console.log("Starting experience");
    // navigate to the next page
  }
  return (
    <div className="container">
      <img src={vemiLogo} alt="VEMI Logo" />
      <h2>Welcome to Duck Chase!</h2>
      <img src="" alt="Duck chase logo or something?" />
      <p>
        Search around the area for hiddens <b>codes</b> gain points and win a{" "}
        <b>prize</b>!
      </p>
      <Link to="/game">
        <button className="linkingButton">Start</button>
      </Link>
    </div>
  );
}
