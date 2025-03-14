import React from "react";
import Experience from "../components/Experience"; // Experience component that renders all the items
import Skills from "../components/Skills";

const SkillsPlusExperience = () => {
  return (
    <div className="content-top-margin">
      <h2>Skills and Experience</h2>
      <div className="containerRow">
        <Skills />
        <Experience />
      </div>
    </div>
  );
};

export default SkillsPlusExperience;
