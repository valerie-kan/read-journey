import { useContext, useEffect, useState } from "react";

import css from "../RecommendedPage/RecommendedPage.module.css";

import { BookContext } from "../../context/BookContext";

import Dashboard from "../../components/Dashboard/Dashboard";
import AddReading from "../../components/AddReading/AddReading";
import Progress from "../../components/Progress/Progress";
import MyBook from "../../components/MyBook/MyBook";
import Details from "../../components/Details/Details";

const ReadingPage = () => {
  const { selectedBook } = useContext(BookContext);

  const [isReading, setIsReading] = useState(false);

  const bookId = selectedBook._id;

  useEffect(() => {
    const startedBookId = localStorage.getItem(`isReading_${bookId}`);
    if (startedBookId !== null) {
      setIsReading(JSON.parse(startedBookId));
    }
  }, [bookId]);

  const saved = localStorage.getItem(`readingProgress_${bookId}`) || null;

  return (
    <div className={css.pageWrapper}>
      <Dashboard>
        <AddReading
          bookId={bookId}
          isReading={isReading}
          setIsReading={setIsReading}
        />
        {saved ? <Details bookId={bookId} /> : <Progress />}
      </Dashboard>
      <MyBook book={selectedBook} isReading={isReading} savedBook={saved} />
    </div>
  );
};

export default ReadingPage;
