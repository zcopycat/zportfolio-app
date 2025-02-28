import React from "react";

const ExperienceItem = ({ experience }) => {
  return (
    <div>
      <h4>{experience.name}</h4>
      <p>{experience.timeline}</p>
      <p>{experience.description}</p>
    </div>
  );
};

export default ExperienceItem;