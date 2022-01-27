import React from "react";
import Flexible from "../components/Flexible";
import HelpGrid from "../components/HelpGrid";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <HelpGrid />
      <Flexible />
    </div>
  );
};

export default Home;
