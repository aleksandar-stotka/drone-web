import React, { useEffect, useState } from "react";
import loginItems from "../data/login-items";
import Photos from "../components/Photos";
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
      console.log(data);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);
  return <div>photos</div>;
};

export default PageLogin;
