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
            <h1 style={{color:"wheat", fontSize: '4rem'}}>Worry Less, Discover More</h1>
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
        <h1 style={{color:"rgb(250, 133, 0)"}}>Big World, Big Sensor</h1>
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
       <div className="video-container" style={{backgroundColor: 'black', width:"100%"}}>
          <video autoPlay muted loop>
            <source
              src="https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/52263be6-af89-428f-92c1-5158ad807d65.mp4"
              type="video/mp4"
            />
          </video>{" "}
          <video autoPlay muted loop>
            <source
              src="https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/52263be6-af89-428f-92c1-5158ad807d65.mp4"
              type="video/mp4"
            />
          </video>
          <div className="caption"></div>
        </div>
      <div className="shoot" style={{ display: "flex", padding: "3em" , backgroundColor: 'black'}}>
          <div
            className="desc-shoot"
            style={{ width: "40rem", padding: "2em", fontWeight: "500" }}
          >
            <p style={{ color: "white",fontSize:'1.4rem' }}>
              Shoot RAW format photos with a dynamic range of up to 12.6 stops
              to capture more visual information in every scene, even when
              lighting conditions are bad or complex. <br></br> This provides
              more flexibility in post-processing, giving creators more
              possibilities to get the look they want.
            </p>
          </div>

          <img
            style={{ width: "40rem", height: "70vh" }}
            src="https://dji-official-fe.djicdn.com/dps/962fbb56b47a9ed7cfca09c19835d8da.jpg"
            alt="shoot"
          />
        </div>
    </>
  );
};

export default AirSeries;
