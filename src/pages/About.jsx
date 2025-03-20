import React from "react";
import pigeonPic from "../images/z-pigeon.jpg";

const About = () => {
  return (
    <>
      <div className="contentAbout">
        <div className="containerRow">
          <h2>Hi, thanks for visiting my web app!</h2>
          <i
            class="fa-regular fa-face-smile"
            style={{
              fontSize: "3rem",
              padding: "1.5rem",
              color: "#ee5407",
            }}
          ></i>
        </div>
        <div className="containerRow">
          <img
            src={pigeonPic}
            alt="Seashore with gentle overlapping waves"
            className="about-image"
          />
          <div className="about-story">
            <p>
              I'm a Business Improvement Specialist with some newly acquired
              knowledge and practical skills in AI-driven Software Engineering.
              My previous experience and key expertise areas are in digital
              transformation, change management, and operational optimisation
              across multiple sectors.
            </p>
            <p>
              I'm also proficient in project management, policy and manual
              development, data analysis, and system administration. A proactive
              communicator and collaborative leader, passionate about leveraging
              technical skills and analytical thinking to deliver measurable
              value to organisations.
            </p>
            <p>
              I am looking to to make a positive sustainable impact by
              developing solid understanding of organisations and their people,
              existing processes and systems as well as managing the change and
              future state through collaboration and continued learning about
              technical and human capabilities.
            </p>
          </div>
        </div>
        {/* <div className="about-quote">
          <h2>
            Among other things... I like fresh snow, coffee, books, and some
            food for thought...
          </h2>
          <p>
            "AI expands our ability to act and make choices. It has the power to
            enhance both Negative and Positive Liberty, pushing humanity to an
            inflection point. The challenge now is to design AI tools that
            synthesize these freedoms, unlocking a future where technology
            maximizes human flourishing."
          </p>
          <p> - Reid Hoffman, LinkedIn founder, 2025</p>
        </div> */}
      </div>
    </>
  );
};

export default About;
