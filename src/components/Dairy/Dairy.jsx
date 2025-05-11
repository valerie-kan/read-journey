import css from "./Dairy.module.css";

import DairyListItem from "../DairyListItem/DairyListItem";

const Dairy = ({ bookId, getProgress }) => {
  const readBook = getProgress(bookId);

  const { totalPages, progress } = readBook;

  return (
    <div className={css.dairyWrapper}>
      <ul className={css.dairyList}>
        {progress.map((item) => (
          <DairyListItem key={item._id} totalPages={totalPages} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Dairy;
