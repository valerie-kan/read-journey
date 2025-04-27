import { useEffect } from "react";

import css from "./Modal.module.css";

const Modal = ({ children, isOpen, onCloseClick }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (evt) => {
      if (evt.code === "Escape") {
        onCloseClick();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onCloseClick]);

  const onBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onCloseClick();
    }
  };

  return (
    <div className={css.overlay} onClick={onBackdropClick}>
      {children}
    </div>
  );
};

export default Modal;
