import React from "react";
import "./Air.scss";
import { useState, useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { useGlobalContext } from "../../context";
import icons from "../../data/icons";

const AirSeries = () => {
  const { closeSubmenu, newBack } = useGlobalContext();
  const [icon, setIcon] = useState(icons);

  useEffect(() => {
    Aos.init({ duration: 4000 });
  }, []);

  // className={`${isSubmenuOpen ? "submenu show" : "submenu"} `}

  return (
    <>
      <header className="header" onMouseOver={closeSubmenu}>
        <div
          className={`${newBack ? "video-change" || "color-h1" : "content"}`}
        >
           <div className="inner-text" data-aos="fade-left">
            <h1>Worry Less, Discover More</h1>
          </div>
         
          <div className="video-container">
         
            <video autoPlay muted loop>
              <source
                src="https://cdn.videvo.net/videvo_files/video/free/2019-05/large_watermarked/190416_10_Drone1_07_preview.mp4"
                type="video/mp4"
              />
            </video>
            <div className="caption"></div>
          </div>
        </div>
      </header>
      <div className={`${newBack ? "title-hero" : "title"}`}>
        <h1>Big World, Big Sensor</h1>
      </div>

      <div>
        <div className="air-desc">
          {icon.map((photo) => {
            const { img, title } = photo;
            return (
              <div className="section-icon">
                <img src={img} alt="icon" />
                <h4>{title}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <div className="dron-desc">
        <h3>
          20MP <br></br>Photos
        </h3>
        <h3>
         5.4K/30fps + 4k/60fps <br></br>Dynamic Range
        </h3>
        <h3>
         1-inch <br></br>cmos Sensor
        </h3>
        <h3>
         2.4um <br></br>Pixels
        </h3>
      </div>
    </>
  );
};

export default AirSeries;
