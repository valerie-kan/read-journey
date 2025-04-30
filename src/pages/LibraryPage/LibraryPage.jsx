import css from "../RecommendedPage/RecommendedPage.module.css";

import AddBook from "../../components/AddBook/AddBook";
import Dashboard from "../../components/Dashboard/Dashboard";
import RecomBooksDash from "../../components/RecomBooksDash/RecomBooksDash";
import Library from "../../components/Library/Library";

const LibraryPage = () => {
  return (
    <div className={css.pageWrapper}>
      <Dashboard>
        <AddBook />
        <RecomBooksDash />
      </Dashboard>
      <Library />
    </div>
  );
};

export default LibraryPage;
