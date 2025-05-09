import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import css from "./Library.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

import {
  selectFiltered,
  selectIsLoading,
  selectMyBooks,
} from "../../redux/library/selectors";
import { deleteBook, getMyBooks } from "../../redux/library/operations";

import { ErrorToast } from "../../utils/errorToast";
import { SuccessToast } from "../../utils/successToast";

import Select from "../Select/Select";
import EmptyLibrary from "../EmptyLibrary/EmptyLibrary";
import BooksListItem from "../BooksListItem/BooksListItem";
import Loader from "../Loader";

const Library = () => {
  const dispatch = useDispatch();
  const myBooks = useSelector(selectMyBooks);
  const filteredBooks = useSelector(selectFiltered);
  const isLoading = useSelector(selectIsLoading);

  console.log(myBooks);

  const [isFiltered, setIsFiltered] = useState(false);
  let books = myBooks;

  if (isFiltered) {
    books = filteredBooks;
  } else {
    books = myBooks;
  }

  const handleDeleteClick = async (id) => {
    try {
      await dispatch(deleteBook(id)).unwrap();
      SuccessToast("The book was deleted");
    } catch (error) {
      ErrorToast(error.message);
    }
  };

  const filterBooks = async (status) => {
    if (status !== "all") {
      setIsFiltered(true);
      try {
        await dispatch(getMyBooks(status)).unwrap();
      } catch (error) {
        ErrorToast(error.message);
      }
    } else {
      setIsFiltered(false);
    }
  };

  return (
    <div className={css.libWrapper}>
      <div className={css.titleWrapper}>
        <h2 className={css.libTtl}>My library</h2>
        <Select filterBooks={filterBooks} />
      </div>
      {isLoading ? (
        <Loader />
      ) : books.length > 0 ? (
        <ul className={css.booksWrapper}>
          {books.map((book) => (
            <BooksListItem key={book._id} book={book}>
              <div
                className={css.iconWrapper}
                onClick={() => handleDeleteClick(book._id)}
              >
                <svg width={14} height={14}>
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
