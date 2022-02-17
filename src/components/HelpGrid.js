import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import grid from "../data/grid";
import "./HelpGrid.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const HelpGrid = () => {
  const [card, setCard] = useState(grid);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="section">
        <div className="dron-center">
          {card.map((item) => {
            const { id, title, img, descTwo } = item;
            return (
              <div className="drones" key={id}>
                <div className="img-container">
                  <img src={img} alt={title} />
                  <div className="drones-footer">
                    <h3 className="drone-title">{title}</h3>
                    <Link to={`/dron/${id}`} className="btn">
                      show more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HelpGrid;
