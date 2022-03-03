import React from "react";
import PropTypes from "prop-types";
import Slider from "../slider/Slider";
import VideoSlider from "../videoSlider/VideoSlider";
import "./VideoProduction.css";
import { useGlobalContext } from "../../context";

function VideoProduction() {
  const { closeSubmenu, newBack } = useGlobalContext();

  return (
    <>
      <header className="header" onMouseOver={closeSubmenu}>
        <div>
          <div className="video-container">
            <video autoPlay muted loop>
              <source
                src="https://player.vimeo.com/external/424204389.sd.mp4?s=ee83305e1c116264dac94606035cc773d8062d35&profile_id=139&oauth2_token_id=57447761"
                type="video/mp4"
              />
            </video>{" "}
            <video autoPlay muted loop>
              <source
                src="https://docs.djicdn.com/video/720.mp4"
                type="video/mp4"
              />
            </video>
            <div className="caption"></div>
          </div>
        </div>
      </header>
      <VideoSlider />
    </>
  );
}

export default VideoProduction;
