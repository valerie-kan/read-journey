import css from "./RecommendedPage.module.css";

import AppDescription from "../../components/AppDescription/AppDescription";
import Dashboard from "../../components/Dashboard/Dashboard";
import Filters from "../../components/Filters/Filters";
import Quote from "../../components/Quote/Quote";
import Recommended from "../../components/Recommended/Recommended";

const RecommendedPage = () => {
  return (
    <div className={css.pageWrapper}>
      <Dashboard>
        <Filters />
        <AppDescription />
        <Quote />
      </Dashboard>
      <Recommended />
    </div>
  );
};

export default RecommendedPage;
