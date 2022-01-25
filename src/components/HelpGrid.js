import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import grid from "../data/grid";
import "./HelpGrid.css";
import Aos from "aos";
import "aos/dist/aos.css";

const HelpGrid = () => {
  const [card, setCard] = useState(grid);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="card">
        {card.map((item) => {
          const { id, title, desc, icon, url } = item;
          return (
            <article className="card-content" key={id}>
              <span className="icon" data-aos="fade-right">
                {icon}{" "}
              </span>
              <div className="content-inner">
                <h3 className="title">{title}</h3>
                <p className="desc">{desc}</p>
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
