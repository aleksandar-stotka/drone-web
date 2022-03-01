import React from "react";
import HelpGrid from "../components/HelpGrid";
import Hero from "./hero/Hero";
import Modal from "../components/modal/Modal";
import Slider from "../components/slider/Slider";
import ExploreProducts from "../components/Explore/ExploreProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <Modal />

      <HelpGrid />
      <ExploreProducts />

      <Slider />
    </div>
  );
};

export default Home;
