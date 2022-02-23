import React from "react";
import { useState, useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { useGlobalContext } from "../../../context";
import icons from "../../../data/icons";

const MiniSeries = () => {
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
          <div className="video-container">
            <video autoPlay muted loop>
              <source
                src="https://dji-official-fe.djicdn.com/assets/uploads/v/3f3966ba22afd5b1b87aa6bfa7ecafa2.mp4"
                type="video/mp4"
              />
            </video>{" "}
            <video autoPlay muted loop>
              <source
                src="https://dji-official-fe.djicdn.com/assets/uploads/v/3f3966ba22afd5b1b87aa6bfa7ecafa2.mp4"
                type="video/mp4"
              />
            </video>
            <div className="caption"></div>
          </div>
        </div>
      </header>
      <div className={`${newBack ? "title-hero" : "title"}`}>
        <h1 style={{ fontSize: "2.3rem", padding: "2em" }}>
          DJI Mini Drones <br></br> Which DJI Mini Drone is Right for You?
        </h1>
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
      <section className="video-desc" style={{ backgroundColor: "black" }}>
        <h2
          style={{
            padding: "2em",
            width: "50rem",
            margin: "auto",
            color: "white",
          }}
        >
          One billion colors captured by the 10-bit Dlog-M color profile of DJI
          Air <br></br> 2S let you fully immerse yourself in all the hues of
          your environment.
        </h2>
        <div className="video-container">
          <img
            src="https://dji-official-fe.djicdn.com/dps/5ded07d214f069b4080c767ef8c14d05.jpg"
            alt="mini"
          />
          <div className="caption"></div>
        </div>
        <div className="shoot" style={{ display: "flex", padding: "3em" }}>
          <div
            className="desc-shoot"
            style={{ width: "40rem", padding: "2em", fontWeight: "500" }}
          >
            <p style={{ color: "white", padding: "3em", fontWeight: "700" }}>
              The 48MP camera supports a high megapixel count that allows for
              vivid details even when you zoom in on an image. Make any moment
              fly with DJI Mini 2! Compact and ultralight at just 249 g, it
              offers a 31-minute max flight time, super-smooth 4K video, 4x
              zoom, and a whole lot more. Try QuickShots for intelligent
              automatic flight maneuvers that give you professional-looking
              videos with one tap. Compact and unbelievably intuitive, DJI Mini
              2 offers a fun, unforgettable flight experience every time you
              take off.
            </p>
          </div>

          <img
            style={{ width: "40rem", height: "70vh" }}
            src="https://dji-official-fe.djicdn.com/dps/962fbb56b47a9ed7cfca09c19835d8da.jpg"
            alt="shoot"
          />
        </div>
      </section>
    </>
  );
};

export default MiniSeries;
