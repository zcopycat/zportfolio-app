import React from 'react';
import Experience from "../components/Experience"; // Experience component that renders all the items
import Skills from "../components/Skills"

const SkillsPlusExperience = () => {

  return (
    <>
      <h2>Skills and Experience</h2>
      <div className='containerRow'>
      <Skills/>
      <Experience/>
      </div>
    </>
  );
};

export default SkillsPlusExperience;


