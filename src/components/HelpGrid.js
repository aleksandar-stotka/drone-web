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
      <div className="cart">
        {card.map((item) => {
          const { id, title, desc, icon, img, url } = item;
          return (
            <article className="row" key={id}>
              <div className="col span-2-of- box">
                <span className="icon" data-aos="fade-right">
                  {icon}
                </span>
                <h2 className="title">{title}</h2>
                <p className="desc">{desc}</p>
                <img className="drone-image" src={img} alt="img" />

                <Link className="link" to={`/person/${item.id}`}>
                  Show More
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default HelpGrid;
