import React from "react";

import { useState, useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { useGlobalContext } from "../../context";
import icons from "../../data/icons";

const DjiSeres = () => {
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
                src="https://cdn.vidyard.com/videos/NhjoJBK5MeXBx2WK6ylFfQ/source.mp4?B1718c0wGCbn-hSE-FJWsDJnCsQL1IOQMnUQOwMsLwXsLUbXuJfEbW8SL_9QUcbcNX48F-aYPrmm0Nbn336nu4Kh3HUS1Rw3e-DEaup2VTkLKQ"
                type="video/mp4"
              />
            </video>{" "}
            <video autoPlay muted loop>
              <source
                src="https://cdn.vidyard.com/videos/NhjoJBK5MeXBx2WK6ylFfQ/source.mp4?B1718c0wGCbn-hSE-FJWsDJnCsQL1IOQMnUQOwMsLwXsLUbXuJfEbW8SL_9QUcbcNX48F-aYPrmm0Nbn336nu4Kh3HUS1Rw3e-DEaup2VTkLKQ"
                type="video/mp4"
              />
            </video>
            <div className="caption"></div>
          </div>
        </div>
      </header>
      <div className={`${newBack ? "title-hero" : "title"}`}>
        <h1 style={{ fontSize: "3rem", padding: "2em" }}>
          Rip through the sky with speed, power, and complete control
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
          Brand-New S Mode<br></br>Photos
        </h3>
        <h3>
          12.8 Stops <br></br>Dynamic Range
        </h3>
        <h3>
          Dji <br></br>DJI FPV Remote Controller 2
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
            src="https://dji-official-fe.djicdn.com/dps/fab005b627b32d056534431f6bf6cc05.jpg"
            alt="shoot"
          />
        </div>
      </section>
    </>
  );
};
export default DjiSeres;
