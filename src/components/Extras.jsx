import React from "react";
import ExtrasCard from "./ExtrasCard";
import ExtraItem from "./ExtraItem";
// import ExtraJokeLive from "./ExtraJokeLive";

const Extras = () => {
  const extras = [
    {
      id: 1,
      name: "Extra 1",
      timeline: "...",
      description: "Details coming soon",
    },
    {
      id: 2,
      name: "Extra 2",
      timeline: "...",
      description: "Details coming soon",
    },
  ];

  return (
    <>
      <ExtrasCard
        cardTitle={"Coming Soon... Very soon... Very very soon..."}
        cardContent={extras.map((extra) => (
          <ExtraItem key={extra.id} extra={extra} />
        ))}
        buttonText={"Click to change colour! Just because."}
      />
    </>
  );
};

export default Extras;
