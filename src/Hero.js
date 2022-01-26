import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import amazon from "./images/amazon.png";
import consena from "./images/consena.jpg";
import frshwork from "./images/frshwork.png";
import people from "./images/people.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <>
      <section className="hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
          <article className="hero-info" data-aos="fade-up">
            <h1>HELPING YOU CONNECT</h1>
            <p>
              Start meaningful conversations with target accounts & contacts
              with the most premium sales intelligence on the market.
            </p>
            <button className="btn">Start Now</button>
            <div className="log-content"></div>
          </article>
          <article className="hero-images">
            <img
              src={people}
              className="phone-img"
              alt="phone"
              data-aos="fade-left"
            />
          </article>
        </div>
      </section>
      <section className="hero-two ">
        <div className="inner-hero" data-aos="fade-right">
          <h2>
            We help 1000+ revenue teams connect with confidence & <br></br>{" "}
            exceed targets.
          </h2>
          <div className="images">
            <img
              className="img-comercial"
              src={amazon}
              alt="amazon"
              data-aos="fade-right"
            />
            <img className="img-comercial" src={consena} alt="amazon" />
            <img
              className="img-comercial"
              src={frshwork}
              alt="fresh"
              data-aos="fade-left"
            />
          </div>
        </div>
      </section>
      <div className="hero-three">
        <h3>You deserve MORE</h3>
        <AiOutlineCheck className="icons" />
        5X increase in reach <AiOutlineCheck className="icons" />
        7x increase in conversation rate
        <AiOutlineCheck className="icons" /> 80% less calls needed for better
        results
      </div>
    </>
  );
};

export default Hero;
