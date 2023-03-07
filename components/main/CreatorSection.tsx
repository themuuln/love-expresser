import React, { useState, FormEvent, ChangeEvent } from "react";
import HeadSection from "../HeadSection";
import { GirlNameContext } from "../GirlNameContext";

const CreatorSection: React.FC = () => {
  const [girlName, setGirlName] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setGirlName("");
  };

  const handleInputChange = (event: any) => {
    setGirlName(event.target.value);
  };

  return (
    <GirlNameContext.Provider value={{ girlName, setGirlName }}>
      <div className="w-[50vw] flex justify-center ">
        <form
          className="form-control w-full max-w-xs"
          onSubmit={(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setGirlName("");
          }}
        >
          <label className="label">
            <span className="label-text">What is girl&apos;s name?</span>
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={girlName}
              onChange={handleInputChange}
              // onChange={(event: ChangeEvent<HTMLInputElement>) => {
              //   setGirlName(event.target.value);
              // }}
            />
            <button onClick={handleSubmit} type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
      <HeadSection />
    </GirlNameContext.Provider>
  );
};

export default CreatorSection;
