import React, { useEffect, useState } from "react";
import grid from "../data/grid";
import { useParams } from "react-router-dom";

const InfoGrid = () => {
  const [title, setTitle] = useState("name");
  const [video, setDesc] = useState("desc");
  const [image, setImage] = useState();
  const { id } = useParams();

  useEffect(() => {
    const newGrid = grid.find((name) => name.id === parseInt(id));
    setTitle(newGrid.title);
    const newDesc = grid.find((name) => name.id === parseInt(id));
    setDesc(newDesc.desc);
    const newImage = grid.find((name) => name.id === parseInt(id));
    setImage(newImage.img);
  }, []);
  return (
    <div className="container">
      <p>{video}</p>
      <h2>{title}</h2>
      <img src={image} alt="img" />
    </div>
  );
};

export default InfoGrid;
