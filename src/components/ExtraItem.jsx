import React from "react";

const ExtraItem = ({ extra }) => {
  return (
    <div>
      <h4>{extra.name}</h4>
      <p>{extra.timeline}</p>
      <p>{extra.description}</p>
      {/* <a></a> image parameter here?*/}
      {/* <a></a> Link parameter here?*/}
    </div>
  );
};

export default ExtraItem;