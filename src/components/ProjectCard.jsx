// import React, { useState } from "react";

// const ProjectCard = ({ cardTitle, cardContent, buttonText }) => {
//   const [currentColor, setCurrentColor] = useState("darkcyan");

//   const changeColor = () => {
//     const response = prompt("Type a colour!");
//     if (response) {
//       setCurrentColor(response);
//     }
//   };
//   return (
//     <div style={containerStyle}>
//       <div style={titleBoxStyle}>
//         <p style={titleStyle}>{cardTitle}</p>
//       </div>
//       <div style={{ ...contentBoxStyle, backgroundColor: currentColor }}>
//         <ul>{cardContent}</ul>
//       </div>
//       <button onClick={changeColor} style={buttonStyle}>
//         {buttonText}
//       </button>
//     </div>
//   );
// };

// const containerStyle = {
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "start",
//   alignItems: "start",
//   height: "auto",
// };

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
//   fontFamily: "Raleway",
//   animation: "scrollText 12s linear infinite",
//   fontWeight: "bold",
// };

// const buttonStyle = {
//   width: "667px",
//   height: "40px",
//   fontSize: "17px",
//   fontFamily: "Raleway",
//   fontWeight: "bold",
//   cursor: "pointer",
//   border: "1px solid dark green",
//   borderRadius: "5px",
//   backgroundColor: "lightgray",
//   color: "dark green",
//   margin: "0 20px",
//   marginBottom: "0px",
//   padding: "10px",
// };

// const contentBoxStyle = {
//   width: "650px",
//   height: "auto",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "start",
//   alignItems: "start",
//   border: "1px solid dark green",
//   borderRadius: "5px",
//   transition: "background-color 0.3s ease",
//   fontFamily: "Courier New",
//   fontSize: "20px",
//   color: "#010605",
//   padding: "10px",
//   margin: "0 20px",
// };

// export default ProjectCard;
