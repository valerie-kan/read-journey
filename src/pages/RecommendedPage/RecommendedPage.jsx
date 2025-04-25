import AppDescription from "../../components/AppDescription/AppDescription";
import Dashboard from "../../components/Dashboard/Dashboard";
import Filters from "../../components/Filters/Filters";
import Quote from "../../components/Quote/Quote";

const RecommendedPage = () => {
  return (
    <>
      <Dashboard>
        <Filters />
        <AppDescription />
        <Quote />
      </Dashboard>
    </>
  );
};

export default RecommendedPage;
