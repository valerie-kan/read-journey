import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import css from "./Dairy.module.css";

import { ErrorToast } from "../../utils/errorToast";
import { SuccessToast } from "../../utils/successToast";

import { deleteReading } from "../../redux/reading/operations";

import DairyListItem from "../DairyListItem/DairyListItem";

const Dairy = ({ bookId, getProgress }) => {
  const dispatch = useDispatch();
  const [readProgress, setReadProgress] = useState({
    totalPages: 0,
    progress: [],
  });

  useEffect(() => {
    const data = getProgress(bookId);
    setReadProgress(data);
  }, [bookId, getProgress]);

  const { totalPages, progress } = readProgress;

  const handleDeleteReading = async (id) => {
    try {
      const updatedBook = await dispatch(
        deleteReading({ bookId, readingId: id })
      ).unwrap();

      if (updatedBook.progress.length === 0 && totalPages === 0) {
        localStorage.removeItem(`readingProgress_${bookId}`);
      } else {
        const updatedProgress = {
          ...readProgress,
          progress: updatedBook.progress,
          leftToRead: updatedBook.timeLeftToRead,
        };

        localStorage.setItem(
          `readingProgress_${bookId}`,
          JSON.stringify(updatedProgress)
        );
        setReadProgress(updatedProgress);
      }

      SuccessToast("The reading progress was deleted");
    } catch (e) {
      ErrorToast(e.message);
    }
  };

  return (
    <div className={css.dairyWrapper}>
      <ul className={css.dairyList}>
        {progress.map((item) => (
          <DairyListItem
            key={item._id}
            totalPages={totalPages}
            item={item}
            handleDeleteReading={handleDeleteReading}
          />
        ))}
      </ul>
    </div>
  );
};

export default Dairy;
