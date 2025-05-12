import { useEffect, useState } from "react";

import css from "./Statistics.module.css";

import ProgressBar from "../ProgressBar/ProgressBar";

const Statistics = ({ bookId, getProgress }) => {
  const [percentRead, setPercentRead] = useState(0);
  const [pagesRead, setPagesRead] = useState(0);

  useEffect(() => {
    const data = getProgress(bookId);
    if (data) {
      const { totalPages, progress } = data;

      const maxPage = Math.max(...progress.map((item) => item.finishPage));

      const percent = Math.min(((maxPage / totalPages) * 100).toFixed(2), 100);

      setPercentRead(percent);
      setPagesRead(maxPage);
    } else {
      setPagesRead(0);
      setPercentRead(0);
    }
  }, [bookId, getProgress]);

  return (
    <>
      <p className={css.statText}>
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </p>
      <div className={css.statWrapper}>
        <ProgressBar percentRead={percentRead} />
        <div className={css.statDetails}>
          <div className={css.colorBox}></div>
          <div className={css.percAndPageWrapper}>
            <p className={css.percent}>{percentRead}%</p>
            <p className={css.pages}>{pagesRead} pages read</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
