import React from "react";
import { BsX } from "react-icons/bs";
import "./Modal.css";

function Modal(props) {
  const { show, handleClose, children } = props;
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="modalExitButton" onClick={handleClose}>
          <BsX />
        </button>
        {children}
      </section>
    </div>
  );
}

export default Modal;
