import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] }); ///has no value //in sublin ks have value
  const [isModalOpen, setIsModalOpen] = useState(false);


  
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
        closeSidebar,
        openSidebar,
        closeSubmenu,
        openSubmenu,
        openModal,
        closeModal,
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
