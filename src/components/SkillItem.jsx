import React from "react";

const SkillItem = ({ skill }) => {
  return (
    <div className="skill-item">
      <h4>{skill.name}</h4>
      <p>Proficiency Level: {skill.level}</p>
    </div>
  );
};

export default SkillItem;
