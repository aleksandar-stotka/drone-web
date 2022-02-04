import React from "react";
import { useGlobalContext } from "../../context";
import { FaTimes } from "react-icons/fa";
import "./Modal.css";
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <div className="video-container">
          <iframe
            width="600"
            height="400"
            src="https://www.youtube.com/embed/btU5vQzgt0k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="caption"></div>
        </div>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
