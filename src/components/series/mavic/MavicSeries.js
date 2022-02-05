import React from "react";
import "./Mavic.scss";
import { useState, useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { useGlobalContext } from "../../../context";
import icons from "../../../data/icons";

const MavicSeries = () => {
  const { closeSubmenu, newBack } = useGlobalContext();
  const [icon, setIcon] = useState(icons);

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
            </video>{" "}
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
          12.8 Stops <br></br>Dynamic Range
        </h3>
        <h3>
          f/2.8-f/11 <br></br>Adjustable Aperture
        </h3>
        <h3>
          24mm <br></br>Equivalent Focal Length
        </h3>
      </div>
    </>
  );
};

export default MavicSeries;
