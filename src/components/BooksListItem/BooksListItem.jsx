import { useState } from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";

import css from "./BooksListItem.module.css";

import { ErrorToast } from "../../utils/errorToast";
import { addBookFromRecom } from "../../redux/library/operations";

import BookModal from "../BookModal/BookModal";
import GoodJobModal from "../GoodJobModal/GoodJobModal";

const BooksListItem = ({ book, children /*, isBookInLibrary*/ }) => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isGJOpen, setIsGJOpen] = useState(false);

  const dispatch = useDispatch();

  const handleAddBookClick = async (id) => {
    try {
      // const isBookAdded = Boolean(isBookInLibrary(id));
      // if (isBookInLibrary) {
      //   ErrorToast("This book is already in your library");
      //   return;
      // }
      await dispatch(addBookFromRecom(id)).unwrap();
      setIsBookModalOpen(false);
      setIsGJOpen(true);
    } catch (e) {
      console.log(e.message);
      ErrorToast(e);
    }
  };

  const hasChildren = Boolean(children);
  const isBookCover = Boolean(book.imageUrl);

  return (
    <>
      <li className={css.itemWrapper}>
        <div className={css.imgCont} onClick={() => setIsBookModalOpen(true)}>
          <img
            className={clsx(css.bookImg, !isBookCover && css.emptyImg)}
            src={book.imageUrl || "../../assets/images/book-cover.png"}
            alt="Book cover"
          />
        </div>
        <div className={css.textAndIconWrapper}>
          <div
            className={clsx(
              css.textWrapper,
              hasChildren && css.narrowTextWrapper
            )}
          >
            <p className={css.bookTtl}>{book.title}</p>
            <p className={css.bookAuthor}>{book.author}</p>
          </div>
          {children}
        </div>
      </li>
      {isBookModalOpen && (
        <BookModal
          book={book}
          onCloseClick={() => setIsBookModalOpen(false)}
          onAddClick={() => handleAddBookClick(book._id)}
          isOpen={isBookModalOpen}
          isBookCover={isBookCover}
          hasChildren={hasChildren}
        />
      )}
      {isGJOpen && (
        <GoodJobModal
          isOpen={isGJOpen}
          onCloseClick={() => setIsGJOpen(false)}
        />
      )}
    </>
  );
};

export default BooksListItem;
