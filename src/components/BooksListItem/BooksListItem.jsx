import css from "./BooksListItem.module.css";

const BooksListItem = ({ book }) => {
  return (
    <li key={book._id} className={css.itemWrapper}>
      <div className={css.imgCont}>
        <img className={css.bookImg} src={book.imageUrl} alt="Book cover" />
      </div>
      <p className={css.bookTtl}>{book.title}</p>
      <p className={css.bookAuthor}>{book.author}</p>
    </li>
  );
};

export default BooksListItem;
