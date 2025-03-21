import React from "react";

const Card = ({ cardTitle, cardContent }) => {
  return (
    <div style={containerStyle}>
      <div style={titleBoxStyle}>
        <h3 style={titleStyle}>{cardTitle}</h3>
      </div>
      <div style={{ ...contentBoxStyle }}>
        <ul>{[cardContent]}</ul>
      </div>
    </div>
  );
};

// Flexbox Styling
const containerStyle = {
  display: "flex",
  flexDirection: "column", // Stack items vertically
  justifyContent: "start", // position vertically
  alignItems: "start", // position horizontally
  height: "auto", // Full viewport height
  width: "100%",
  margin: "0 1rem",
};

const titleBoxStyle = {
  display: "flex",
  alignItems: "center",
  // justifyContent: "center",
  width: "100%", // Same width as the box
  maxWidth: "50vw",
  height: "30px", // button height
  border: "1px solid dark green", // Standard border
  borderRadius: "5px",
  backgroundColor: "#1d2627",
  margin: "0 auto", // Center horizontally with margin auto
  marginBottom: "0px", // Remove space between button and box
  padding: "0.7rem",
};

const titleStyle = {
  // display: "flex",
  justifyContent: "center",
  listStyle: "none",
  display: "flex",
  margin: "0",
  padding: "3px",
  width: "100%",
  fontFamily: "Funnel Display",
  color: "#d9e5e7",
  fontSize: "1.3rem", // Use relative font size
};

const contentBoxStyle = {
  width: "100%", // Full width of parent
  maxWidth: "50vw", // Limit maximum width for content
  height: "auto",
  display: "flex",
  flexDirection: "column", // Stack items vertically
  justifyContent: "start", // position vertically
  alignItems: "start",
  border: "1px solid dark green", // Standard border
  borderRadius: "5px",
  // transition: "background-color 0.3s ease", // Smooth transition
  fontFamily: "Courier New",
  fontSize: "16px",
  padding: "10px",
  margin: "0 auto", // Center horizontally
  backgroundColor: "#c6e0d8",
  color: "#010605",
};

export default Card;
