import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "../../pages/HomePage";
import SkillsPlusExperience from "../../pages/SkillsPlusExperience";
import Contact from "../../pages/Contact";
import About from "../../pages/About";
import ExtrasPage from "../../pages/ExtrasPage";

const MyRoutes = () => {
  return (
    <>
      <Router>
        <div className="fixed-navbar">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/SkillsPlusExperience"
            element={<SkillsPlusExperience />}
          />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/ExtrasPage" element={<ExtrasPage />} />
        </Routes>
        {/* The Footer would need to go here... */}
      </Router>
    </>
  );
};

export default MyRoutes;
