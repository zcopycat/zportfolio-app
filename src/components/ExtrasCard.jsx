import React, { useState } from "react";

const ExtrasCard = ({ cardContent, buttonText }) => {
  const [currentColor, setCurrentColor] = useState("darkcyan");

  const changeColor = () => {
    const response = prompt("Type a colour!");
    if (response) {
      setCurrentColor(response);
    }
  };
  return (
    <div style={containerStyle}>
      {/* <div style={titleBoxStyle}>
        <p style={titleStyle}>{cardTitle}</p>
      </div> */}
      <div style={{ ...contentBoxStyle, backgroundColor: currentColor }}>
        <ul>{[cardContent]}</ul>
        <button onClick={changeColor} style={buttonStyle}>
          {buttonText}
        </button>
      </div>
      {/* <button onClick={changeColor} style={buttonStyle}>
        {buttonText}
      </button> */}
    </div>
  );
};

// Flexbox Styling
const containerStyle = {
  width: "100%",
  minWidth: "25vw",
  display: "flex",
  flexDirection: "column", // Stack items vertically
  justifyContent: "center", // position vertically
  alignItems: "center", // position horizontally
  height: "auto", // Full viewport height
};

// const titleBoxStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   width: "650px",
//   height: "30px",
//   border: "1px solid dark green",
//   borderRadius: "5px",
//   backgroundColor: "lightgray",
//   margin: "0 20px",
//   marginBottom: "0px",
//   padding: "10px",
// };

// const titleStyle = {
//   whiteSpace: "nowrap",
//   overflow: "hidden",
//   position: "absolute",
//   width: "100%",
//   fontSize: "35px",
//   fontFamily: "Funnel Display",
//   animation: "scrollText 12s linear infinite",
//   fontWeight: "bold",
// };

const buttonStyle = {
  // postion: "relative",
  marginBottom: "0.5rem",
  marginLeft: "1rem",
  // width: "100%",
  // minWidth: "5vw", // Should be the same width as the box but have had to increase the size sligthly to match these
  height: "3rem", // button height
  cursor: "pointer",
  borderRadius: "5px",
  margin: "1rem",
  marginBottom: "0px", // Remove space between button and box
  padding: "0 2rem",
  fontSize: "1.1rem",
  color: "#fff",
  backgroundColor: "#1d2627",
  border: "none",
  transition: "background-color 0.3s ease",
};

const contentBoxStyle = {
  width: "100%",
  minWidth: "30vw",
  height: "auto",
  display: "flex",
  flexDirection: "column", // Stack items vertically
  justifyContent: "center", // position vertically
  alignItems: "flex-end",
  border: "1px solid dark green", // Standard border
  borderRadius: "5px",
  transition: "background-color 0.3s ease", // Smooth transition
  fontFamily: "Courier New",
  fontSize: "1.2rem",
  color: "#010605",
  padding: "0.6",
  margin: "0",
  // animation: "cycleBackground 20s infinite",
};

export default ExtrasCard;
