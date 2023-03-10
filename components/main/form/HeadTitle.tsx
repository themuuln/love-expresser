import React, { useState, FormEvent } from "react";
import { GirlNameContext } from "../../GirlNameContext";
import HeadSection from "../../HeadSection";
import FormTemplate from "./FormTemplate";

type Props = {
  question: String;
};

const HeadTitle = ({ question }: Props) => {
  const [girlName, setGirlName] = useState<string>("");

  const handleInputChange = (event: any) => {
    setGirlName(event.target.value);
  };

  return (
    <GirlNameContext.Provider value={{ girlName, setGirlName }}>
      <HeadSection />
      <FormTemplate
        question={question}
        stateName="girlName"
        value={girlName}
        onChange={handleInputChange}
      />
    </GirlNameContext.Provider>
  );
};

export default HeadTitle;
