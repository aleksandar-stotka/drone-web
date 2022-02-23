import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import "./Hero.css";

import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const dron =
  "https://climacell-microweather-v1.p.rapidapi.com/weather/forecast/hourly?lat=42.8237618&lon=-71.2216286&fields=precipitation";
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  const { openSidebar, openModal } = useGlobalContext();

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <>
      <section className="hero" onMouseOver={closeSubmenu}>
        <div
          className="hero-center"
          style={{ width: "70rem", margin: "0 auto" }}
        >
          <div className="hero-info" data-aos="fade-up">
            <h2 style={{ fontSize: "4.4rem", color: "white" }}>DJI MAVIC 3</h2>

            <button
              data-aos="fade-top"
              onClick={openModal}
              className="btn-visible"
            >
              Watch Video <AiFillPlayCircle />{" "}
            </button>

            <Link className="btn" to="/storelist">
              Store <AiOutlineShoppingCart />
            </Link>

            <div className="log-content"></div>
          </div>
        </div>
      </section>

      <div
        style={{
          width: "100%",
          height: "30vh",
          backgroundColor: "#f0f7f2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "2px",
        }}
      >
        <h3 style={{ fontSize: "1,8rem" }}>
          Explore DJI Products in Different Fields
        </h3>
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
