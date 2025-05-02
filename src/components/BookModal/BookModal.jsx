import css from "./BookModal.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

import Modal from "../Modal/Modal";
import clsx from "clsx";

const BookModal = ({
  book,
  onCloseClick,
  isOpen,
  onAddClick,
  isBookCover,
  hasChildren,
}) => {
  const onReadClick = () => {};

  return (
    <Modal isOpen={isOpen} onCloseClick={onCloseClick}>
      <div className={css.modal}>
        <svg className={css.closeIcon} onClick={onCloseClick}>
          <use href={`${sprite}#icon-x`} />
        </svg>
        <img
          className={clsx(css.image, !isBookCover && css.emptyImg)}
          src={book.imageUrl || "../../assets/images/book-cover.png"}
          alt="Book cover"
        />
        <p className={css.bookTtl}>{book.title}</p>
        <p className={css.bookAuthor}>{book.author}</p>
        <p className={css.pages}>{`${book.totalPages} pages`}</p>
        {hasChildren ? (
          <button className={css.bookBtn} type="button" onClick={onReadClick}>
            Start reading
          </button>
        ) : (
          <button className={css.bookBtn} type="button" onClick={onAddClick}>
            Add to library
          </button>
        )}
      </div>
    </Modal>
  );
};

export default BookModal;
