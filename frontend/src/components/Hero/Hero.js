import React from "react";
import "./Hero.css";
import picture3 from "../../images/picture2.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={picture3} alt="hero-img" />
      <h1>START LIVING TODAY</h1>
      <p>What are you waiting for ?</p>
      <div className="hero-btns">
        <button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </button>
        <button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER
        </button>
      </div>
    </div>
  );
};

export default Hero;
