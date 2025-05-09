import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import css from "./Recommended.module.css";

import {
  selectRecomBooks,
  selectIsLoading,
  selectTotalPages,
} from "../../redux/books/selectors";
import { getBooks } from "../../redux/books/operations";
import { clearBooks } from "../../redux/books/slice";

import { ErrorToast } from "../../utils/errorToast";

import BooksListItem from "../BooksListItem/BooksListItem";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader";

const Recommended = ({ limit, getLimit, setLimit }) => {
  const dispatch = useDispatch();
  const books = useSelector(selectRecomBooks);
  const isLoading = useSelector(selectIsLoading);
  const totalPages = useSelector(selectTotalPages);

  const [page, setPage] = useState(1);

  useEffect(() => {
    try {
      dispatch(clearBooks());
      dispatch(getBooks({ page, limit })).unwrap();
    } catch (error) {
      ErrorToast(error.message);
    }
  }, [dispatch, page, limit]);

  useEffect(() => {
    function handleResize() {
      const newLimit = getLimit();
      if (newLimit !== limit) {
        return setLimit(newLimit);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [getLimit, limit, setLimit]);

  return (
    <div className={css.recomWrapper}>
      <div className={css.ttlWrapper}>
        <h2 className={css.recomTtl}>Recommended</h2>
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.booksWrapper}>
          {books.map((book) => (
            <BooksListItem key={book._id} book={book} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Recommended;
