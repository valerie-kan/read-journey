import { useDispatch, useSelector } from "react-redux";

import css from "./Library.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

import { selectBooks } from "../../redux/library/selectors";
import { deleteBook } from "../../redux/library/operations";

import { ErrorToast } from "../../utils/errorToast";
import { SuccessToast } from "../../utils/successToast";

import Select from "../Select/Select";
import EmptyLibrary from "../EmptyLibrary/EmptyLibrary";
import BooksListItem from "../BooksListItem/BooksListItem";

const Library = () => {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  const handleDeleteClick = async (id) => {
    try {
      await dispatch(deleteBook(id)).unwrap();
      SuccessToast("The book was deleted");
    } catch (error) {
      ErrorToast(error.message);
    }
  };

  return (
    <div className={css.libWrapper}>
      <div className={css.titleWrapper}>
        <h2 className={css.libTtl}>My library</h2>
        <Select />
      </div>
      {books.length > 0 ? (
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
