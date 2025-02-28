import React from 'react';

const ContactLinks = () => {
  return (
    <div>
      <h2>Connect with me</h2>
      <div className="containerContact">
      <div className="social-links">
        <a href="https://github.com/zcopycat" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-5x"></i>
        </a>
        </div>
        <div className="contentContact">
        <a href="https://www.linkedin.com/in/zvilsdorfa" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-5x"></i>
        </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLinks;