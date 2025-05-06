import css from "../RecommendedPage/RecommendedPage.module.css";

import Dashboard from "../../components/Dashboard/Dashboard";
import AddReading from "../../components/AddReading/AddReading";
import Progress from "../../components/Progress/Progress";
import MyReading from "../../components/MyReading/MyReading";

const ReadingPage = () => {
  return (
    <div className={css.pageWrapper}>
      <Dashboard>
        <AddReading />
        <Progress />
      </Dashboard>
      <MyReading />
    </div>
  );
};

export default ReadingPage;
