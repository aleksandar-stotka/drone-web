import React, { useEffect, useState } from "react";
import Photo from "../components/Photo";
import { FaSearch } from "react-icons/fa";

import "./PageLogin.css";

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const PageLogin = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    url = `${mainUrl}${clientID}`;
    try {
      const response = await fetch(url);

      const data = await response.json();
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("heloo");
  };
  return (
    <main>
      <div className="search">
        <form className="search-form">
          <input type="text" placeholder="search" />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="photos">
        <div className="photos-center">
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />;
          })}
        </div>
        {loading && <h2 className="loading">loading...</h2>}
      </div>
    </main>
  );
};

export default PageLogin;
