import React from "react";
import "./Flexible.css";
import { Link } from "react-router-dom";

const Flexible = () => {
  return (
    <div className="link-container">
      <Link className="link-content" to="/company">
        <h3>Video Production</h3>
        <figure className="meal-photo">
          <img
            className="showcase"
            src="https://www.uaslogic.com/imgs/video1.jpg"
            alt="img"
          />
        </figure>
      </Link>

      <Link className="link-content" to="/company">
        <h3>Enterprise</h3>
        <figure className="meal-photo">
          <img
            className="showcase"
            src="https://dronexl.co/wp-content/uploads/2020/05/DJI-M300-is-the-fastest-deploying-enterprise-drone.jpg"
            alt="img"
          />
        </figure>
      </Link>

      <Link className="link-content" to="/company">
        <h3>agroculture</h3>
        <figure className="meal-photo">
          <img
            className="showcase"
            src="https://dji-official-fe.djicdn.com/dps/0042a681f6a88953425198b366794b57.jpg"
            alt="img"
          />
        </figure>
      </Link>
    </div>
  );
};

export default Flexible;