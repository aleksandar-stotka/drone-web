import React, { useState, Link } from "react";
import grid from "../data/grid";
import "./HelpGrid.css";

const HelpGrid = () => {
  const [card, setCard] = useState(grid);

  return (
    <>
      <div className="card">
        {card.map((item) => {
          const { id, title, desc, icon, url } = item;
          return (
            <article className="card-content" key={id}>
              <h3 className="title">{title}</h3>
              <p className="desc">{desc}</p>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default HelpGrid;
