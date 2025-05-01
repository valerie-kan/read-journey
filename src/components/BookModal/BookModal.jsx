import css from "./BookModal.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

import Modal from "../Modal/Modal";

const BookModal = ({ book, onCloseClick, isOpen, onAddClick }) => {
  // const handleAddBookClick = (book) => {
  //   localStorage.setItem("my-library", book);
  // };

  return (
    <Modal isOpen={isOpen} onCloseClick={onCloseClick}>
      <div className={css.modal}>
        <svg className={css.closeIcon} onClick={onCloseClick}>
          <use href={`${sprite}#icon-x`} />
        </svg>
        <img className={css.image} src={book.imageUrl} alt="Book cover" />
        <p className={css.bookTtl}>{book.title}</p>
        <p className={css.bookAuthor}>{book.author}</p>
        <p className={css.pages}>{`${book.totalPages} pages`}</p>
        <button className={css.addBtn} type="button" onClick={onAddClick}>
          Add to library
        </button>
      </div>
    </Modal>
  );
};

export default BookModal;
