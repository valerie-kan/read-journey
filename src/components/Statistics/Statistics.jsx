import { useEffect, useState } from "react";

import css from "./Statistics.module.css";

import ProgressBar from "../ProgressBar/ProgressBar";
import { ErrorToast } from "../../utils/errorToast";

const Statistics = ({ bookId }) => {
  const [percentRead, setPercentRead] = useState(0);
  const [pagesRead, setPagesRead] = useState(0);

  const getSavedProgress = (id) => {
    try {
      const savedInfo = localStorage.getItem(`readingProgress_${id}`);
      return savedInfo ? JSON.parse(savedInfo) : null;
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const data = getSavedProgress(bookId);
    if (data) {
      const { totalPages, progress } = data;
      const pagesRead = progress.reduce(
        (acc, item) => acc + (item.finishPage - item.startPage),
        0
      );
      const percent = Math.min(
        ((pagesRead / totalPages) * 100).toFixed(2),
        100
      );

      setPercentRead(percent);
      setPagesRead(pagesRead);
    } else {
      setPagesRead(0);
      setPercentRead(0);
    }
  }, [bookId]);

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
