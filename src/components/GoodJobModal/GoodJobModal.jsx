import css from "./GoodJobModal.module.css";

import Modal from "../Modal/Modal";

import sprite from "../../assets/icons/symbol-defs.svg";

const GoodJobModal = ({ isOpen, onCloseClick }) => {
  return (
    <Modal isOpen={isOpen} onCloseClick={onCloseClick}>
      <div className={css.modalWrapper}>
        <svg className={css.closeIcon} onClick={onCloseClick}>
          <use href={`${sprite}#icon-x`} />
        </svg>
        <img
          className={css.image}
          src="../../assets/images/ok-desktop@1x.png"
          alt="Ok image"
        />
        <div className={css.textCont}>
          <p className={css.modalTtl}>Good job</p>
          <p className={css.modalText}>
            Your book is now in <span className={css.span}>the library!</span>{" "}
            The joy knows no bounds and now you can start your training
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default GoodJobModal;
