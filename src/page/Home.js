import React from "react";
import HelpGrid from "../components/HelpGrid";
import Hero from "./hero/Hero";
import Modal from "../components/modal/Modal";
import Slider from "../components/slider/Slider";

const Home = () => {
  return (
    <div>
      <Hero />
      <Modal />

      <HelpGrid />

      <Slider />
    </div>
  );
};

export default Home;
