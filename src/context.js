import React, { useState, useContext, useEffect } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] }); ///has no value //in sublin ks have value
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navNotVisible, setNavNotVisible] = useState(false);
  const [newBack, setNewBack] = useState(false);

  const newBackground = async () => {
    try {
      setTimeout(() => {
        setNewBack(true);
      }, 6000);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    newBackground();
  }, [newBack]);

  const notNavVisible = () => {
    setNavNotVisible(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text); //get me the page that coming from the button
    setPage(page);
    setLocation(coordinates);
    setIsSubmenOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        isModalOpen,
        navNotVisible,
        newBack,
        closeSidebar,
        openSidebar,
        closeSubmenu,
        openSubmenu,
        openModal,
        closeModal,
        notNavVisible,
        newBackground,

        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
