import React from "react";
import Flexible from "../components/Flexible";
import HelpGrid from "../components/HelpGrid";
import Hero from "./hero/Hero";
import Modal from "../components/modal/Modal";

const Home = () => {
  return (
    <div>
      <Hero />
      <Modal />

      <HelpGrid />
      <Flexible />
    </div>
  );
};

export default Home;
