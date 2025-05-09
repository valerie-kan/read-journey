import { useState } from "react";

import css from "./RecommendedPage.module.css";

import AppDescription from "../../components/AppDescription/AppDescription";
import Dashboard from "../../components/Dashboard/Dashboard";
import Filters from "../../components/Filters/Filters";
import Quote from "../../components/Quote/Quote";
import Recommended from "../../components/Recommended/Recommended";

const RecommendedPage = () => {
  const [limit, setLimit] = useState(getLimit());

  function getLimit() {
    const width = window.innerWidth;

    if (width < 768) {
      return 2;
    } else if (width < 1440) {
      return 8;
    } else {
      return 10;
    }
  }

  return (
    <div className={css.pageWrapper}>
      <Dashboard>
        <Filters limit={limit} />
        <AppDescription />
        <Quote />
      </Dashboard>
      <Recommended limit={limit} setLimit={setLimit} getLimit={getLimit} />
    </div>
  );
};

export default RecommendedPage;
