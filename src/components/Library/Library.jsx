import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

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

  const [selectedStatus, setSelectedStatus] = useState("all");

  useEffect(() => {
    dispatch(getMyBooks(selectedStatus));
    setIsFiltered(selectedStatus !== "all");
  }, [dispatch, selectedStatus]);

  const [isFiltered, setIsFiltered] = useState(false);

  let books = isFiltered ? filteredBooks : myBooks;

  const handleDeleteClick = async (id) => {
    try {
      await dispatch(deleteBook(id)).unwrap();
      localStorage.removeItem(`readingProgress_${id}`);
      SuccessToast("The book was deleted");
    } catch (error) {
      ErrorToast(error.message);
    }
  };

  const filterBooks = async (status) => {
    setSelectedStatus(status);
  };

  return (
    <div className={css.libWrapper}>
      <div className={css.titleWrapper}>
        <h2 className={css.libTtl}>My library</h2>
        <Select filterBooks={filterBooks} selectedStatus={selectedStatus} />
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
                <svg className={css.binIcon} width={14} height={14}>
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
