import React from "react";
import "./Mavic.scss";
import { useState, useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { useGlobalContext } from "../../../context";

const MavicSeries = () => {
  const { closeSubmenu, newBack } = useGlobalContext();

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  // className={`${isSubmenuOpen ? "submenu show" : "submenu"} `}

  return (
    <>
      <header className="header" onMouseOver={closeSubmenu}>
        <div
          className={`${newBack ? "video-change" || "color-h1" : "content"}`}
        >
          <div className="inner-text" data-aos="fade-left">
            <h1>Imaging Above Everything</h1>
          </div>
          <div className="video-container">
            <video autoPlay muted loop>
              <source
                src="https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/1f55dbc7-acf1-43ae-b37a-cd47e1e9bb07.mp4"
                type="video/mp4"
              />
            </video>
            <div className="caption"></div>
          </div>
        </div>
      </header>
      <div className={`${newBack ? "title-hero" : "title"}`}>
        <h1>Seeing is Believing</h1>
      </div>

      <div className="section">
        <div className="air-desc">
          <img
            src="https://dji-official-fe.djicdn.com/dps/fec9f0daf07a8b086c86305c6d7852bf.svg"
            alt="air"
          />
          <h4>1-inch CMOS Sensor</h4>
        </div>
        <div className="air-desc">
          <img
            src="https://dji-official-fe.djicdn.com/dps/880dfd1e2d657c3975a2305f395ae6e8.svg"
            alt="air"
          />
          <h4>MasterShots</h4>
        </div>
        <div className="air-desc">
          <img
            src="https://dji-official-fe.djicdn.com/dps/92f99641ea055ef8673fe4e434547736.svg"
            alt="air"
          />
          <h4>5.4K Video</h4>
        </div>
        <div className="air-desc">
          <img
            src="https://dji-official-fe.djicdn.com/dps/1f9e0fc8b17a75b3caa34a64debcdd89.svg"
            alt="air"
          />
          <h4>12km FHD Transmission </h4>
        </div>
        <div className="air-desc">
          <img
            src="https://dji-official-fe.djicdn.com/dps/721bd6f90c331dc64abfbd4b4838c5c6.svg"
            alt="air"
          />
          <h4>Obstacle Sensing in 4 Directions</h4>
        </div>
        <div className="air-desc">
          <img
            src="https://dji-official-fe.djicdn.com/dps/38c96144f9e7680291dc82d3e9559453.svg"
            alt="air"
          />
          <h4>ADS-B</h4>
        </div>
      </div>
    </>
  );
};

export default MavicSeries;
