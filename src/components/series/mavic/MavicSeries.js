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
          className={`${newBack && "video-change"}`}
        >
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
      <div className={`${newBack && "title-hero" }`}>
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
          <video autoPlay muted loop>
            <source
              src="https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/36f6065b-8aa6-478e-835d-43728c60a5d0.webm"
              type="video/mp4"
            />
          </video>{" "}
          <video autoPlay muted loop>
            <source
              src="https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/36f6065b-8aa6-478e-835d-43728c60a5d0.webm"
              type="video/mp4"
            />
          </video>
          <div className="caption"></div>
        </div>
        <div className="shoot" style={{ display: "flex", padding: "3em" }}>
          <div
            className="desc-shoot"
            style={{ width: "40rem", padding: "2em", fontWeight: "500" }}
          >
            <p style={{ color: "white" }}>
              Always end on a high note with Advanced RTH. This updated
              auto-return function enables Mavic 3 to automatically determine
              the optimal route back to its home point and execute it quickly.
              The secret to incredible HDR video is a high-performance Quad
              Bayer image sensor. A single frame separates exposure levels in
              different areas, accurately capturing light and dark details. The
              images are layered to create a colorful, balanced, and
              eye-catching picture with higher dynamic range.
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

export default MavicSeries;
