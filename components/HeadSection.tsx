import Head from "next/head";
import React, { useContext } from "react";
import { GirlNameContext } from "./GirlNameContext";

const HeadSection: React.FC = () => {
  const { girlName } = useContext(GirlNameContext);
  return (
    <Head>
      <title>Hi, {girlName.toUpperCase()}</title>
      <meta
        name="description"
        content="Create a minimalistic website to convey your deepest emotions and words to your crush ❤"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadSection;
