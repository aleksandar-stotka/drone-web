import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "../../data";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <div key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label, desc } = link;
                    return (
                      <Link key={index} to={url}>
                        {icon}
                        {label}
                        {desc}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
