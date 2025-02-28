import React from "react";
import {Link} from "react-router-dom";
import "../../NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar"> 
    <div className="nav-links">
    <li><Link to="/">Home</Link></li>
    </div>
      <ul className="nav-links">
        <li><Link to="/SkillsPlusExperience">Skills & Experience</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/ExtrasPage">Extras</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;