import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import css from "./Recommended.module.css";

import { selectBooks, selectPage } from "../../redux/books/selectors";
import { getBooks } from "../../redux/books/operations";

import BooksListItem from "../BooksListItem/BooksListItem";
import Pagination from "../Pagination/Pagination";

const Recommended = () => {
  const books = useSelector(selectBooks);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(getLimit());

  function getLimit() {
    const width = window.innerWidth;

    if (width < 768) {
      return 2;
    } else if (width < 1440) {
      return 8;
    } else {
      return 10;
    }
  }

  useEffect(() => {
    try {
      dispatch(getBooks({ page, limit })).unwrap();
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch, page, limit]);

  useEffect(() => {
    function handleResize() {
      const newLimit = getLimit();
      setLimit(newLimit);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={css.recomWrapper}>
      <div className={css.ttlWrapper}>
        <h2 className={css.recomTtl}>Recommended</h2>
        <Pagination page={page} />
      </div>
      <ul className={css.filmsWrapper}>
        {books.map((book) => (
          <BooksListItem book={book} />
        ))}
      </ul>
    </div>
  );
};

export default Recommended;
