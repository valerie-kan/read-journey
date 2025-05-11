import clsx from "clsx";

import css from "./MyBook.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";
import { useEffect } from "react";

const MyBook = ({ book, isReading }) => {
  const isBookCover = Boolean(book.imageUrl);

  useEffect(() => {
    localStorage.getItem(``);
  }, []);

  return (
    <div className={css.readingWrapper}>
      <h2 className={css.readingTtl}>My reading</h2>
      <div className={css.bookWrapper}>
        <div className={css.imgWrapper}>
          <img
            className={clsx(css.bookCover, !isBookCover && css.emptyImg)}
            src={book.imageUrl || "../../assets/images/book-cover.png"}
            alt="Book cover"
          />
        </div>
        <p className={css.bookTtl}>{book.title}</p>
        <p className={css.bookAuthor}>{book.author}</p>
        <svg className={css.iconReading}>
          <use href={`${sprite}#${isReading ? "icon-stop" : "icon-start"}`} />
        </svg>
      </div>
    </div>
  );
};

export default MyBook;
