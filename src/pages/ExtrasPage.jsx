import React from "react";
import Extras from "../components/Extras";
import ExtrasCard from "../components/ExtrasCard";
import ExtraJokeLive from "../components/ExtraJokeLive";

const ExtrasPage = () => {
  return (
    <div className="content-top-margin">
      <h2>Some other bits and bobs...</h2>
      <div className="content">
        <div className="containerColumn">
          <ExtrasCard
            cardTitle={"Here's a joke... "}
            cardContent={<ExtraJokeLive />}
            buttonText={"Click to change card colour"}
            className="containerColumn"
          />
          <div className="containerColumnB">
            <Extras />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtrasPage;
