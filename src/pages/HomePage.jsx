// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
// import Navbar from '../components/routing/NavBar';
import "../HomePage.css";
import cloudsClip from "../images/clouds.mp4";

const HomePage = ({ aboutRef, scrollToSection }) => {
  return (
    <div className="home-page">
      <div className="hero-container">
        <video
          src={cloudsClip}
          alt="Sunset with soft dark clouds moving high above gentle sea waters"
          className="hero-image"
          autoPlay
          loop
          muted
        />
        <div className="hero-h2-position">
          <h2 className="glow">Hello World!</h2>
        </div>
        {/* <button
          className="hero-button"
          onClick={() => scrollToSection(aboutRef)}
        >
          How can I support human flourishing?
        </button> */}
        <div className="hero-message">
          <button
            className="hero-button"
            onClick={() => scrollToSection(aboutRef)}
          >
            How can I improve what matters?
          </button>
          {/* <p>
            "AI expands our ability to act and make choices. It has the power to
            enhance both Negative and Positive Liberty, pushing humanity to an
            inflection point. The challenge now is to design AI tools that
            synthesize these freedoms, unlocking a future where technology
            maximizes human flourishing."
          </p>
          <p> - Reid Hoffman, LinkedIn founder, 2025</p> */}
        </div>
        {/* <button
          className="hero-button"
          onClick={() => scrollToSection(aboutRef)}
        >
          How can I improve what matters?
        </button> */}
      </div>
    </div>
  );
};

export default HomePage;
