import React from "react";

const Modal = ({ children, title, closeModal }) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{title}</h3>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
