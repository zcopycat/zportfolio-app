import React, { useState } from "react";

const ExtrasCard = ({ cardTitle, cardContent, buttonText }) => {
  const [currentColor, setCurrentColor] = useState("darkcyan");

  const changeColor = () => {
    const response = prompt("Type a colour!");
    if (response) {
      setCurrentColor(response);
    }
  };
  return (
    <div style={containerStyle}>
      <div style={titleBoxStyle}>
        <p style={titleStyle}>{cardTitle}</p>
      </div>
      <div style={{ ...contentBoxStyle, backgroundColor: currentColor }}>
        <ul>{[cardContent]}</ul>
      </div>
      <button onClick={changeColor} style={buttonStyle}>
        {buttonText}
      </button>
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
};

const titleBoxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "650px", // Same width as the box
  height: "30px", // button height
  border: "1px solid dark green", // Standard border
  borderRadius: "5px",
  backgroundColor: "lightgray",
  margin: "0 20px",
  marginBottom: "0px", // Remove space between button and box
  padding: "10px",
};

const titleStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  position: "absolute",
  width: "100%",
  fontSize: "35px",
  fontFamily: "Raleway",
  animation: "scrollText 12s linear infinite",
  fontWeight: "bold",
};

const buttonStyle = {
  width: "670px", // Should be the same width as the box but have had to increase the size sligthly to match these
  height: "40px", // button height
  cursor: "pointer",
  borderRadius: "5px",
  margin: "0 20px",
  marginBottom: "0px", // Remove space between button and box
  padding: "10px",
  fontSize: "1.1rem",
  color: "#fff",
  backgroundColor: "#1d2627",
  border: "none",
  transition: "background-color 0.3s ease",
};

const contentBoxStyle = {
  width: "650px",
  height: "auto",
  display: "flex",
  flexDirection: "column", // Stack items vertically
  justifyContent: "start", // position vertically
  alignItems: "start",
  border: "1px solid dark green", // Standard border
  borderRadius: "5px",
  transition: "background-color 0.3s ease", // Smooth transition
  fontFamily: "Courier New",
  fontSize: "20px",
  color: "#010605",
  padding: "10px",
  margin: "0 20px",
  // animation: "cycleBackground 20s infinite",
};

export default ExtrasCard;
