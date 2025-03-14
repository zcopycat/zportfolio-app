import React from "react";
import ExtrasCard from "./ExtrasCard";
import ExtraItem from "./ExtraItem";
// import ExtraJokeLive from "./ExtraJokeLive";

const Extras = () => {
  const extras = [
    {
      id: 1,
      name: "Project 1",
      timeline: "...",
      description: "Details coming soon",
    },
    {
      id: 2,
      name: "Project 2",
      timeline: "...",
      description: "Details coming soon",
    },
  ];

  return (
    <>
      <ExtrasCard
        cardTitle={"More projects to follow..."}
        cardContent={extras.map((extra) => (
          <ExtraItem key={extra.id} extra={extra} />
        ))}
        buttonText={"Click to change card colour"}
      />
    </>
  );
};

export default Extras;
