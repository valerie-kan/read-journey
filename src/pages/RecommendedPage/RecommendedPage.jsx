// import css from "./RecommendedPage.module.css";

import AppDescription from "../../components/AppDescription/AppDescription";
import Dashboard from "../../components/Dashboard/Dashboard";
import Filters from "../../components/Filters/Filters";

const RecommendedPage = () => {
  return (
    <>
      <Dashboard>
        <Filters />
        <AppDescription />
      </Dashboard>
    </>
  );
};

export default RecommendedPage;
