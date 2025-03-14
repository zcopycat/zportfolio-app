import React from "react";
import { Link } from "react-router-dom";
import "../../NavBar.css";
import { useTheme } from "../ThemeContext";

const NavBar = () => {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <div>
      <div className="navbar-title-box">
        <h1>Zane Vilsdorfa Portfolio</h1>
      </div>
      <nav className="navbar">
        <div className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <label className="darkmode">Dark mode</label>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={darkMode}
            className="inputBox"
          />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/SkillsPlusExperience">Skills & Experience</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/ExtrasPage">Extras</Link>
          </li>
        </ul>
      </nav>
      {/* <hr /> */}
    </div>
  );
};

export default NavBar;
