// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from '../components/routing/NavBar';
import '../HomePage.css'
import wavesPic from "../images/waves.jpg"

const HomePage = () => {
  return (
    <div className="home-page">
      {/* <Navbar /> */}
      <div className="content">
        <img src={wavesPic} alt="Sea waves crushing on the shore" className="homepage-image" />
        <div className="welcome-message">
          <h1>Embracing the Change</h1>
          <p>"AI expands our ability to act and make choices. It has the power to enhance both Negative and Positive Liberty, pushing humanity to an inflection point. The challenge now is to design AI tools that synthesize these freedoms, unlocking a future where technology maximizes human flourishing."</p>
          <p>Reid Hoffman, LinkedIn founder, 2025</p>
          <Link to="/About">
            <button className="menu-button">How can I help achieve future enhancement?</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
