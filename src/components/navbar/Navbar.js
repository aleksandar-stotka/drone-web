import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { openSidebar, closeSubmenu, openSubmenu, newBack } =
    useGlobalContext();
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const displaySubmenu = (e) => {
    const page = e.target.textContent;

    const tempBtn = e.target.getBoundingClientRect();
    console.log(tempBtn);
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 1;

    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  const changeScroll = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
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
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Search Models
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
      </div>
      {!user && (
        <>
          <Link to="/login" className="btn">
            login
          </Link>
          <Link to="/singup" className="btn">
            SingUp
          </Link>
        </>
      )}
      {user && (
        <>
          <li>heloo {user.displayName} </li>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      )}
      <Link className="btn" to="/storelist">
        Store
      </Link>
    </nav>
  );
};

export default Navbar;
