// import React from "react";
// import { Link } from "react-router-dom";
// import "../../NavBar.css";
// import { useTheme } from "../ThemeContext";

// const NavBar = () => {
//   const { toggleTheme, darkMode } = useTheme();

//   return (
//     <div>
//       <div className="navbar-title-box">
//         <h1>Zane Vilsdorfa Portfolio</h1>
//       </div>
//       <nav className="navbar">
//         <div className="nav-links">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <label className="darkmode">Dark mode</label>
//           <input
//             type="checkbox"
//             onChange={toggleTheme}
//             checked={darkMode}
//             className="inputBox"
//           />
//         </div>
//         <ul className="nav-links">
//           <li>
//             <Link to="/SkillsPlusExperience">Skills & Experience</Link>
//           </li>
//           <li>
//             <Link to="/About">About</Link>
//           </li>
//           <li>
//             <Link to="/Contact">Contact</Link>
//           </li>
//           <li>
//             <Link to="/ExtrasPage">Extras</Link>
//           </li>
//         </ul>
//       </nav>
//       {/* <hr /> */}
//     </div>
//   );
// };

// export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext"; // Adjust the path
import "../../NavBar.css";
import "../../ToggleSwitch.css";

const NavBar = ({
  homeRef,
  skillsRef,
  contactRef,
  aboutRef,
  extrasRef,
  scrollToSection,
}) => {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <>
      <div>
        <div className="navbar-title-box">
          <h1>Zané Vilsdorfa</h1>
        </div>
        <nav className="navbar">
          <div className="nav-links">
            <li>
              <button className="nav-button">
                <Link to="/" onClick={() => scrollToSection(homeRef)}>
                  Home
                </Link>
              </button>
            </li>
            <li className="darkmode">Ligth/Dark mode</li>
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleTheme}
              />
              <span className="slider round"></span>
            </label>
            {/* Consider changing the switch to sun/moon */}
            {/* <i class="fa-regular fa-sun"></i>
            <i class="fa-regular fa-moon"></i> */}
          </div>
          <ul className="nav-links">
            <li>
              <button className="nav-button">
                <Link
                  to="/SkillsPlusExperience"
                  onClick={() => scrollToSection(skillsRef)}
                >
                  TechProfile
                </Link>
              </button>
            </li>
            <li>
              <button className="nav-button">
                <Link to="/About" onClick={() => scrollToSection(aboutRef)}>
                  About
                </Link>
              </button>
            </li>
            <li>
              <button className="nav-button">
                <Link
                  to="/ExtrasPage"
                  onClick={() => scrollToSection(extrasRef)}
                >
                  Extras
                </Link>
              </button>
            </li>
            <li>
              <button className="nav-button">
                <Link to="/Contact" onClick={() => scrollToSection(contactRef)}>
                  Contact
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
