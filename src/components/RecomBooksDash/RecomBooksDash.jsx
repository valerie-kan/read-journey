import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./RecomBooksDash.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

import { selectRecomBooks, selectIsLoading } from "../../redux/books/selectors";
import { getBooks } from "../../redux/books/operations";
import { clearBooks } from "../../redux/books/slice";

import Loader from "../Loader";
import { Link } from "react-router";

const RecomBooksDash = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectRecomBooks);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    try {
      dispatch(clearBooks());
      dispatch(getBooks({ limit: 3 })).unwrap();
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  return (
    <div className={css.sectionWrapper}>
      <h3 className={css.sectionTtl}>Recommended books</h3>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.booksWrapper}>
          {books.map((book) => (
            <li key={book._id} className={css.itemWrapper}>
              <div className={css.imgCont}>
                <img
                  className={css.bookImg}
                  src={book.imageUrl}
                  alt="Book cover"
                />
              </div>
              <p className={css.bookTtl}>{book.title}</p>
              <p className={css.bookAuthor}>{book.author}</p>
            </li>
          ))}
        </ul>
      )}
      <div className={css.linkCont}>
        <Link className={css.link} to="/recommended">
          Home
        </Link>
        <Link className={css.linkIcon} to="/recommended">
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-log-in`} />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default RecomBooksDash;
