import React from "react";
import { useGlobalContext } from "./context";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  const data = useGlobalContext();
  console.log(data);
  return <h2>hero component</h2>;
};

export default Hero;
