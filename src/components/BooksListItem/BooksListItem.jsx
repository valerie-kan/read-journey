import { useState } from "react";

import css from "./BooksListItem.module.css";

import BookModal from "../BookModal/BookModal";
import GoodJobModal from "../GoodJobModal/GoodJobModal";
import clsx from "clsx";

const BooksListItem = ({ book, children }) => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isGJOpen, setIsGJOpen] = useState(false);

  const handleAddBookClick = (book) => {
    const existing = JSON.parse(localStorage.getItem("my-library")) || [];
    const updated = [...existing, book];
    localStorage.setItem("my-library", JSON.stringify(updated));
    setIsBookModalOpen(false);
    setIsGJOpen(true);
  };

  const hasChildren = Boolean(children);

  return (
    <>
      <li className={css.itemWrapper}>
        <div className={css.imgCont} onClick={() => setIsBookModalOpen(true)}>
          <img className={css.bookImg} src={book.imageUrl} alt="Book cover" />
        </div>
        <div className={css.textAndIconWrapper}>
          <div
            className={clsx(
              css.textWrapper,
              hasChildren && css.narrowTextWrapper
            )}
          >
            <p className={css.bookTtl}>{book.title}</p>
            <p className={css.bookAuthor}>{book.author}</p>
          </div>
          {children}
        </div>
      </li>
      {isBookModalOpen && (
        <BookModal
          book={book}
          onCloseClick={() => setIsBookModalOpen(false)}
          onAddClick={() => handleAddBookClick(book)}
          isOpen={isBookModalOpen}
        />
      )}
      {isGJOpen && (
        <GoodJobModal
          isOpen={isGJOpen}
          onCloseClick={() => setIsGJOpen(false)}
        />
      )}
    </>
  );
};

export default BooksListItem;
