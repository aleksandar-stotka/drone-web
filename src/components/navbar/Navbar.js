import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import { Input } from "@material-ui/core";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  onAddCategory,
} from "@material-ui/core";

import "./Navbar.scss";
import Product from "../Products/Product/Product";
const ariaLabel = { "aria-label": "description" };

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const [name, setName] = useState("");

  const { openSidebar, closeSubmenu, openSubmenu, products } =
    useGlobalContext();
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 });
  console.log(products);
  const displaySubmenu = (e) => {
    const page = e.target.textContent;

    const tempBtn = e.target.getBoundingClientRect();
    console.log(tempBtn);
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 1;

    openSubmenu(page, { center, bottom });
  };
  const changeScroll = () => {
    if (window.innerWidth <= 960) {
      setButton(true);
    } else {
      setButton(false);
    }
  };
  ///////////////////////////////////
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      products.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
    } else {
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  useEffect(() => {
    changeScroll();
  }, []);
  window.addEventListener("resize", changeScroll);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  ///////////////////////////////////////

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
          <li>
            <Link
              style={{
                background: "none",
                color: "rgb(250, 133, 0)",
                fontSize: "2rem",
              }}
              to="/"
            >
              HOME
            </Link>
          </li>
        </div>
        <ul className="nav-links">
          <li>
            <button
              style={{
                color: "white",
                letterSpacing: "2px",

                outline: "none",
                background: "none",
                fontSize: "1.3rem",
                border: "none",
              }}
              onMouseOver={displaySubmenu}
            >
              Search Models
            </button>
          </li>

          <li>
            <button
              style={{
                color: "white",
                letterSpacing: "2px",
                margin: "0",

                outline: "none",
                background: "none",
                fontSize: "1.3rem",
                border: "none",
              }}
              onMouseOver={displaySubmenu}
            >
              Specialized
            </button>
          </li>
        </ul>
      </div>
      <div className="log-links">
        {!user && (
          <>
            <Link style={{ background: "none" }} to="/login">
              login
            </Link>
            <Link style={{ background: "none" }} to="/singup">
              SingUp
            </Link>
          </>
        )}
      </div>
      {user && (
        <>
          <h2>heloo {user.displayName}</h2>{" "}
          <button
            style={{
              padding: "0.6em",
              backgroundColor: "green",
              color: "white",
              cursor: "pointer",
              fontSize: "1em",
              borderRadius: "40%",
            }}
            onClick={logout}
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
