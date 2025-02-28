import React, { useState } from "react";

const ExtrasCard = ({cardTitle, cardContent, buttonText}) => {
    const[currentColor, setCurrentColor] = useState("coral");

    const changeColor = () => {
        const response = prompt("Type a colour!");
        if (response) {
            setCurrentColor(response);
        }

    };
    return(
        <div style={containerStyle}>
        <div style={titleBoxStyle}> 
            <p style={titleStyle}>{cardTitle}</p>
        </div>
        <div style={{ ...contentBoxStyle, backgroundColor: currentColor }}>
            <ul>
              {[cardContent]}
            </ul>
        </div>
        <button onClick={changeColor} style={buttonStyle}>{buttonText}</button>
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
    fontFamily: "Courier New",
    animation: "scrollText 12s linear infinite",
    fontWeight: "bold",
  };
  
  const buttonStyle = {
    width: "667px", // Same width as the box
    height: "40px", // button height
    fontSize: "17px",
    fontFamily: "Courier New",
    cursor: "pointer",
    border: "1px solid dark green", // Standard border
    borderRadius: "5px",
    backgroundColor: "lightgray",
    color: "dark green",
    margin: "0 20px",
    marginBottom: "0px", // Remove space between button and box
    padding: "10px",
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
    padding: "10px",
    margin: "0 20px",
    // animation: "cycleBackground 20s infinite",
  };

export default ExtrasCard;


