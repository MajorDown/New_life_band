import React, { useState, useEffect } from "react";

const Modal = ({ children, onClick }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseModal = (event) => {
    if (
      event.target.id === "modalOverlay" ||
      event.target.id === "modalCloseBtn"
    ) {
      setIsOpen(false);
      onClick();
    }
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (event) => handleEscapeKey(event));
    return () => {
      window.removeEventListener("keydown", (event) => handleEscapeKey(event));
    };
  }, [isOpen]);

  const overLayStyle = {
    display: isOpen ? "flex" : "none",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  };

  const windowStyle = {
    backgroundColor: "rgb(126, 126, 126)",
    padding: "5px",
    borderRadius: "5px",
    position: "relative",
    maxWidth: "90%",
    zIndex: 6,
  };

  const closeBtnStyle = {
    padding: "5px",
    borderRadius: "5px",
    backgroundColor: "var(--colorFont)",
    color: "var(--colorBack)",
    position: "absolute",
    top: "10px",
    right: "10px",
    zIndex: 7,
    cursor: "pointer",
  };

  return (
    <div
      id="modalOverlay"
      style={overLayStyle}
      onClick={(e) => handleCloseModal(e)}
    >
      <div id="modalWindow" style={windowStyle}>
        <button
          id="modalCloseBtn"
          style={closeBtnStyle}
          onClick={(e) => handleCloseModal(e)}
        >
          X
        </button>
        <div id="modalContent">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
