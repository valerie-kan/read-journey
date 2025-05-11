import css from "./BookIsDoneModal.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

import Modal from "../Modal/Modal";

const BookIsDoneModal = ({ isModalOpen, onCloseClick }) => {
  return (
    <Modal isOpen={isModalOpen} onCloseClick={onCloseClick}>
      <div className={css.modal}>
        <svg className={css.closeIcon} onClick={onCloseClick}>
          <use href={`${sprite}#icon-x`} />
        </svg>
        <img
          className={css.booksImg}
          src="../../assets/images/books-desktop@1x.png"
          alt="Book image"
        />
        <p className={css.modalTtl}>The book is read</p>
        <p className={css.modalText}>
          It was an <span className={css.modalSpan}>exciting journey</span>,
          where each page revealed new horizons, and the characters became
          inseparable friends.
        </p>
      </div>
    </Modal>
  );
};

export default BookIsDoneModal;
