import { useState } from "react";

import css from "./BooksListItem.module.css";

import BookModal from "../BookModal/BookModal";

const BooksListItem = ({ book }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li
        key={book._id}
        className={css.itemWrapper}
        onClick={() => setIsOpen(true)}
      >
        <div className={css.imgCont}>
          <img className={css.bookImg} src={book.imageUrl} alt="Book cover" />
        </div>
        <p className={css.bookTtl}>{book.title}</p>
        <p className={css.bookAuthor}>{book.author}</p>
      </li>
      {isOpen && (
        <BookModal
          book={book}
          onCloseClick={() => setIsOpen(false)}
          isOpen={isOpen}
        />
      )}
    </>
  );
};

export default BooksListItem;
