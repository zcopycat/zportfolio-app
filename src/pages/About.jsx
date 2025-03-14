import React from "react";
import wavesPic from "../images/waves.jpg";

const About = () => {
  return (
    <>
      <div className="content-top-margin">
        <h2>About</h2>
        <div className="contentAbout">
          <p>
            Highly motivated Business Improvement Specialist with expertise in
            digital transformation, change management, and operational
            optimisation across multiple sectors. Proficient in project
            management, policy and manual development, data analysis, and system
            administration. A proactive communicator and collaborative leader,
            passionate about leveraging technical skills and analytical thinking
            to deliver measurable value to organisations. Looking to to make a
            positive sustainable impact via business analysis, process
            management, and system improvement.
          </p>
          <img
            src={wavesPic}
            alt="Seashore with gentle overlapping waves"
            className="about-image"
          />
        </div>
      </div>
    </>
  );
};

export default About;
