import React from "react";
import "./Flexible.css";

const Flexible = () => {
  return (
    <div className="flex-container">
      <div className="flex-image">
        <img
          src="https://www.cognism.com/hubfs/Microsite%20V2.0%20V1%20FINAL-40.png"
          alt="flex"
          className="flex-img"
        />
      </div>

      <div className="flex-description">
        <h3>Flexible workflows</h3>
        <h4>Regardless of whether you're looking to...</h4>
        <ul className="flex-content">
          <li>
            <div className="circle"></div> Build lists & find contact details
            for ideal-fit future customers
          </li>
          <li>
            <div className="circle"></div> Qualify target accounts and identify
            the buying committee
          </li>
          <li>
            <div className="circle"></div> Refresh and enhance stale or
            incomplete data
          </li>
          <li>
            <div className="circle"></div> Enrich your Sales Navigator search
            with actionable information
          </li>
        </ul>
        <button className="btn">Learn More</button>
      </div>
    </div>
  );
};

export default Flexible;
