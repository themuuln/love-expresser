import React from "react";
import CreatorSection from "./CreatorSection";
import VisitorSection from "./VisitorSection";

const MainSection = () => {
  return (
    <>
      <div className="flex">
        <CreatorSection />
        <VisitorSection />
      </div>
    </>
  );
};

export default MainSection;
