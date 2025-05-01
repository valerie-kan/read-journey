import { useState } from "react";

import css from "./BooksListItem.module.css";

import BookModal from "../BookModal/BookModal";
import GoodJobModal from "../GoodJobModal/GoodJobModal";

const BooksListItem = ({ book }) => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isGJOpen, setIsGJOpen] = useState(false);

  const handleAddBookClick = (book) => {
    const existing = JSON.parse(localStorage.getItem("my-library")) || [];
    const updated = [...existing, book];
    localStorage.setItem("my-library", JSON.stringify(updated));
    setIsBookModalOpen(false);
    setIsGJOpen(true);
  };

  return (
    <>
      <li className={css.itemWrapper} onClick={() => setIsBookModalOpen(true)}>
        <div className={css.imgCont}>
          <img className={css.bookImg} src={book.imageUrl} alt="Book cover" />
        </div>
        <p className={css.bookTtl}>{book.title}</p>
        <p className={css.bookAuthor}>{book.author}</p>
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
