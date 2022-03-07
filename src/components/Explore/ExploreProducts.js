import React from "react";
import { Link } from "react-router-dom";
import "./Explore.css";

function ExploreProducts() {
  return (
    <>
      <div style={{ width: "40rem", margin: "auto", padding: "2em" }}>
        <h2 style={{ fontSize: "2rem" }}>
          Explore DJI Products in Different Fields
        </h2>
      </div>
      <div
        className="container"
        style={{
          width: "100%",
          height: "70vh",
          padding: "4em",
        }}
      >
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "auto",
            width: "",
            textAlign: "center",
          }}
        >
          <Link
            to="video"
            className="img-drone"
            style={{
              width: "30rem",
              backgroundImage:
                "url(" +
                "https://dronelife.com/wp-content/uploads/2020/08/SI202007250043_news-scaled-e1597843297265.jpg" +
                ")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "50vh",
              textAlign: "center",
            }}
          >
            <h1 style={{ padding: "2em", color: "white" }}>Video </h1>
          </Link>
          <Link
            className="img-drone"
            style={{
              width: "30rem",

              backgroundImage:
                "url(" +
                "https://image.made-in-china.com/43f34j00hflRoJiqhUkb/Long-Flight-Range-Agriculture-Spraying-Drone.jpg" +
                ")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <h1 style={{ padding: "2em", color: "white" }}>Agriculture</h1>
            <Link>SHOW MORE</Link>
          </Link>

          <Link
            className="img-drone"
            style={{
              width: "30rem",
              backgroundImage:
                "url(" +
                "https://cms.qz.com/wp-content/uploads/2019/03/2018-SkyPixel-Contest-Peoples-Choice-Prize-Lofoten%E7%BE%A4%E5%B2%9B%E8%B6%B3%E7%90%83%E7%9A%84%E7%94%9F%E5%91%BD%E5%8A%9B1.jpg?quality=75&strip=all&w=1600&h=900&crop=1" +
                ")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <h1 style={{ padding: "2em", color: "white" }}>Enterprise</h1>
            <Link>SHOW MORE</Link>
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default ExploreProducts;
