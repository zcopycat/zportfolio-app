import React from "react";
// import React, { useState, useEffect } from "react"; 

const ContactLinks = () => {

  // const [backgroundColor, setBackgroundColor] = useState("#72d0b1");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 10) {
  //       setBackgroundColor("tomato");
  //     } else {
  //       setBackgroundColor("#72d0b1");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll); // Cleanup event listener
  //   };
  // }, []);

  //Add where applicable: style={{ backgroundColor }}

  return (
    <div className="contact-page">
      <h2>Connect with me</h2>
      <div className="containerContact">
      <div className="social-links">
        <a href="https://github.com/zcopycat" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-5x"></i>
        </a>
        </div>
        <div className="contentContact">
        <a href="https://www.linkedin.com/in/zanevilsdorfa" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-5x"></i>
        </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLinks;