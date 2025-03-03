import React from "react";

const Card = ({cardTitle, cardContent}) => {
    
    return(
        <div style={containerStyle}>
        <div style={titleBoxStyle}> 
            <h3 style={titleStyle}>{cardTitle}</h3>
        </div>
        <div style={{ ...contentBoxStyle}}>
            <ul>
              {[cardContent]}
            </ul>
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
  };

  const titleBoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%", // Same width as the box
    maxWidth: "600px",
    height: "30px", // button height
    border: "1px solid dark green", // Standard border
    borderRadius: "5px",
    backgroundColor: "#535050",
    margin: "0 auto", // Center horizontally with margin auto
    marginBottom: "0px", // Remove space between button and box
    padding: "10px",
  };

  const titleStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    fontFamily: "Courier New",
    color: "#ebe2e2",
    fontSize: "1.3rem", // Use relative font size
  };
  
  const contentBoxStyle = {
    width: "100%", // Full width of parent
    maxWidth: "600px", // Limit maximum width for content
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
    color: "#010605"
  };

export default Card;