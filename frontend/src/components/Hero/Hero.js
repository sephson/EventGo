import React from "react";
import "./Hero.css";
import picture5 from "../../images/picture5.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <img className="hero-image" src={picture5} alt="hero-img" />
      <div className="hero-text">
        <h1 className="hero-content">Create and Attend Events Near You!</h1>
        <button className="hero-btn">GET STARTED</button>
      </div>
    </div>
  );
};

export default Hero;
