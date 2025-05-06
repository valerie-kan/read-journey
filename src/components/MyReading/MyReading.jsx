import { useContext } from "react";

import css from "./MyReading.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

import { BookContext } from "../../context/BookContext";

const MyReading = () => {
  const { selectedBook } = useContext(BookContext);

  const handleStartReading = () => {};

  return (
    <div className={css.readingWrapper}>
      <h2 className={css.readingTtl}>My reading</h2>
      <div className={css.bookWrapper}>
        <div className={css.imgWrapper}>
          <img
            className={css.bookCover}
            src={selectedBook.imageUrl}
            alt="Book cover"
          />
        </div>
        <p className={css.bookTtl}>{selectedBook.title}</p>
        <p className={css.bookAuthor}>{selectedBook.author}</p>
        <svg className={css.iconReading} onClick={handleStartReading}>
          <use href={`${sprite}#icon-start`} />
        </svg>
      </div>
    </div>
  );
};

export default MyReading;
