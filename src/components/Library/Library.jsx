import { useEffect, useState } from "react";

import css from "./Library.module.css";

import Select from "../Select/Select";
import EmptyLibrary from "../EmptyLibrary/EmptyLibrary";
import BooksListItem from "../BooksListItem/BooksListItem";

const Library = () => {
  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("my-library")) || []
  );

  // useEffect(() => {
  //   const books = JSON.parse(localStorage.getItem("my-library"));
  //   return books;
  // }, [])

  return (
    <div className={css.libWrapper}>
      <div className={css.titleWrapper}>
        <h2 className={css.libTtl}>My library</h2>
        <Select />
      </div>
      {books.length > 0 ? (
        books.map((book) => <BooksListItem book={book} />)
      ) : (
        <EmptyLibrary />
      )}
    </div>
  );
};

export default Library;
