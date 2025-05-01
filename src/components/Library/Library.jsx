import { useEffect, useState } from "react";

import css from "./Library.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

import Select from "../Select/Select";
import EmptyLibrary from "../EmptyLibrary/EmptyLibrary";
import BooksListItem from "../BooksListItem/BooksListItem";

const Library = () => {
  const handleDeleteClick = () => {};

  return (
    <div className={css.libWrapper}>
      <div className={css.titleWrapper}>
        <h2 className={css.libTtl}>My library</h2>
        <Select />
      </div>
      {books.length > 0 ? (
        <ul className={css.booksWrapper}>
          {books.map((book) => (
            <BooksListItem book={book}>
              <div className={css.iconWrapper}>
                <svg
                  width={14}
                  height={14}
                  onClick={() => handleDeleteClick(book._id)}
                >
                  <use href={`${sprite}#icon-trash`} />
                </svg>
              </div>
            </BooksListItem>
          ))}
        </ul>
      ) : (
        <EmptyLibrary />
      )}
    </div>
  );
};

export default Library;
